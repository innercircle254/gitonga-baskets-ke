import React, { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { baskets } from '../mockData';
import BasketCard from '../components/BasketCard';
import styles from './Shop.module.css';

const Shop: React.FC = () => {
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const categoryFilter = query.get('category');

  const filteredBaskets = useMemo(() => {
    if (!categoryFilter) return baskets;
    return baskets.filter(b => b.category === categoryFilter);
  }, [categoryFilter]);

  return (
    <div className="container">
      <div className={styles.shopHeader}>
        <h1>{categoryFilter ? `${categoryFilter} Baskets` : 'All Baskets'}</h1>
        <p>Handwoven perfection for your lifestyle.</p>
      </div>

      <div className={styles.shopGrid}>
        {filteredBaskets.map(basket => (
          <BasketCard key={basket.id} basket={basket} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
