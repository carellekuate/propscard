import React from 'react';

const BusinessCardVerso8 = ({ data = {} }) => {
  const {
    companyName = "Company",
    tagline = "Your Tagline Here",
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
              border: '3px solid #000',
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
                width: '25px',
                height: '25px',
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
      </div>
    </div>
  );
};

export default BusinessCardVerso8;
