import React from 'react';

const BusinessCardRecto4 = ({ data = {} }) => {
  const {
    companyName = "LOREM IPSUM",
    tagline = "YOUR TAG HERE!",
    logo
  } = data;

  return (
    <div style={{
      width: '350px',
      height: '200px',
      backgroundColor: 'white',
      borderRadius: '15px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'sans-serif',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '40%',
        backgroundColor: '#e74c3c',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingBottom: '20px',
      }}>
        {logo ? (
          <img src={logo} alt="Company Logo" style={{
            position: 'absolute',
            top: '20px',
            left: '20px',
            width: '40px',
            height: '40px',
            border: '2px solid white',
            borderRadius: '5px',
            objectFit: 'cover'
          }} />
        ) : (
          <div style={{
            position: 'absolute',
            top: '20px',
            left: '20px',
            width: '40px',
            height: '40px',
            border: '2px solid white',
            borderRadius: '5px',
            transform: 'rotate(90deg)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <div style={{
              width: '20px',
              height: '20px',
              border: '2px solid white',
              borderRadius: '5px',
              transform: 'rotate(45deg)',
            }}></div>
          </div>
        )}
      </div>
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        color: '#e74c3c',
        fontWeight: 'bold',
        fontSize: '24px',
      }}>
        {companyName}
      </div>
      <div style={{
        position: 'absolute',
        top: '65%',
        left: '50%',
        transform: 'translateX(-50%)',
        color: 'gray',
        fontSize: '12px',
        letterSpacing: '2px',
      }}>
        {tagline}
      </div>
    </div>
  );
};

export default BusinessCardRecto4;