import React from 'react';

const BusinessCardRecto5 = ({ data = {} }) => {
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
        top: 0,
        left: 0,
        width: '100%',
        height: '45%',
        backgroundColor: '#e74c3c',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
      }}>
        {logo ? (
          <img src={logo} alt="Company Logo" style={{
            position: 'absolute',
            top: '20px',
            left: '20px',
            width: '50px',
            height: '50px',
            border: '2px solid white',
            borderRadius: '8px',
            objectFit: 'cover'
          }} />
        ) : (
          <div style={{
            position: 'absolute',
            top: '20px',
            left: '20px',
            width: '50px',
            height: '50px',
            border: '2px solid white',
            borderRadius: '8px',
            transform: 'rotate(90deg)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <div style={{
              width: '25px',
              height: '25px',
              border: '2px solid white',
              borderRadius: '5px',
              transform: 'rotate(45deg)',
            }}></div>
          </div>
        )}
      </div>
      <div style={{
        position: 'relative',
        top: '20px',
        textAlign: 'center',
        zIndex: 1,
      }}>
        <h1 style={{
          color: 'white',
          fontSize: '24px',
          fontWeight: 'bold',
          margin: 0,
        }}>
          {companyName}
        </h1>
        <p style={{
          color: 'white',
          fontSize: '10px',
          letterSpacing: '2px',
          margin: '5px 0 0',
        }}>
          {tagline}
        </p>
      </div>
    </div>
  );
};

export default BusinessCardRecto5;