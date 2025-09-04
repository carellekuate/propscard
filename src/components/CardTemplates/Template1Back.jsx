import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const BusinessCardBack = ({ data = {} }) => {
  // Valeurs par défaut
  const {
    logo = "default-logo.png",
    slogan = "YOUR SLOGAN HERE!!!",
    email = "company@mail.com"
  } = data;

  return (
    <div style={{
      width: '100%',
      margin: 0,
      padding: 0,
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      overflow: 'hidden'
    }}>
      <img 
        style={{
          position: 'relative',
          height: '140px',
          width: '155px',
          left: '45px',
          bottom: '40px',
          alignItems: 'center',
          textAlign: 'center'
        }} 
        src={logo} 
        alt="logo" 
      />

      <h6 style={{
        position: 'relative',
        fontSize: '10px',
        fontWeight: 'lighter',
        fontFamily: 'Arial, Helvetica, sans-serif',
        fontStyle: 'italic',
        textAlign: 'center',
        bottom: '58px'
      }}>{slogan}</h6>

      <div style={{
        position: 'relative',
        backgroundColor: '#32a5f7',
        width: '24.5mm',
        height: '0.5mm',
        bottom: '20px',
        left: '-41px'
      }}></div>

      <h5 style={{
        position: 'relative',
        fontSize: '15px',
        fontWeight: 'lighter',
        fontFamily: 'Arial, Helvetica, sans-serif',
        fontStyle: 'italic',
        textAlign: 'center',
        bottom: '34px'
      }}>
        <FontAwesomeIcon icon={faEnvelope} /> {email}
      </h5>

      <div style={{
        position: 'relative',
        backgroundColor: '#32a5f7',
        width: '24mm',
        height: '0.5mm',
        bottom: '44px',
        left: '194px'
      }}></div>
    </div>
  );
};

export default BusinessCardBack;
