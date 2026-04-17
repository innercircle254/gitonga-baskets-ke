import React from 'react';
import { useCart } from '../CartContext';
import { Trash2, Plus, Minus } from 'lucide-react';
import styles from './Cart.module.css';

const Cart: React.FC = () => {
  const { cart, total, updateQuantity, removeFromCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className={`container ${styles.empty}`}>
        <h2>Your cart is empty</h2>
        <p>Go to the shop to find something beautiful.</p>
        <a href="/shop" className="btn btn-primary">Continue Shopping</a>
      </div>
    );
  }

  return (
    <div className="container">
      <h1 className={styles.title}>Your Shopping Cart</h1>
      <div className={styles.cartGrid}>
        <div className={styles.items}>
          {cart.map(item => (
            <div key={item.id} className={styles.item}>
              <div className={styles.itemImage}>
                {item.image ? (
                  <img src={item.image} alt={item.name} className={styles.thumbImage} />
                ) : (
                  <div className={styles.imagePlaceholder} style={{ backgroundColor: item.imageColor }}></div>
                )}
              </div>
              <div className={styles.itemInfo}>
                <h3>{item.name}</h3>
                <p>KES {item.price.toLocaleString()}</p>
                <div className={styles.controls}>
                  <button onClick={() => updateQuantity(item.id, -1)}><Minus size={16} /></button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, 1)}><Plus size={16} /></button>
                </div>
              </div>
              <button className={styles.remove} onClick={() => removeFromCart(item.id)}>
                <Trash2 size={20} />
              </button>
            </div>
          ))}
        </div>
        <div className={styles.summary}>
          <h3>Order Summary</h3>
          <div className={styles.row}>
            <span>Subtotal</span>
            <span>KES {total.toLocaleString()}</span>
          </div>
          <div className={styles.row}>
            <span>Delivery (Nairobi)</span>
            <span>KES 300</span>
          </div>
          <div className={`${styles.row} ${styles.total}`}>
            <span>Total</span>
            <span>KES {(total + 300).toLocaleString()}</span>
          </div>
          <button className={`btn btn-primary ${styles.checkoutBtn}`}>
            Proceed to Checkout
          </button>
          <div className={styles.mpesa}>
            <p>Pay via M-Pesa</p>
            <small>Till Number: 123456</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
