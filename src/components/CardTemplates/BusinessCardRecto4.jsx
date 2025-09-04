import React from 'react';

const BusinessCardRecto4 = ({ data = {} }) => {
  const {
    companyName = "LOREM IPSUM",
    tagline = "YOUR TAG HERE!",
    phone = "+123-456-7890",
   addressLine1 = "your street here",
    email = "your@email.com",
    logo
  } = data;

  return (
    <div style={{
      width: '340px',
      height: '216px',
      background: 'white',
      border: '1px solid #2c3e50',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'sans-serif',
      overflow: 'hidden',
      position: 'relative'
    }}>
      {/* En-tête avec nom de l'entreprise */}
      <div style={{
        background: '#2c3e50',
        color: 'white',
        padding: '15px 20px',
        textAlign: 'center'
      }}>
        <h2 style={{
          margin: 0,
          fontSize: '20px',
          fontWeight: 'bold',
          letterSpacing: '1px'
        }}>{companyName}</h2>
        <p style={{
          margin: '5px 0 0',
          fontSize: '12px',
          color: '#ecf0f1'
        }}>{tagline}</p>
      </div>

      {/* Corps de la carte */}
      <div style={{
        flex: 1,
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}>
        {/* Numéro de téléphone */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '15px'
        }}>
          <div style={{
            width: '30px',
            height: '30px',
            borderRadius: '50%',
            background: '#3498db',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: '12px',
            color: 'white'
          }}>📞</div>
          <span style={{ fontSize: '14px' }}>{phone}</span>
        </div>

        {/* Site web */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '15px'
        }}>
          <div style={{
            width: '30px',
            height: '30px',
            borderRadius: '50%',
            background: '#e74c3c',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: '12px',
            color: 'white'
          }}>📍</div>
          <span style={{ fontSize: '14px' }}>{addressLine1}</span>
        </div>

        {/* Email */}
        <div style={{
          display: 'flex',
          alignItems: 'center'
        }}>
          <div style={{
            width: '30px',
            height: '30px',
            borderRadius: '50%',
            background: '#2ecc71',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: '12px',
            color: 'white'
          }}>✉️</div>
          <span style={{ fontSize: '14px' }}>{email}</span>
        </div>
      </div>

      {/* Logo en bas à droite */}
      {logo && (
        <div style={{
          position: 'absolute',
          bottom: '15px',
          right: '15px'
        }}>
          <img src={logo} alt="Company Logo" style={{
            width: '40px',
            height: '40px',
            objectFit: 'contain'
          }} />
        </div>
      )}
    </div>
  );
};

export default BusinessCardRecto4;