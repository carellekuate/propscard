import React, { useState } from 'react';
import './PrintOptionPageStyle.css';
import { useLocation, useNavigate } from 'react-router-dom';
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
    price: "500 fcfa",
    component: BusinessCardRecto1,
    backComponent: BusinessCardVerso1
  },
  {
    id: 2,
    price: "750 fcfa",
    component: BusinessCardRecto2,
    backComponent: BusinessCardVerso2
  },
  {
    id: 3,
    price: "500 fcfa",
    component: BusinessCardRecto3,
    backComponent: BusinessCardVerso3
  },
  {
    id: 4,
    price: "750 fcfa",
    component: BusinessCardRecto4,
    backComponent: BusinessCardVerso4
  },
  {
    id: 6,
    price: "600 fcfa",
    component: BusinessCardRecto5,
    backComponent: BusinessCardVerso5
  },
  {
    id: 7,
    price: "600 fcfa",
    component: BusinessCardRecto6,
    backComponent: BusinessCardVerso6
  },
  {
    id: 8,
    price: "600 fcfa",
    component: BusinessCardRecto7,
    backComponent: BusinessCardVerso7
  },
  {
    id: 9,
    price: "600 fcfa",
    component: BusinessCardRecto8,
    backComponent: BusinessCardVerso8
  }
];

const WatermarkOverlay = ({ data }) => {
  return (
    <div className="card-watermark">
      <div className="watermark-line">NON PAYÉ - {data.name || 'UTILISATEUR'}</div>
      <div className="watermark-line">{new Date().toLocaleDateString()}</div>
      <div className="watermark-line">{document.location.hostname}</div>
    </div>
  );
};

const PrintOptionsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { cardData, templateId, action } = location.state || {};

  const template = allTemplates.find(t => t.id === templateId);
  const [quantity, setQuantity] = useState(100);
  const [format, setFormat] = useState('standard');

  if (!template || !cardData) {
    return <div className="error-message">Données manquantes ou template non trouvé.</div>
  }

  const designPrice = parseInt(template.price.replace(/\D/g, ''));
  const printPricePerCard = 10;
  const totalPrice = designPrice + (quantity * printPricePerCard);

  const handleCheckout = () => {
    navigate('/payment-method', {
      state: {
        cardData: JSON.parse(JSON.stringify(cardData)),
        templateId,
        quantity,
        format,
        totalPrice,
        action: 'order' // Correction: utiliser 'order' au lieu de l'action originale
      }
    });
  };

  const TemplateFrontPreview = template.component;
  const TemplateBackPreview = template.backComponent;

  return (
    <div className="printOptionContainer">
      <h1>Options d'impression</h1>

      <div className="cardPreview">
        <h3>Aperçu de votre carte</h3>
        <div className="card-side1">
          <div className="card-preview-modal1">
            <TemplateFrontPreview data={cardData} />
            <WatermarkOverlay data={cardData} />
          </div>
          <div className="card-preview-modal1">
            <TemplateBackPreview data={cardData} />
            <WatermarkOverlay data={cardData} />
          </div>
        </div>
      </div>

      <div className="optionGroup">
        <label>Quantité:</label>
        <input
          type="number"
          min="50"
          max="1000"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        />
      </div>

      <div className="optionGroup">
        <label>Format:</label>
        <select value={format} onChange={(e) => setFormat(e.target.value)}>
          <option value="standard">Standard (85×55 mm)</option>
          <option value="square">Carré (55×55 mm)</option>
          <option value="slim">Slim (85×35 mm)</option>
        </select>
      </div>

      <div className="price-info">
        <p>Prix conception: {designPrice} fcfa</p>
        <p>Prix impression: {quantity} × {printPricePerCard} fcfa = {quantity * printPricePerCard} fcfa</p>
        <h3>Total: {totalPrice.toLocaleString()} fcfa</h3>
      </div>

      <button className="paymentButton" onClick={handleCheckout}>
        Passer au paiement
      </button>
    </div>
  );
};

export default PrintOptionsPage;