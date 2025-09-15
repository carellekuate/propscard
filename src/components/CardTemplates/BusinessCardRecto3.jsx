import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const BusinessCardRecto3 = ({ data = {} }) => {
  const logoSource = data.logo || process.env.PUBLIC_URL + '/logo.png';
  
  const {
    name = "Noms & Prénoms",
    jobTitle = "Titre",
    phone = "(+237) 694587415",
    email = "card@gmail.com",
    addressLine1  = "Yaounde",
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
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Section bleue principale */}
        <div style={{
          width: '60%',
          height: '100%',
          backgroundColor: '#32a5f7',
          padding: '20px',
          color: 'white',
          boxSizing: 'border-box',
          clipPath: 'polygon(0 0, 100% 0, 80% 100%, 0 100%)'
        }}>
          <h2 style={{ fontSize: '18px', fontWeight: 'bold', margin: '0 0 5px 0' }}>{name}</h2>
          <h5 style={{ fontSize: '14px', margin: '0 0 15px 0' }}>{jobTitle}</h5>
          <div style={{ height: '1px', backgroundColor: 'white', margin: '10px 0 20px 0', width: '80%' }}></div>
          
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
            <FaPhone style={{ marginRight: '10px', fontSize: '14px' }} />
            <span style={{ fontSize: '12px' }}>{phone}</span>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
            <FaEnvelope style={{ marginRight: '10px', fontSize: '14px' }} />
            <span style={{ fontSize: '12px' }}>{email}</span>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
            <FaMapMarkerAlt style={{ marginRight: '10px', fontSize: '14px' }} />
            <span style={{ fontSize: '12px' }}>{addressLine1}</span>
          </div>
        </div>
        
        {/* Section droite avec logo */}
        <div style={{
          width: '40%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '10px'
        }}>
          <img 
            src={logoSource} 
            alt="Company Logo" 
            style={{
              width: '95px',
              height: '95px',
              objectFit: 'contain',
              marginBottom: '10px'
            }}
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
          <div style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '5px' }}>{companyName}</div>
          <div style={{ fontSize: '12px', color: '#666' }}>{tagline}</div>
        </div>
      </div>
    </div>
  );
};

export default BusinessCardRecto3;