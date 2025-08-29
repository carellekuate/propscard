import React from 'react';

const BusinessCardVerso1 = ({ data = {} }) => {
  const {
    companyName = "Company",
    tagline = "Your Tagline Here",
    website = "www.websitename.com",
    logo
  } = data;

  return (
    <div style={{
      margin: "0",
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden', 
      
    }}>
      <div style={{
        width: '350px',
        height: '200px',
        background: 'white',
        position: 'relative',
        overflow: 'hidden',

      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '140px',
          paddingTop: '20px'
        }}>
          {logo ? (
            <img src={logo} alt="Company Logo" style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              marginBottom: '15px'
            }} />
          ) : (
            <div style={{
              width: '60px',
              height: '60px',
              border: '4px solid #000',
              borderRadius: '50%',
              position: 'relative',
              marginBottom: '15px'
            }}>
              <div style={{
                content: '""',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '20px',
                height: '20px',
                background: '#000',
                borderRadius: '50%'
              }}></div>
            </div>
          )}
          
          <div style={{
            fontSize: '18px',
            fontWeight: 'bold',
            color: '#000',
            bottom: '15px',
            position: 'relative'
          }}>{companyName}</div>
          
          <div style={{
            fontSize: '12px',
            color: '#666',
            textAlign: 'center',
            position: 'relative',
            top: '-12px'
          }}>{tagline}</div>
        </div>
        
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '60px',
          background: '#2c2c2c',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            top: '-20px',
            left: 0,
            right: 0,
            height: '40px',
            background: 'linear-gradient(135deg, #d4af37 0%, #ffd700 50%, #b8860b 100%)',
            clipPath: 'ellipse(100% 100% at 50% 0%)'
          }}></div>
          
          <div style={{
            position: 'absolute',
            bottom: '15px',
            left: '50%',
            transform: 'translateX(-50%)',
            color: '#f4f1f1',
            fontSize: '11px'
          }}>{website}</div>
        </div>
      </div>
    </div>
  );
};

export default BusinessCardVerso1;