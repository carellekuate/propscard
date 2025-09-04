import React from 'react';

const BusinessCard = () => {
  // Styles définis comme objets JavaScript
  const styles = {
    body: {
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
      overflow: 'hidden',
      display: 'flex'
    },
    leftSection: {
      width: '60%',
      padding: '20px',
      background: 'white',
      zIndex: 2,
      position: 'relative'
    },
    name: {
      fontSize: '20px',
      fontWeight: 'bold',
      color: '#000',
      marginBottom: '5px'
    },
    position: {
      fontSize: '12px',
      color: '#666',
      marginBottom: '20px'
    },
    contactInfo: {
      listStyle: 'none',
      padding: 0,
      margin: 0
    },
    contactItem: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '12px',
      fontSize: '11px',
      color: '#333'
    },
    contactIcon: {
      width: '16px',
      height: '16px',
      marginRight: '12px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '8px',
      color: 'white',
      fontWeight: 'bold'
    },
    phoneIcon: {
      background: 'linear-gradient(135deg, #d4af37, #b8860b)'
    },
    emailIcon: {
      background: 'linear-gradient(135deg, #d4af37, #b8860b)'
    },
    locationIcon: {
      background: 'linear-gradient(135deg, #d4af37, #b8860b)'
    },
    rightSection: {
      width: '40%',
      background: '#2c2c2c',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column'
    },
    goldenCurve: {
      position: 'absolute',
      left: '-30px',
      top: 0,
      bottom: 0,
      width: '65px',
      background: 'linear-gradient(135deg, #d4af37 0%, #ffd700 50%, #b8860b 100%)',
      clipPath: 'ellipse(70% 100% at 0% 50%)'
    },
    logoWhite: {
      width: '50px',
      height: '50px',
      border: '3px solid #d4af37',
      borderRadius: '50%',
      position: 'relative',
      marginBottom: '12px',
      zIndex: 2
    },
    logoWhiteBefore: {
      content: '""',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '20px',
      height: '20px',
      background: '#d4af37',
      borderRadius: '50%'
    },
    companyInfo: {
      textAlign: 'center',
      zIndex: 2
    },
    companyNameWhite: {
      color: 'white',
      fontSize: '16px',
      fontWeight: 'bold',
      marginBottom: '3px'
    },
    taglineWhite: {
      color: '#d4af37',
      fontSize: '10px'
    }
  };

  return (
    <div style={styles.body}>
      <div style={styles.businessCard}>
        <div style={styles.leftSection}>
          <div style={styles.name}>Baaz Smith</div>
          <div style={styles.position}>Graphic Designer</div>
          
          <ul style={styles.contactInfo}>
            <li style={styles.contactItem}>
              <div style={{...styles.contactIcon, ...styles.phoneIcon}}>📞</div>
              <span>+000 123 456 7890</span>
            </li>
            <li style={styles.contactItem}>
              <div style={{...styles.contactIcon, ...styles.emailIcon}}>✉</div>
              <div>
                <div>yourmail@name.com</div>
                <div>www.websitename.com</div>
              </div>
            </li>
            <li style={styles.contactItem}>
              <div style={{...styles.contactIcon, ...styles.locationIcon}}>📍</div>
              <div>
                <div>your street here,</div>
                <div>New York</div>
              </div>
            </li>
          </ul>
        </div>
        
        <div style={styles.rightSection}>
          <div style={styles.goldenCurve}></div>
          <div style={styles.logoWhite}>
            <div style={styles.logoWhiteBefore}></div>
          </div>
          <div style={styles.companyInfo}>
            <div style={styles.companyNameWhite}>Company</div>
            <div style={styles.taglineWhite}>Your Tagline Here</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;