import React, { useState } from 'react';

export default function Fields() {
    const getInitialFormData = () => {
      return {
        name: '',
        jobTitle: '',
        phone: '',
        email: '',
        addressLine1: '',
        addressLine2: '',
        website: '',
        companyName: '',
        tagline: '',
        logo: ''
      };
    };
      const [formData, setFormData] = useState(getInitialFormData());
   const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
      return (
     <>
        <div className="input-group">
            <label>Nom complet</label>
            <div className="input-wrapper">
            <input type="text" name="name" value={formData.name} onChange={handleChange} className="form-input" required /> </div>
        </div>
        
        <div className="input-group">
            <label>Titre professionnel</label>
            <div className="input-wrapper">
            <input type="text" name="jobTitle" value={formData.jobTitle} onChange={handleChange} className="form-input" required />
            </div>
        </div>
        
        <div className="input-group">
            <label>Téléphone</label>
            <div className="input-wrapper">
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="form-input" required />
            </div>
        </div>
        
        <div className="input-group">
            <label>Email</label>
            <div className="input-wrapper">
            <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-input" required />
            </div>
        </div>
        
        <div className="input-group">
            <label>Adresse (ligne 1)</label>
            <div className="input-wrapper">
            <input type="text" name="addressLine1" value={formData.addressLine1} onChange={handleChange} className="form-input" />
            </div>
        </div>
        
        <div className="input-group">
            <label>Adresse (ligne 2)</label>
            <div className="input-wrapper">
            <input type="text" name="addressLine2" value={formData.addressLine2} onChange={handleChange} className="form-input" />
            </div>
        </div>
        
        <div className="input-group">
            <label>Nom de l'entreprise</label>
            <div className="input-wrapper">
            <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} className="form-input" />
            </div>
        </div>
        
        <div className="input-group">
            <label>Slogan</label>
            <div className="input-wrapper">
            <input type="text" name="tagline" value={formData.tagline} onChange={handleChange} className="form-input" />
            </div>
        </div>
    </>
  )
}
