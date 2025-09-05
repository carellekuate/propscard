import React from 'react';

const BusinessCardVerso6 = ({ data = {} }) => {
  const {
    companyName = "LOREM IPSUM",
    tagline = "YOUR TAG HERE",
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
        background: '#f8f9fa',
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
          
          {/* Logo */}
          {logo ? (
            <img src={logo} alt="Company Logo" style={{
              width: '60px',
              height: '60px',
              borderRadius: '8px',
              marginBottom: '15px'
            }} />
          ) : (
            <div style={{
              width: '60px',
              height: '60px',
              border: '4px solid #e74c3c',
              position: 'relative',
              marginBottom: '15px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
            }}>
              <div style={{
                width: '35px',
                height: '35px',
                border: '3px solid #e74c3c',
                clipPath: 'polygon(50% 20%, 0% 80%, 100% 80%)'
              }}></div>
            </div>
          )}
          
          {/* Company name */}
          <div style={{
            fontSize: '18px',
            fontWeight: 'bold',
            color: '#e74c3c',
            bottom: '15px',
            position: 'relative'
          }}>{companyName}</div>
          
          {/* Tagline */}
          <div style={{
            fontSize: '12px',
            color: '#666',
            textAlign: 'center',
            position: 'relative',
            top: '-12px',
            letterSpacing: '1px'
          }}>{tagline}</div>
        </div>
        
        {/* Bottom red section */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '60px',
          background: '#e74c3c',
          overflow: 'hidden'
        }}>
          {/* Top curved decoration */}
          <div style={{
            position: 'absolute',
            top: '-20px',
            left: 0,
            right: 0,
            height: '40px',
            background: 'linear-gradient(135deg, #c0392b 0%, #e74c3c 50%, #c0392b 100%)',
            clipPath: 'ellipse(100% 100% at 50% 0%)'
          }}></div>
          

        </div>
        
        {/* Horizontal red line accent */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '20%',
          right: '20%',
          height: '3px',
          background: '#e74c3c',
          transform: 'translateY(-50%)'
        }}></div>
      </div>
    </div>
  );
};

export default BusinessCardVerso6;