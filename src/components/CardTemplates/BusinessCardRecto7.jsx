import React from 'react';

const BusinessCardRecto7= ({ data = {} }) => {
  const {
    name = "Baaz Smith",
    jobTitle = "Graphic Designer",
    phone = "+000 123 456 7890",
    email = "yourmail@name.com",
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

        {/* Left section - White background with contact info */}
        <div style={{
          width: '65%',
          padding: '20px',
          background: 'white',
          zIndex: 2,
          position: 'relative'
        }}>
          <div style={{
            fontSize: '20px',
            fontWeight: 'bold',
            color: '#000',
            marginBottom: '5px'
          }}>{name}</div>
          
          <div style={{
            fontSize: '12px',
            color: '#666',
            marginBottom: '20px'
          }}>{jobTitle}</div>
          
          <ul style={{
            listStyle: 'none',
            padding: 0,
            margin: 0
          }}>
            <li style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '12px',
              fontSize: '11px',
              color: '#333'
            }}>
              <div style={{
                width: '16px',
                height: '16px',
                marginRight: '12px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '8px',
                color: 'white',
                fontWeight: 'bold',
                background: '#e53e3e'
              }}>📞</div>
              <span>{phone}</span>
            </li>
            
            <li style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '12px',
              fontSize: '11px',
              color: '#333'
            }}>
              <div style={{
                width: '16px',
                height: '16px',
                marginRight: '12px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '5px',
                color: 'white',
                fontWeight: 'bold',
                background: '#e53e3e'
              }}>✉</div>
              <div>
                <div>{email}</div>
              </div>
            </li>
            
            <li style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '12px',
              fontSize: '11px',
              color: '#333'
            }}>
              <div style={{
                width: '16px',
                height: '16px',
                marginRight: '12px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '5px',
                color: 'white',
                fontWeight: 'bold',
                background: '#e53e3e'
              }}>📍</div>
              <div>
                <div>{addressLine1}</div>
              </div>
            </li>
          </ul>
        </div>
        
        {/* Right section - Logo area */}
        <div style={{
          width: '35%',
          background: 'white',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column'
        }}>
          
          {logo ? (
            <img src={logo} alt="Company Logo" style={{
              width: '50px',
              height: '50px',
              borderRadius: '8px',
              marginBottom: '12px',
              zIndex: 2
            }} />
          ) : (
            <div style={{
              width: '60px',
              height: '60px',
              position: 'relative',
              marginBottom: '12px',
              zIndex: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <div style={{
                width: '40px',
                height: '40px',
                border: '3px solid #e53e3e',
                borderRadius: '50%',
                position: 'relative'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '15px',
                  height: '15px',
                  background: '#e53e3e',
                  borderRadius: '50%'
                }}></div>
              </div>
            </div>
          )}
          
          <div style={{
            textAlign: 'center',
            zIndex: 2
          }}>
            <div style={{
              color: '#333',
              fontSize: '12px',
              fontWeight: 'bold',
              marginBottom: '3px'
            }}>{companyName}</div>
            
            <div style={{
              color: '#666',
              fontSize: '9px'
            }}>{tagline}</div>
          </div>
        </div>
        {/* Top right dark section */}
        <div style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '120px',
          height: '40px',
          background: '#2c2c2c',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: '10px',
          fontWeight: 'bold',
          letterSpacing: '1px'
        }}>
        </div>
      </div>
    </div>
  );
};

export default BusinessCardRecto7;