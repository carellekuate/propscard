import React from 'react';
import './PricingPage.css'; // Nous créerons ce fichier CSS

const PricingPage = () => {
  const plans = [
    {
      name: "Personal",
      price: "Gratuit",
      features: [
        "Créez une carte de contact",
        "Ajoutez photo, coordonnées, et logo ",
        "Mode hors ligne",
        "Signature email",
        "Ajout du QR Code",
      ],
      cta: "Créer une carte gratuite",
      highlighted: false
    },
    {
      name: "Professional",
      price: "3.999 fcfa",
      period: "/mois",
      features: [
        "Toutes les fonctionnalités Personal, plus:",
        "Designs et styles supplémentaires",
        "Ajout de vidéos, badges et PDF",
        "QR code avec branding personnalisé",
        "Notes et tags pour vos contacts",
      ],
      cta: "S'inscrire",
      highlighted: true
    },
    {
      name: "Business",
      price: "8.999fcfa",
      period: "/mois",
      features: [
        "Toutes les fonctionnalités Professional, plus:",
        "Cartes de visite digitales",
        "Création instantanée avec synchro AD",
        "Intégrations CRM",
        "Signatures email appliquées automatiquement",
        "Scanneur de cartes (illimité)"
      ],
      cta: "S'inscrire",
      highlighted: false
    },
    {
      name: "Enterprise",
      price: "Sur devis",
      features: [
        "Toutes les fonctionnalités Business, plus:",
        "Sécurité avancée et authentification",
        "Intégrations SAML/SCIM avancées",
        "Équipe de support dédiée",
        "Support technique prioritaire",
        "Programme Partenaire"
      ],
      cta: "Contacter les ventes",
      highlighted: false
    }
  ];

  return (
    <div className="pricing-page">
      <div className="pricing-header">
        <h1>Choisissez votre formule</h1>
        <p>Des options adaptées à tous les besoins professionnels</p>
      </div>
      
      <div className="pricing-container">
        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`pricing-card ${plan.highlighted ? 'highlighted' : ''}`}
            >
              <div className="plan-header">
                <h3>{plan.name}</h3>
                <div className="price">
                  <span className="amount">{plan.price}</span>
                  {plan.period && <span className="period">{plan.period}</span>}
                </div>
              </div>
              
              <ul className="features">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              
              <button className="cta-button">
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPage;