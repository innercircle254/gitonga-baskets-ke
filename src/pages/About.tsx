import React from 'react';
import styles from './ProductDetail.module.css';

const About: React.FC = () => {
  return (
    <div className="container">
      <div style={{ padding: '4rem 0', maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Our Story</h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '1.5rem' }}>
          Gitonga Baskets KE was born from a passion for preserving traditional Kenyan weaving techniques while bringing them into modern homes.
        </p>
        <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
          Our artisans in Kericho and beyond use sustainable materials like sisal and banana fiber to create functional pieces of art. Every basket tells a story of heritage, skill, and empowerment.
        </p>
        <div style={{ marginTop: '3rem', padding: '2rem', background: '#F5DEB3', borderRadius: '12px' }}>
          <h3 style={{ marginBottom: '1rem' }}>Our Commitment</h3>
          <p>We ensure fair wages for our weavers and prioritize eco-friendly production methods in everything we do.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
