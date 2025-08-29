import React from 'react';

const BusinessCardRecto1 = ({ data = {} }) => {
  const {
    name = "Baaz Smith",
    jobTitle = "Graphic Designer",
    phone = "+000 123 456 7890",
    email = "yourmail@name.com",
    website = "www.websitename.com",
    addressLine1 = "your street here",
    addressLine2 = "New York",
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
        width: '350px',
        height: '200px',
        background: 'white',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
      }}>

        
        <div style={{
          width: '60%',
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
                background: 'linear-gradient(135deg, #d4af37, #b8860b)'
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
                fontSize: '8px',
                color: 'white',
                fontWeight: 'bold',
                background: 'linear-gradient(135deg, #d4af37, #b8860b)'
              }}>✉</div>
              <div>
                <div>{email}</div>
                <div>{website}</div>
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
                fontSize: '8px',
                color: 'white',
                fontWeight: 'bold',
                background: 'linear-gradient(135deg, #d4af37, #b8860b)'
              }}>📍</div>
              <div>
                <div>{addressLine1}</div>
                <div>{addressLine2}</div>
              </div>
            </li>
          </ul>
        </div>
        
        <div style={{
          width: '70%',
          background: '#2c2c2c',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column'
        }}>
          <div style={{
            position: 'absolute',
            left: '-25px',
            top: 0,
            bottom: 0,
            width: '65px',
            background: 'linear-gradient(135deg, #d4af37 0%, #ffd700 50%, #b8860b 100%)',
            clipPath: 'ellipse(70% 100% at 0% 50%)'
          }}></div>
          
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

export default BusinessCardRecto1;