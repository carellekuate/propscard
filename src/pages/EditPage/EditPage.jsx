import React, { useState } from 'react';
import './EditPageStyles.css';
import { useNavigate, useLocation } from 'react-router-dom';
import BusinessCardRecto1 from '../../components/CardTemplates/BusinessCardRecto1';
import BusinessCardVerso1 from '../../components/CardTemplates/BusinessCardVerso1';
import BusinessCardRecto2 from '../../components/CardTemplates/BusinessCardRecto2';
import BusinessCardVerso2 from '../../components/CardTemplates/BusinessCardVerso2';
import BusinessCardRecto3 from '../../components/CardTemplates/BusinessCardRecto3';
import BusinessCardVerso3 from '../../components/CardTemplates/BusinessCardVerso3';
import BusinessCardRecto4 from '../../components/CardTemplates/BusinessCardRecto4';
import BusinessCardVerso4 from '../../components/CardTemplates/BusinessCardVerso4';
import BusinessCardRecto5 from '../../components/CardTemplates/BusinessCardRecto5';
import BusinessCardVerso5 from '../../components/CardTemplates/BusinessCardVerso5';
import BusinessCardRecto6 from '../../components/CardTemplates/BusinessCardRecto6';
import BusinessCardVerso6 from '../../components/CardTemplates/BusinessCardVerso6'; 
import BusinessCardRecto7 from '../../components/CardTemplates/BusinessCardRecto7';
import BusinessCardVerso7 from '../../components/CardTemplates/BusinessCardVerso7';
import BusinessCardRecto8 from '../../components/CardTemplates/BusinessCardRecto8';
import BusinessCardVerso8 from '../../components/CardTemplates/BusinessCardVerso8';

const allTemplates = [
  { 
    id: 1, 
    title: "Design minimaliste noir",
    price: "500 fcfa",
    component: BusinessCardRecto1,
    backComponent: BusinessCardVerso1
  },
  { 
    id: 2, 
    title: "Design créatif pour artiste",
    price: "750 fcfa",
    component: BusinessCardRecto2,
    backComponent: BusinessCardVerso2
  },
  { 
    id: 3, 
    title: "Design minimaliste bleu",
    price: "500 fcfa",
    component: BusinessCardRecto3,
    backComponent: BusinessCardVerso3
  },
  { 
    id: 4, 
    title: "Design élégant or",
    price: "750 fcfa",
    component: BusinessCardRecto4,
    backComponent: BusinessCardVerso4
  },
  { 
    id: 6, 
    title: "Design moderne",  
    price: "600 fcfa",
    component: BusinessCardRecto5,
    backComponent: BusinessCardVerso5
  },
  { 
    id: 7, 
    title: "Design professionnel rouge",      
    price: "800 fcfa",
    component: BusinessCardRecto6,
    backComponent: BusinessCardVerso6
  },
  { 
    id: 8, 
    title: "Design professionnel gris", 
    price: "800 fcfa",
    component: BusinessCardRecto7,
    backComponent: BusinessCardVerso7
  },
  { 
    id: 9, 
    title: "Design professionnel moderne",    
    price: "800 fcfa",
    component: BusinessCardRecto8,
    backComponent: BusinessCardVerso8
  }
];

// Définition des limites de caractères
const CHARACTER_LIMITS = {
  name: 30,
  jobTitle: 40,
  phone: 15,
  email: 40,
  addressLine1: 50,
  addressLine2: 50,
  website: 40,
  companyName: 30,
  tagline: 60
};

