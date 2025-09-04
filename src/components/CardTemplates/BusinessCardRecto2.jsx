import React from 'react';

const BusinessCardRecto2 = ({ data = {} }) => {
  const {
    name = "YOURNAME",
    jobTitle = "JOB TITLE",
    addressLine1 = "8888 First Street San Jose, CA 95000",
    email = "YourEmail@domain.com",
    phone = "+000 000 000000",
    companyName = "YOUR LOGO",
    companyDetails = "YOUR COMPANY NAME\nTEL | CITY",
    tagline = "Professional Excellence",
    logo
  } = data;

  return (
    <div style={{
      margin: "0",
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
      overflow: 'hidden',
    }}>
      <div style={{
          width: '340px',
      height: '216px',
        background: 'linear-gradient(135deg, #2c2c2c 0%, #1a1a1a 100%)',
        boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '120px',
          background: 'linear-gradient(135deg, #d4af37 0%, #ffd700 30%, #b8860b 70%, #8b7355 100%)',
          clipPath: 'ellipse(80% 100% at 20% 100%)',
          opacity: 0.9
        }}></div>

        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '100px',
          background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.3) 0%, rgba(255, 215, 0, 0.2) 50%, transparent 100%)',
          clipPath: 'ellipse(70% 100% at 30% 100%)'
        }}></div>

        {logo ? (
          <img src={logo} alt="Company Logo" style={{
            position: 'absolute',
            top: '20px',
            right: '260px',
            width: '40px',
            height: '40px',
            borderRadius: '4px',
            objectFit: 'cover'
          }} />
        ) : (
          <div style={{
            position: 'absolute',
            top: '20px',
            right: '260px',
            width: '40px',
            height: '40px',
            background: 'white',
            borderRadius: '4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '12px',
            color: '#666',
            fontWeight: 'bold'
          }}>
            LOGO
          </div>
        )}

        <div style={{
          position: 'absolute',
          right: '30px',
          bottom: '70px',
          textAlign: 'right',
          zIndex: 10
        }}>
          <div style={{
            color: 'white',
            fontSize: '18px',
            fontWeight: 'bold',
            marginBottom: '5px',
            letterSpacing: '1px'
          }}>{name}</div>

          <div style={{
            color: '#d4af37',
            fontSize: '11px',
            fontWeight: 'normal',
            marginBottom: '15px',
            textTransform: 'uppercase',
            letterSpacing: '2px'
          }}>{jobTitle}</div>

          <div style={{
            width: '80px',
            height: '1px',
            background: 'white',
            marginLeft: 'auto',
            marginBottom: '12px'
          }}></div>

          <div style={{
            color: 'white',
            fontSize: '9px',
            lineHeight: '14px'
          }}>
            <div style={{
              marginBottom: '3px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end'
            }}>
              {addressLine1}
              <div style={{
                width: '12px',
                height: '12px',
                background: '#d4af37',
                borderRadius: '2px',
                marginLeft: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '8px',
                color: 'white'
              }}>📍</div>
            </div>

            <div style={{
              marginBottom: '3px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end'
            }}>
              {email}
              <div style={{
                width: '12px',
                height: '12px',
                background: '#d4af37',
                borderRadius: '2px',
                marginLeft: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '8px',
                color: 'white'
              }}>✉</div>
            </div>

            <div style={{
              marginBottom: '3px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end'
            }}>
             {phone}
              <div style={{
                width: '12px',
                height: '12px',
                background: '#d4af37',
                borderRadius: '2px',
                marginLeft: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '8px',
                color: 'white'
              }}>📞</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessCardRecto2;