import React from 'react';

const BusinessCardRecto8 = ({ data = {} }) => {
  const {
    name = "Baaz Smith",
    jobTitle = "Graphic Designer",
    phone = "+000 123 456 7890",
    email = "yourmail@name.com",
    website = "www.websitename.com",
    addressLine1 = "your street here",
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
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
      overflow: 'hidden',
    }}>
      <div style={{
        width: '340px',
        height: '216px',
        background: 'white',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
      }}>

        {/* Left side content - info */}
        <div style={{
          width: '60%',
          padding: '20px',
          background: 'white',
          zIndex: 2,
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}>
          <div style={{
            fontSize: '24px',
            fontWeight: 'bold',
            color: '#2c2c2c',
            marginBottom: '5px'
          }}>{name}</div>
          <div style={{
            fontSize: '14px',
            color: '#777',
            marginBottom: '15px'
          }}>{jobTitle}</div>
          <div style={{
            fontSize: '12px',
            color: '#444',
            lineHeight: '1.6',
          }}>
            <p style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ marginRight: '8px' }}>&#9742;</span>
              {phone}
            </p>
            <p style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ marginRight: '8px' }}>✉</span>
              {email}
            </p>
            <p style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ marginRight: '8px' }}>📍</span>
              { addressLine1}
            </p>

          </div>
        </div>

        {/* Right side content - company info */}
        <div style={{
          width: '40%',
          background: 'linear-gradient(to bottom, #2c2c2c, #444)',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '-5px 0 15px rgba(0, 0, 0, 0.2)',
          zIndex: 1,
        }}>
          {logo ? (
            <img src={logo} alt="Company Logo" style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              marginBottom: '12px',
              zIndex: 2
            }} />
          ) : (
            <div style={{
              width: '50px',
              height: '50px',
              border: '3px solid #d4af37',
              borderRadius: '50%',
              position: 'relative',
              marginBottom: '12px',
              zIndex: 2
            }}>
              <div style={{
                content: '""',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '20px',
                height: '20px',
                background: '#d4af37',
                borderRadius: '50%'
              }}></div>
            </div>
          )}
          
          <div style={{
            textAlign: 'center',
            zIndex: 2
          }}>
            <div style={{
              color: 'white',
              fontSize: '16px',
              fontWeight: 'bold',
              marginBottom: '3px'
            }}>{companyName}</div>
            
            <div style={{
              color: '#d4af37',
              fontSize: '10px'
            }}>{tagline}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessCardRecto8;