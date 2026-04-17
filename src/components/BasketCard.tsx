import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { Basket } from '../mockData';
import styles from './BasketCard.module.css';

interface Props {
  basket: Basket;
}

const BasketCard: React.FC<Props> = ({ basket }) => {
  return (
    <motion.div 
      className={styles.card}
      whileHover={{ y: -10 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Link to={`/product/${basket.id}`}>
        <div className={styles.imageContainer}>
          {basket.image ? (
            <img src={basket.image} alt={basket.name} className={styles.basketImage} />
          ) : (
            <div className={styles.imagePlaceholder} style={{ backgroundColor: basket.imageColor }}></div>
          )}
          <div className={styles.overlay}>View Details</div>
        </div>
      </Link>
      <div className={styles.info}>
        <span className={styles.category}>{basket.category}</span>
        <h3 className={styles.name}>{basket.name}</h3>
        <p className={styles.price}>KES {basket.price.toLocaleString()}</p>
      </div>
    </motion.div>
  );
};

export default BasketCard;
