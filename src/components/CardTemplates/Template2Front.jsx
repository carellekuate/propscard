import React from 'react';

const BusinessCard = () => {
  // Styles définis comme objets JavaScript
  const styles = {
    container: {
      margin: 0,
      padding: '20px',
      backgroundColor: '#f0f0f0',
      fontFamily: 'Arial, sans-serif',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh'
    },
    businessCard: {
      width: '340px',
      height: '216px',
      background: 'white',
      borderRadius: '8px',
      boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
      position: 'relative',
      overflow: 'hidden'
    },
    logoSection: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '140px',
      paddingTop: '20px'
    },
    logo: {
      width: '60px',
      height: '60px',
      border: '4px solid #000',
      borderRadius: '50%',
      position: 'relative',
      marginBottom: '15px'
    },
    logoInner: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '20px',
      height: '20px',
      background: '#000',
      borderRadius: '50%'
    },
    companyName: {
      fontSize: '18px',
      fontWeight: 'bold',
      color: '#000',
      bottom: '15px',
      position: 'relative'
    },
    tagline: {
      fontSize: '12px',
      color: '#666',
      textAlign: 'center',
      position: 'relative',
      top: '-12px'
    },
    bottomSection: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: '60px',
      background: '#2c2c2c',
      overflow: 'hidden'
    },
    goldenWave: {
      position: 'absolute',
      top: '-20px',
      left: 0,
      right: 0,
      height: '40px',
      background: 'linear-gradient(135deg, #d4af37 0%, #ffd700 50%, #b8860b 100%)',
      clipPath: 'ellipse(100% 100% at 50% 0%)'
    },
    website: {
      position: 'absolute',
      bottom: '15px',
      left: '50%',
      transform: 'translateX(-50%)',
      color: '#f4f1f1',
      fontSize: '11px'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.businessCard}>
        <div style={styles.logoSection}>
          <div style={styles.logo}>
            <div style={styles.logoInner}></div>
          </div>
          <div style={styles.companyName}>Company</div>
          <div style={styles.tagline}>Your Tagline Here</div>
        </div>
        
        <div style={styles.bottomSection}>
          <div style={styles.goldenWave}></div>
          <div style={styles.website}>www.websitename.com</div>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;