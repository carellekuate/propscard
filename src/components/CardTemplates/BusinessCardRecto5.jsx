import React from 'react';

const BusinessCardRecto5 = ({ data = {} }) => {
  const {
    name = "YOUR NAME",
    jobTitle = "Graphic Designer",
    phone = "+00 1234 5XXX 9012",
    email = "your email space",
    website = "website address here",
    address = "123 Dummy, Lorem Ipsum",
    companyName = "BRAND NAME",
    tagline = "TAGLINE SPACE",
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
        background: '#1a1a1a',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
      }}>
        
        {/* Left section with contact info */}
        <div style={{
          width: '60%',
          padding: '20px',
          background: '#1a1a1a',
          zIndex: 2,
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}>
          <div style={{
            fontSize: '20px',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '5px'
          }}>{name}</div>
          
          <div style={{
            fontSize: '12px',
            color: '#888',
            marginBottom: '25px'
          }}>{jobTitle}</div>
          
          <ul style={{
            listStyle: 'none',
            padding: 0,
            margin: 0
          }}>
            <li style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '10px',
              fontSize: '10px',
              color: 'white'
            }}>
              <div style={{
                width: '4px',
                height: '16px',
                marginRight: '12px',
                background: '#ff0000',
                borderRadius: '2px'
              }}></div>
              <span>{address}</span>
            </li>
            
            <li style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '10px',
              fontSize: '10px',
              color: 'white'
            }}>
              <div style={{
                width: '4px',
                height: '16px',
                marginRight: '12px',
                background: '#ff0000',
                borderRadius: '2px'
              }}></div>
              <span>{phone}</span>
            </li>
            
            <li style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '10px',
              fontSize: '10px',
              color: 'white'
            }}>
              <div style={{
                width: '4px',
                height: '16px',
                marginRight: '12px',
                background: '#ff0000',
                borderRadius: '2px'
              }}></div>
              <span>{email}</span>
            </li>
            
            <li style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '10px',
              fontSize: '10px',
              color: 'white'
            }}>
              <div style={{
                width: '4px',
                height: '16px',
                marginRight: '12px',
                background: '#ff0000',
                borderRadius: '2px'
              }}></div>
              <span>{website}</span>
            </li>
          </ul>
        </div>
        
        {/* Right section with QR code */}
        <div style={{
          width: '40%',
          background: '#1a1a1a',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column'
        }}>
          {/* QR Code */}
          <div style={{
            width: '60px',
            height: '60px',
            background: 'white',
            marginBottom: '20px',
            borderRadius: '4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '8px',
            fontWeight: 'bold'
          }}>
            <div style={{
              width: '50px',
              height: '50px',
              background: `url("data:image/svg+xml,${encodeURIComponent(`
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                  <rect x="2" y="2" width="6" height="6" fill="black"/>
                  <rect x="10" y="2" width="2" height="2" fill="black"/>
                  <rect x="14" y="2" width="2" height="2" fill="black"/>
                  <rect x="18" y="2" width="2" height="2" fill="black"/>
                  <rect x="22" y="2" width="2" height="2" fill="black"/>
                  <rect x="26" y="2" width="2" height="2" fill="black"/>
                  <rect x="30" y="2" width="2" height="2" fill="black"/>
                  <rect x="34" y="2" width="2" height="2" fill="black"/>
                  <rect x="38" y="2" width="2" height="2" fill="black"/>
                  <rect x="42" y="2" width="6" height="6" fill="black"/>
                  <rect x="2" y="10" width="2" height="2" fill="black"/>
                  <rect x="6" y="10" width="2" height="2" fill="black"/>
                  <rect x="10" y="10" width="2" height="2" fill="black"/>
                  <rect x="14" y="10" width="6" height="6" fill="black"/>
                  <rect x="22" y="10" width="2" height="2" fill="black"/>
                  <rect x="26" y="10" width="2" height="2" fill="black"/>
                  <rect x="30" y="10" width="6" height="6" fill="black"/>
                  <rect x="38" y="10" width="2" height="2" fill="black"/>
                  <rect x="42" y="10" width="2" height="2" fill="black"/>
                  <rect x="46" y="10" width="2" height="2" fill="black"/>
                  <rect x="2" y="42" width="6" height="6" fill="black"/>
                  <rect x="10" y="42" width="2" height="2" fill="black"/>
                  <rect x="42" y="42" width="6" height="6" fill="black"/>
                </svg>
              `)}") no-repeat center`,
              backgroundSize: 'contain'
            }}></div>
          </div>
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
        
        {/* Red accent line */}
        <div style={{
          position: 'absolute',
          left: '20px',
          bottom: '20px',
          width: '4px',
          height: '80px',
          background: '#ff0000',
          borderRadius: '2px',
          zIndex: 3
        }}></div>
      </div>
    </div>
  );
};

export default BusinessCardRecto5;