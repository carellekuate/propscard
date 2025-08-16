import React from 'react';

const Template1Front = ({ data = {} }) => {
  // Données par défaut si 'data' est undefined ou null
  const safeData = data || {};
  
  
  return (
    <div className="template-1-front">
      <div className="left-section">
        <h2>{safeData.name || 'Nom & Prénoms'}</h2>
        <h5>{safeData .jobTitle || 'Titre professionnel'}</h5>
        
        <div className="contact-info">
          <p><span>📞</span> {safeData.phone || 'Téléphone'}</p>
          <p><span>✉</span> {safeData.email || 'Email'}</p>
          <p><span>📍</span> {safeData.location || 'Localisation'}</p>
        </div>
      </div>
      
      <div className="right-section">
        <div className="logo-placeholder">
          {safeData.companyLogo ? (
            <img src={safeData.companyLogo} alt="Logo de l'entreprise" />
          ) : (
            <div className="default-logo">Logo</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Template1Front;