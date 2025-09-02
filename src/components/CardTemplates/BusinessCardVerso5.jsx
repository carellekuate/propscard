import React from 'react';

const BusinessCardVerso5 = ({ data = {} }) => {
  const {
    name = "YOUR NAME",
    jobTitle = "JOB TITLE",
    phone = "+123-456-7890",
    email = "your@email.com",
    website = "www.sample.com",
    addressLine1 = "Your address",
    companyName = "LOREM IPSUM",
    tagline = "YOUR TAG HERE!",
    logo
  } = data;

  return (
    <div style={{
      width: '350px',
      height: '200px',
      backgroundColor: 'white',
      borderRadius: '15px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      display: 'flex',
      fontFamily: 'sans-serif',
    }}>
      <div style={{
        flex: 1,
        backgroundColor: '#e74c3c',
        borderTopLeftRadius: '15px',
        borderBottomLeftRadius: '15px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        padding: '20px',
      }}>
        {logo ? (
          <img src={logo} alt="Company Logo" style={{
            width: '50px',
            height: '50px',
            border: '2px solid white',
            borderRadius: '8px',
            objectFit: 'cover',
            marginBottom: '15px'
          }} />
        ) : (
          <div style={{
            width: '50px',
            height: '50px',
            border: '2px solid white',
            borderRadius: '8px',
            transform: 'rotate(90deg)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '15px'
          }}>
            <div style={{
              width: '25px',
              height: '25px',
              border: '2px solid white',
              borderRadius: '5px',
              transform: 'rotate(45deg)',
            }}></div>
          </div>
        )}
        <div style={{
          marginTop: '15px',
          textAlign: 'center',
        }}>
          <h2 style={{
            fontWeight: 'bold',
            fontSize: '18px',
            margin: '0 0 5px',
          }}>
            {companyName}
          </h2>
          <p style={{
            fontSize: '10px',
            letterSpacing: '1px',
            opacity: 0.8,
            margin: 0,
          }}>
            {tagline}
          </p>
        </div>
      </div>
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '20px',
        color: '#333',
        borderTopRightRadius: '15px',
        borderBottomRightRadius: '15px',
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '15px',
          fontSize: '12px'
        }}>
          <span style={{
            backgroundColor: '#e74c3c',
            borderRadius: '50%',
            color: 'white',
            width: '25px',
            height: '25px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: '10px',
            fontSize: '12px'
          }}>📍</span>
          {addressLine1}
        </div>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '15px',
          fontSize: '12px'
        }}>
          <span style={{
            backgroundColor: '#e74c3c',
            borderRadius: '50%',
            color: 'white',
            width: '25px',
            height: '25px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: '10px',
            fontSize: '12px'
          }}>📞</span>
          {phone}
        </div>
       
        <div style={{
          display: 'flex',
          alignItems: 'center',
          fontSize: '12px'
        }}>
          <span style={{
            backgroundColor: '#e74c3c',
            borderRadius: '50%',
            color: 'white',
            width: '25px',
            height: '25px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: '10px',
            fontSize: '12px'
          }}>✉️</span>
          {email}
        </div>
      </div>
    </div>
  );
};

export default BusinessCardVerso5;