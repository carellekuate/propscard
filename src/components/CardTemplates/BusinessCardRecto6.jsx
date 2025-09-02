import React from 'react';

const BusinessCardRecto6 = ({ data = {} }) => {
  const {
    name = "ALEX MANSOUR",
    jobTitle = "JOB TITLE",
    companyName = "COMPANY NAME",
    logo
  } = data;

  const initials = name.split(' ').map(n => n[0]).join('').toUpperCase();

  return (
    <div style={{
      width: '350px',
      height: '200px',
      backgroundColor: '#fff',
      borderRadius: '15px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      display: 'flex',
      fontFamily: 'sans-serif',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        flex: 1,
        backgroundColor: 'white',
        borderTopLeftRadius: '15px',
        borderBottomLeftRadius: '15px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        zIndex: 1,
      }}>
        <div style={{
          position: 'absolute',
          bottom: '20px',
          left: '20px',
          width: '70px',
          height: '70px',
          backgroundColor: '#000',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#ffc107',
          fontSize: '12px',
          fontWeight: 'bold'
        }}>
          QR CODE
        </div>
      </div>
      <div style={{
        position: 'absolute',
        top: 0,
        left: '20%',
        bottom: 0,
        width: '80%',
        backgroundColor: 'white',
        transform: 'skewX(-20deg)',
        transformOrigin: '0 100%',
      }}></div>
      <div style={{
        position: 'absolute',
        top: 0,
        left: '20%',
        bottom: 0,
        width: '60%',
        backgroundColor: '#ffc107',
        transform: 'skewX(-20deg)',
        transformOrigin: '0 100%',
        zIndex: 1,
      }}></div>
      <div style={{
        flex: 1,
        backgroundColor: '#000',
        borderTopRightRadius: '15px',
        borderBottomRightRadius: '15px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        position: 'relative',
        zIndex: 2,
        paddingLeft: '50px',
      }}>
        {logo ? (
          <img src={logo} alt="Logo" style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            objectFit: 'cover',
            marginBottom: '10px',
            border: '2px solid #ffc107'
          }} />
        ) : (
          <div style={{
            width: '50px',
            height: '50px',
            border: '2px solid #ffc107',
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '10px',
            fontSize: '18px',
            fontWeight: 'bold',
            color: '#ffc107',
          }}>
            {initials.substring(0, 2)}
          </div>
        )}
        <div style={{
          textAlign: 'center',
        }}>
          <h2 style={{
            margin: 0,
            fontSize: '18px',
            fontWeight: 'bold'
          }}>
            {name}
          </h2>
          <p style={{
            margin: '5px 0 0',
            fontSize: '12px',
            color: '#ffc107'
          }}>
            {jobTitle}
          </p>
          <p style={{
            margin: '5px 0 0',
            fontSize: '10px',
            color: '#ccc'
          }}>
            {companyName}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BusinessCardRecto6;