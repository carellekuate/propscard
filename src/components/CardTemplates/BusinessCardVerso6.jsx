import React from 'react';

const BusinessCardVerso6 = ({ data = {} }) => {
  const {
    name = "JAMES EVELEN",
    jobTitle = "GRAPHIC DESIGNER",
    phone = "080 808 080",
    email = "Info@mymail.com",
    website = "www.alexmansour.com",
    addressLine1 = "Your address, Your city",
    logo
  } = data;

  return (
    <div style={{
      width: '350px',
      height: '200px',
      backgroundColor: '#000',
      borderRadius: '15px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      display: 'flex',
      fontFamily: 'sans-serif',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        color: 'white',
        position: 'relative',
        zIndex: 2,
        paddingLeft: '20px',
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '15px',
          fontSize: '12px'
        }}>
          <span style={{
            backgroundColor: '#ffc107',
            borderRadius: '50%',
            color: '#000',
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
            backgroundColor: '#ffc107',
            borderRadius: '50%',
            color: '#000',
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
        <div style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '15px',
          fontSize: '12px'
        }}>
          <span style={{
            backgroundColor: '#ffc107',
            borderRadius: '50%',
            color: '#000',
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
            backgroundColor: '#ffc107',
            borderRadius: '50%',
            color: '#000',
            width: '25px',
            height: '25px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: '10px',
            fontSize: '12px'
          }}>🌐</span>
          {website}
        </div>
      </div>
      <div style={{
        position: 'absolute',
        top: 0,
        right: '20%',
        bottom: 0,
        width: '80%',
        backgroundColor: '#fff',
        transform: 'skewX(-20deg)',
        transformOrigin: '100% 0',
      }}></div>
      <div style={{
        position: 'absolute',
        top: 0,
        right: '20%',
        bottom: 0,
        width: '60%',
        backgroundColor: '#ffc107',
        transform: 'skewX(-20deg)',
        transformOrigin: '100% 0',
        zIndex: 1,
      }}></div>
      <div style={{
        flex: 1,
        backgroundColor: 'black',
        borderTopRightRadius: '15px',
        borderBottomRightRadius: '15px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        color: 'white',
        position: 'relative',
        zIndex: 2,
        paddingRight: '20px',
        textAlign: 'right',
      }}>
        <div style={{
          marginBottom: '5px',
          fontSize: '18px',
          fontWeight: 'bold',
        }}>
          {name}
        </div>
        <div style={{
          fontSize: '12px',
          color: '#bbb',
        }}>
          {jobTitle}
        </div>
      </div>
    </div>
  );
};

export default BusinessCardVerso6;