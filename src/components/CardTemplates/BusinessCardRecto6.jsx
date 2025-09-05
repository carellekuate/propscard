import React from 'react';

const BusinessCardRecto6 = ({ data = {} }) => {
  const {
    name = "Baaz Smith",
    jobTitle = "Graphic Designer",
    phone = "+123-456-7890",
    email = "your@email.com",
    website = "www.sample.com",
    addressLine1 = "your street here",
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

        {/* Left section - Red background with logo */}
        <div style={{
          width: '40%',
          padding: '20px',
          background: '#e74c3c',
          zIndex: 2,
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          {logo ? (
            <img src={logo} alt="Company Logo" style={{
              width: '75px',
              height: '75px',
              borderRadius: '8px',
              marginBottom: '12px'
            }} />
          ) : (
            <div style={{
              width: '50px',
              height: '50px',
              border: '3px solid white',
              position: 'relative',
              marginBottom: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
            }}>
              <div style={{
                width: '30px',
                height: '30px',
                border: '2px solid white',
                clipPath: 'polygon(50% 20%, 0% 80%, 100% 80%)'
              }}></div>
            </div>
          )}
          
          <div style={{
            textAlign: 'center'
          }}>
            <div style={{
              color: 'white',
              fontSize: '14px',
              fontWeight: 'bold',
              marginBottom: '3px'
            }}>{companyName}</div>
            
            <div style={{
              color: 'white',
              fontSize: '8px',
              letterSpacing: '1px'
            }}>{tagline}</div>
          </div>
        </div>
        
        {/* Right section - White background with contact info */}
        <div style={{
          width: '60%',
          background: '#f8f9fa',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '20px'
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
            margin: 0,
            width: '100%'
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
                background: '#e74c3c'
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
                background: '#e74c3c'
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
                background: '#e74c3c'
              }}>📍</div>
              <div>
                <div>{addressLine1}</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BusinessCardRecto6;