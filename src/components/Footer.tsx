import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div>
            <h3>Gitonga Baskets KE</h3>
            <p>Bringing the authentic beauty of Kenyan craftsmanship to your modern home.</p>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/shop">Shop All</a></li>
              <li><a href="/about">Our Story</a></li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <p>Kericho, Kenya</p>
            <p>Email: omixsystems@gmail.com</p>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} Gitonga Baskets KE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
