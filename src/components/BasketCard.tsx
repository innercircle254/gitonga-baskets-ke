import React from 'react';
import { Link } from 'react-router-dom';
import type { Basket } from '../mockData';
import styles from './BasketCard.module.css';

interface Props {
  basket: Basket;
}

const BasketCard: React.FC<Props> = ({ basket }) => {
  return (
    <div className={styles.card}>
      <Link to={`/product/${basket.id}`}>
        <div className={styles.imagePlaceholder} style={{ backgroundColor: basket.imageColor }}>
          <div className={styles.overlay}>View Details</div>
        </div>
      </Link>
      <div className={styles.info}>
        <span className={styles.category}>{basket.category}</span>
        <h3 className={styles.name}>{basket.name}</h3>
        <p className={styles.price}>KES {basket.price.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default BasketCard;
