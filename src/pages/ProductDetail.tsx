import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { baskets } from '../mockData';
import { useCart } from '../CartContext';
import styles from './ProductDetail.module.css';

const ProductDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const basket = baskets.find(b => b.id === id);

  if (!basket) {
    return <div className="container">Product not found.</div>;
  }

  const handleAddToCart = () => {
    addToCart(basket);
    navigate('/cart');
  };

  return (
    <div className="container">
      <div className={styles.detailGrid}>
        <div className={styles.imageSection}>
          {basket.image ? (
            <img src={basket.image} alt={basket.name} className={styles.productImage} />
          ) : (
            <div className={styles.imagePlaceholder} style={{ backgroundColor: basket.imageColor }}></div>
          )}
        </div>
        <div className={styles.infoSection}>
          <span className={styles.category}>{basket.category}</span>
          <h1>{basket.name}</h1>
          <p className={styles.price}>KES {basket.price.toLocaleString()}</p>
          <div className={styles.description}>
            <h3>Description</h3>
            <p>{basket.description}</p>
          </div>
          <div className={styles.details}>
            <p><strong>Materials:</strong> {basket.materials.join(', ')}</p>
            <p><strong>Available Colors:</strong> {basket.colors.join(', ')}</p>
          </div>
          <button onClick={handleAddToCart} className="btn btn-primary" style={{ marginRight: '1rem' }}>Add to Cart</button>
          <a href={`https://wa.me/254713988224?text=Hi, I'm interested in the ${basket.name}`} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ display: 'inline-block' }}>
            Inquire on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
