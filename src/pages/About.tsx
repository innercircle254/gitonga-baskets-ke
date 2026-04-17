import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <div className="container" style={{ paddingBottom: '6rem' }}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ padding: '4rem 0', maxWidth: '800px', margin: '0 auto' }}
      >
        <h1 style={{ fontSize: '3.5rem', marginBottom: '2rem', textAlign: 'center' }}>Our Story</h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '1.5rem', lineHeight: '1.8' }}>
          Gitonga Baskets KE is deeply rooted in the lush hills of **Kericho, Kenya**. We are dedicated to preserving the traditional Kipsigis weaving techniques while bringing them into modern homes worldwide.
        </p>
        <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', lineHeight: '1.8' }}>
          Our artisans use sustainable materials like sisal and banana fiber harvested directly from the Kericho region. Every basket tells a story of heritage, skill, and the resilient spirit of our local community.
        </p>
        
        <div style={{ marginTop: '4rem', padding: '3rem', background: '#F5DEB3', borderRadius: '20px' }}>
          <h3 style={{ marginBottom: '1rem', fontSize: '1.8rem' }}>Our Commitment</h3>
          <p style={{ fontSize: '1.1rem' }}>We ensure fair wages for our weavers and prioritize eco-friendly production methods in everything we do. By choosing Gitonga, you're supporting rural Kenyan communities.</p>
        </div>
      </motion.div>

      <section style={{ marginTop: '4rem' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '3rem' }}>Meet the Artisans</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          <div style={{ background: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
            <h3 style={{ marginBottom: '0.5rem' }}>Mama Jane</h3>
            <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '1rem' }}>Master Weaver, Kericho</p>
            <p>Jane has been weaving kiondos for over 30 years. She specializes in the intricate Sunburst patterns.</p>
          </div>
          <div style={{ background: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
            <h3 style={{ marginBottom: '0.5rem' }}>The Kericho Collective</h3>
            <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '1rem' }}>Artisan Group</p>
            <p>A group of 15 women who collaborate on large nesting sets, sharing techniques and supporting each other.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
