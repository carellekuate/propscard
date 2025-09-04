import React from 'react';

const BusinessCardVerso3 = ({ data = {} }) => {
  const logoSource = data.logo || process.env.PUBLIC_URL + '/logo.png';
  
  const {
    email = "company@mail.com",
    slogan = "",
    companyName = "Dental Logo",
    tagline = "TAGLINE"
  } = data;

  return (
    <div style={{
      width: '340px',
      height: '216px',
      margin: 0,
      padding: 0,
      display: 'flex',
      borderRadius: '20px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      overflow: 'hidden'
    }}>
      <div style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#fcf1f1',
        borderRadius: '20px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        padding: '20px',
        boxSizing: 'border-box'
      }}>
        <img 
          src={logoSource} 
          alt="Company Logo" 
          style={{
            width: '120px',
            height: '120px',
            objectFit: 'contain',
            marginTop: '1px'
          }}
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />
        <div style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '5px' }}>{companyName}</div>
        <div style={{ fontSize: '12px', color: '#666', marginBottom: '15px' }}>{tagline}</div>
        <div style={{ fontSize: '10px', fontStyle: 'italic', color: '#666', marginBottom: '15px' }}>{slogan}</div>
        <div style={{ width: '70%', height: '1px', backgroundColor: '#32a5f7', margin: '10px 0' }}></div>
        <div style={{ fontSize: '14px', fontStyle: 'italic', color: '#666', margin: '15px 0' }}>{email}</div>
        <div style={{ width: '70%', height: '1px', backgroundColor: '#32a5f7', margin: '10px 0' }}></div>
      </div>
    </div>
  );
};

export default BusinessCardVerso3;