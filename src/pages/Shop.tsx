import React, { useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { baskets } from '../mockData';
import BasketCard from '../components/BasketCard';
import { Search, SlidersHorizontal } from 'lucide-react';
import styles from './Shop.module.css';

const Shop: React.FC = () => {
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const categoryFilter = query.get('category');
  const searchParam = query.get('search') || '';

  const [searchQuery, setSearchQuery] = useState(searchParam);
  const [maxPrice, setMaxPrice] = useState(5000);
  const [showFilters, setShowFilters] = useState(false);

  const filteredBaskets = useMemo(() => {
    return baskets.filter(b => {
      const matchesCategory = !categoryFilter || b.category === categoryFilter;
      const matchesSearch = b.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           b.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesPrice = b.price <= maxPrice;
      return matchesCategory && matchesSearch && matchesPrice;
    });
  }, [categoryFilter, searchQuery, maxPrice]);

  return (
    <div className="container">
      <div className={styles.shopHeader}>
        <h1>{categoryFilter ? `${categoryFilter} Baskets` : 'All Baskets'}</h1>
        <p>Handwoven perfection for your lifestyle.</p>
      </div>

      <div className={styles.controls}>
        <div className={styles.searchBar}>
          <Search size={20} />
          <input 
            type="text" 
            placeholder="Search baskets..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <button className={styles.filterToggle} onClick={() => setShowFilters(!showFilters)}>
          <SlidersHorizontal size={20} />
          <span>Filters</span>
        </button>
      </div>

      {showFilters && (
        <div className={styles.filterPanel}>
          <div className={styles.filterGroup}>
            <label>Max Price: KES {maxPrice.toLocaleString()}</label>
            <input 
              type="range" 
              min="1000" 
              max="5000" 
              step="500"
              value={maxPrice}
              onChange={(e) => setMaxPrice(parseInt(e.target.value))}
            />
          </div>
        </div>
      )}

      <div className={styles.shopGrid}>
        {filteredBaskets.length > 0 ? (
          filteredBaskets.map(basket => (
            <BasketCard key={basket.id} basket={basket} />
          ))
        ) : (
          <p className={styles.noResults}>No baskets found matching your criteria.</p>
        )}
      </div>
    </div>
  );
};

export default Shop;
