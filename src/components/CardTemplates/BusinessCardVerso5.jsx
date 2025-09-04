import React from 'react';

const BusinessCardVerso5 = ({ data = {} }) => {
  const {
    companyName = "BRAND NAME",
    tagline = "TAGLINE SPACE",
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
        background: '#1a1a1a',
        position: 'relative',
        overflow: 'hidden',
      
      }}>
        
        {/* Main content area */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          paddingTop: '20px'
        }}>
          
          {/* Logo */}
          {logo ? (
            <img src={logo} alt="Company Logo" style={{
              width: '50px',
              height: '50px',
              borderRadius: '8px',
              marginBottom: '20px'
            }} />
          ) : (
            <div style={{
              width: '50px',
              height: '50px',
              border: '3px solid #ff0000',
              borderRadius: '8px',
              position: 'relative',
              marginBottom: '20px',
              background: 'transparent'
            }}>
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%) rotate(45deg)',
                width: '20px',
                height: '20px',
                border: '2px solid #ff0000',
                borderRadius: '2px'
              }}></div>
            </div>
          )}
          
          {/* Company name */}
          <div style={{
            fontSize: '24px',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '8px',
            letterSpacing: '2px'
          }}>{companyName}</div>
          
          {/* Tagline */}
          <div style={{
            fontSize: '10px',
            color: '#888',
            textAlign: 'center',
            letterSpacing: '1px'
          }}>{tagline}</div>
        </div>
        
        {/* Top tab */}
        <div style={{
          position: 'absolute',
          top: '10px',
          right: '20px',
          width: '30px',
          height: '40px',
          background: '#666',
          borderRadius: '0 0 15px 15px',
          zIndex: 3
        }}></div>
        
        {/* Left red accent */}
        <div style={{
          position: 'absolute',
          left: '20px',
          top: '30px',
          width: '4px',
          height: '160px',
          background: '#ff0000',
          borderRadius: '2px',
          zIndex: 3
        }}></div>
        
        {/* Bottom red accent */}
        <div style={{
          position: 'absolute',
          bottom: '20px',
          left: '20px',
          width: '60px',
          height: '4px',
          background: '#ff0000',
          borderRadius: '2px',
          zIndex: 3
        }}></div>
      </div>
    </div>
  );
};

export default BusinessCardVerso5;