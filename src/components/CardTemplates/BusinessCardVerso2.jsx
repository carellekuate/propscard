import React from 'react';

const BusinessCardVerso2 = ({ data = {} }) => {
  const {
    companyName = "YOUR LOGO",
    companyDetails = "YOUR COMPANY NAME\nTEL | CITY",
    tagline = "Professional Excellence",
    logo
  } = data;

  return (
    <div style={{
  width: '100%',
  margin: 0,
  padding: 0,
  display: 'flex',
  flexDirection: 'column',
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  overflow: 'hidden'
}}>
      <div style={{
        width: '350px',
        height: '200px',
        background: 'linear-gradient(135deg, #2c2c2c 0%, #1a1a1a 100%)',
        borderRadius: '8px',
        boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        padding: '30px',
        boxSizing: 'border-box'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '100%',
          height: '120px',
          background: 'linear-gradient(225deg, #d4af37 0%, #ffd700 30%, #b8860b 70%, #8b7355 100%)',
          clipPath: 'ellipse(80% 100% at 80% 0%)',
          opacity: 0.9
        }}></div>

        <div style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '100%',
          height: '100px',
          background: 'linear-gradient(225deg, rgba(212, 175, 55, 0.3) 0%, rgba(255, 215, 0, 0.2) 50%, transparent 100%)',
          clipPath: 'ellipse(70% 100% at 70% 0%)'
        }}></div>

        <div style={{
          flex: 1,
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start'
        }}>
          <div style={{
            width: '60px',
            height: '60px',
            background: 'white',
            borderRadius: '4px',
            marginBottom: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '8px',
            color: '#333',
            textAlign: 'center',
            position: 'relative'
          }}>
            {logo ? (
              <img src={logo} alt="Company Logo" style={{
                width: '50px',
                height: '50px',
                objectFit: 'contain'
              }} />
            ) : (
              <div style={{
                width: '50px',
                height: '50px',
                background: `
                  linear-gradient(90deg, #000 2px, transparent 2px),
                  linear-gradient(#000 2px, transparent 2px)
                `,
                backgroundSize: '4px 4px',
                opacity: 0.8
              }}></div>
            )}
          </div>
          
          <div style={{ color: 'white' }}>
            <div style={{
              fontSize: '20px',
              fontWeight: 'bold',
              marginBottom: '5px',
              letterSpacing: '1px'
            }}>{companyName}</div>
            
            <div style={{
              fontSize: '10px',
              color: '#d4af37',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              lineHeight: '14px',
              whiteSpace: 'pre-line'
            }}>{companyDetails}</div>
            
            <div style={{
              fontSize: '12px',
              color: '#ccc',
              marginTop: '10px',
              fontStyle: 'italic'
            }}>{tagline}</div>
          </div>
        </div>

        <div style={{
          position: 'absolute',
          right: '30px',
          top: '30px',
          zIndex: 10
        }}>
          <div style={{
            width: '40px',
            height: '40px',
            border: '2px solid #d4af37',
            borderRadius: '50%',
            background: 'rgba(212, 175, 55, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <div style={{
              width: '20px',
              height: '20px',
              background: '#d4af37',
              borderRadius: '50%',
              opacity: 0.8
            }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessCardVerso2;