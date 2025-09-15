import React from 'react';

const BusinessCardVerso4 = ({ data = {} }) => {
  const {
    companyName = "LOREM IPSUM",
    tagline = "YOUR TAG HERE!",
    phone = "+123-456-7890",
    email = "your@email.com",
    logo
  } = data;

  return (
    <div style={{
      width: '340px',
      height: '216px',
      background: 'linear-gradient(135deg, #3498db 0%, #2c3e50 100%)',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'sans-serif',
      overflow: 'hidden',
      color: 'white',
      position: 'relative'
    }}>
      {/* Logo au centre */}
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
      }}>
        {logo ? (
          <img src={logo} alt="Company Logo" style={{
            width: '70px',
            height: '70px',
            marginBottom: '15px',
            objectFit: 'contain'
          }} />
        ) : (
          <div style={{
            width: '70px',
            height: '70px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '15px',
            fontSize: '12px',
            fontWeight: 'bold'
          }}>LOGO</div>
        )}
        
        <h2 style={{
          margin: '0 0 5px',
          fontSize: '18px',
          fontWeight: 'bold',
          textAlign: 'center'
        }}>{companyName}</h2>
        
        <p style={{
          margin: 0,
          fontSize: '12px',
          textAlign: 'center',
          opacity: 0.9
        }}>{tagline}</p>
      </div>

      {/* Informations de contact en bas */}
      <div style={{
        background: 'rgba(0, 0, 0, 0.2)',
        padding: '12px 20px',
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: '10px'
      }}>
        <div>
          <div style={{ marginBottom: '5px' }}>{phone}</div>
       
        </div>
        <div style={{ textAlign: 'right' }}>
        
          <div></div>
        </div>
      </div>

      {/* Élément décoratif */}
      <div style={{
        position: 'absolute',
        top: '15px',
        right: '15px',
        width: '30px',
        height: '30px',
        borderRadius: '50%',
        background: 'rgba(255, 255, 255, 0.1)'
      }}></div>
    </div>
  );
};

export default BusinessCardVerso4;