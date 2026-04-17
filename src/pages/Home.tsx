import React from 'react';
import { Link } from 'react-router-dom';
import { baskets } from '../mockData';
import BasketCard from '../components/BasketCard';
import styles from './Home.module.css';

const Home: React.FC = () => {
  const featured = baskets.slice(0, 3);

  return (
    <div className={styles.home}>
      <header className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1>Stylish Kenyan Basketry</h1>
            <p>Elevate your space with authentic Gitonga and Kitonga baskets, handcrafted with love and tradition.</p>
            <Link to="/shop" className="btn btn-primary">Shop Collection</Link>
          </div>
        </div>
      </header>

      <section className={styles.categories}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Shop by Category</h2>
          <div className={styles.categoryGrid}>
            {['Nesting', 'Kiondo', 'Wall Decor'].map(cat => (
              <Link key={cat} to={`/shop?category=${cat}`} className={styles.categoryCard}>
                <h3>{cat}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.featured}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Featured Designs</h2>
          <div className={styles.productGrid}>
            {featured.map(basket => (
              <BasketCard key={basket.id} basket={basket} />
            ))}
          </div>
          <div className={styles.center}>
            <Link to="/shop" className={styles.viewAll}>View All Baskets &rarr;</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
