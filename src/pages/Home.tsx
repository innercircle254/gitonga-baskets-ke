import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { baskets } from '../mockData';
import BasketCard from '../components/BasketCard';
import styles from './Home.module.css';

const Home: React.FC = () => {
  const featured = baskets.slice(0, 3);

  return (
    <div className={styles.home}>
      <header className={styles.hero}>
        <div className="container">
          <motion.div 
            className={styles.heroContent}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Stylish Kenyan Basketry
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Elevate your space with authentic Gitonga and Kitonga baskets, handcrafted with love and tradition.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <Link to="/shop" className="btn btn-primary">Shop Collection</Link>
            </motion.div>
          </motion.div>
        </div>
      </header>

      <section className={styles.categories}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Shop by Category</h2>
          <div className={styles.categoryGrid}>
            {['Nesting', 'Kiondo', 'Wall Decor'].map((cat, idx) => (
              <motion.div
                key={cat}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <Link to={`/shop?category=${cat}`} className={styles.categoryCard}>
                  <h3>{cat}</h3>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.featured}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Featured Designs</h2>
          <div className={styles.productGrid}>
            {featured.map((basket) => (
              <BasketCard key={basket.id} basket={basket} />
            ))}
          </div>
          <div className={styles.center}>
            <Link to="/shop" className={styles.viewAll}>View All Baskets &rarr;</Link>
          </div>
        </div>
      </section>

      <section className={styles.gamification}>
        <div className="container">
          <motion.div 
            className={styles.questCard}
            whileHover={{ rotate: [0, -1, 1, -1, 0] }}
          >
            <h3>Daily Quest: Basket Explorer</h3>
            <p>View 3 different baskets to earn a "Sisal Enthusiast" badge!</p>
            <div className={styles.progressBar}>
              <div className={styles.progress} style={{ width: '33%' }}></div>
            </div>
            <span>1/3 Baskets viewed</span>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