export default function EditPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { templateId } = location.state || {};
  const template = allTemplates.find(t => t.id === templateId);
  
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
  const [currentStep, setCurrentStep] = useState(1);
  const [characterCount, setCharacterCount] = useState({
    name: 0,
    jobTitle: 0,
    phone: 0,
    email: 0,
    addressLine1: 0,
    addressLine2: 0,
    website: 0,
    companyName: 0,
    tagline: 0
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Vérifier la limite de caractères
    if (value.length <= CHARACTER_LIMITS[name]) {
      setFormData(prev => ({ ...prev, [name]: value }));
      setCharacterCount(prev => ({ ...prev, [name]: value.length }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    navigate("/preview", { 
      state: { 
        formData: { ...formData },
        templateId: template.id
      } 
    });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({ ...prev, logo: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleNext = () => {
    setCurrentStep(2);
  };

  const handlePrevious = () => {
    setCurrentStep(1);
  };

  if (!template) {
    return <div>Template non trouvé</div>;
  }

  const TemplatePreview = template.component;
  const TemplateBackPreview = template.backComponent;

  return (
    <div className="edit-page-container">     
      <p className="edit-page-title">Remplissez votre carte</p>
      <div className="edit-page-content">
        <div className="card-preview-section">
          <div className="card-wrapper">
            <TemplatePreview data={formData} />
          </div>
          <div className="card-wrapper">
            <TemplateBackPreview data={formData} />
          </div>
        </div>

        <div className="modern-form edit-form-container"> 
          <form onSubmit={handleSubmit}>
            {currentStep === 1 ? (
              <div className="form-step">
                <div className="input-group">
                  <label>Nom complet</label>
                  <div className="input-wrapper">
                    <input 
                      type="text" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange} 
                      className="form-input" 
                      placeholder="Entrez votre nom" 
                      required 
                      maxLength={CHARACTER_LIMITS.name}
                    />
                  </div>
                  <div className="character-counter">
                    {characterCount.name}/{CHARACTER_LIMITS.name} caractères
                  </div>
                </div>
                
                <div className="input-group">
                  <label>Titre professionnel</label>
                  <div className="input-wrapper">
                    <input 
                      type="text" 
                      name="jobTitle" 
                      value={formData.jobTitle} 
                      onChange={handleChange} 
                      className="form-input" 
                      placeholder="Votre poste" 
                      required 
                      maxLength={CHARACTER_LIMITS.jobTitle}
                    />
                  </div>
                  <div className="character-counter">
                    {characterCount.jobTitle}/{CHARACTER_LIMITS.jobTitle} caractères
                  </div>
                </div>
                
                <div className="input-group">
                  <label>Téléphone</label>
                  <div className="input-wrapper">
                    <input 
                      type="tel" 
                      name="phone" 
                      value={formData.phone} 
                      onChange={handleChange} 
                      className="form-input" 
                      placeholder="Votre numéro" 
                      required 
                      maxLength={CHARACTER_LIMITS.phone}
                    />
                  </div>
                  <div className="character-counter">
                    {characterCount.phone}/{CHARACTER_LIMITS.phone} caractères
                  </div>
                </div>
                
                <div className="input-group">
                  <label>Email</label>
                  <div className="input-wrapper">
                    <input 
                      type="email" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleChange} 
                      className="form-input" 
                      placeholder="Votre email" 
                      required 
                      maxLength={CHARACTER_LIMITS.email}
                    />
                  </div>
                  <div className="character-counter">
                    {characterCount.email}/{CHARACTER_LIMITS.email} caractères
                  </div>
                </div>
                
                <div className="form-buttons single-button">
                  <button 
                    type="button" 
                    className="submit-button next-button"
                    onClick={handleNext}
                  >
                    Suivant
                  </button>
                </div>
              </div>
            ) : (
              <div className="form-step">
                <div className="input-group">
                  <label>Adresse </label>
                  <div className="input-wrapper">
                    <input 
                      type="text" 
                      name="addressLine1" 
                      value={formData.addressLine1} 
                      onChange={handleChange} 
                      className="form-input" 
                      placeholder="Adresse " 
                      maxLength={CHARACTER_LIMITS.addressLine1}
                    />
                  </div>
                  <div className="character-counter">
                    {characterCount.addressLine1}/{CHARACTER_LIMITS.addressLine1} caractères
                  </div>
                </div>
                
                <div className="input-group">
                  <label>Nom de l'entreprise</label>
                  <div className="input-wrapper">
                    <input 
                      type="text" 
                      name="companyName" 
                      value={formData.companyName} 
                      onChange={handleChange} 
                      className="form-input" 
                      placeholder="Nom de votre entreprise" 
                      maxLength={CHARACTER_LIMITS.companyName}
                    />
                  </div>
                  <div className="character-counter">
                    {characterCount.companyName}/{CHARACTER_LIMITS.companyName} caractères
                  </div>
                </div>
                
                <div className="input-group">
                  <label>Slogan</label>
                  <div className="input-wrapper">
                    <input 
                      type="text" 
                      name="tagline" 
                      value={formData.tagline} 
                      onChange={handleChange} 
                      className="form-input" 
                      placeholder="Votre slogan" 
                      maxLength={CHARACTER_LIMITS.tagline}
                    />
                  </div>
                  <div className="character-counter">
                    {characterCount.tagline}/{CHARACTER_LIMITS.tagline} caractères
                  </div>
                </div>

                <div className="input-group">
                  <label>Logo</label>
                  <div className="input-wrapper">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="form-input"
                      style={{padding: '0.75rem', height: 'auto'}}
                    />
                  </div>
                  {formData.logo && (
                    <div className="logo-preview">
                      <img src={formData.logo} alt="Logo preview" width="100" />
                    </div>
                  )}
                </div>
                
                <div className="form-buttons">
                  <button 
                    type="button" 
                    className="submit-button previous-button"
                    onClick={handlePrevious}
                  >
                    Précédent
                  </button>
                  <button 
                    type="submit" 
                    className="submit-button preview-button"
                  >
                    Prévisualiser la carte
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}