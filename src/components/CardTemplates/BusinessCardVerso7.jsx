import React from 'react';

const BusinessCardVerso7 = ({ data = {} }) => {
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
        width: '340px',
        height: '216px',
        background: 'white',
        position: 'relative',
        overflow: 'hidden',
      }}>
        
        {/* Main content area */}
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
              width: '75px',
              height: '75px',
              borderRadius: '8px',
              marginBottom: '15px'
            }} />
          ) : (
            <div style={{
              width: '60px',
              height: '60px',
              position: 'relative',
              marginBottom: '15px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <div style={{
                width: '50px',
                height: '50px',
                border: '3px solid #e53e3e',
                borderRadius: '50%',
                position: 'relative'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '20px',
                  height: '20px',
                  background: '#e53e3e',
                  borderRadius: '50%'
                }}></div>
              </div>
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
        
        {/* Bottom section with red bars */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '60px',
          background: 'white',
          overflow: 'hidden'
        }}>
          
          {/* Left curved section */}
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '40%',
            height: '60px',
            background: '#2c2c2c',
            clipPath: 'polygon(0 0, 70% 0, 40% 100%, 0 100%)'
          }}></div>
          
          {/* Right curved section */}
          <div style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            width: '40%',
            height: '60px',
            background: '#2c2c2c',
            clipPath: 'polygon(30% 0, 100% 0, 100% 100%, 60% 100%)'
          }}></div>
        </div>
      </div>
    </div>
  );
};

export default BusinessCardVerso7;