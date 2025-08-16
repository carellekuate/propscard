import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const PrintOptionsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { cardData, template } = location.state || {};
  
  const [quantity, setQuantity] = useState(100);
  const [format, setFormat] = useState('standard');
  
  // Prix de base + prix d'impression
  const designPrice = parseInt(template.price);
  const printPricePerCard = 10; // Exemple: 10 fcfa par carte
  const totalPrice = designPrice + (quantity * printPricePerCard);

  const handleCheckout = () => {
    navigate('/checkout', {
      state: {
        cardData,
        template,
        quantity,
        format,
        totalPrice
      }
    });
  };

  return (
    <div className="print-options-page">
      <h1>Options d'impression</h1>
      
      <div className="card-preview">
        {/* Afficher le recto/verso avec les données */}
      </div>
      
      <div className="options-form">
        <div className="form-group">
          <label>Quantité:</label>
          <input 
            type="number" 
            min="50" 
            max="1000" 
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
        
        <div className="form-group">
          <label>Format:</label>
          <select value={format} onChange={(e) => setFormat(e.target.value)}>
            <option value="standard">Standard (85×55 mm)</option>
            <option value="square">Carré (55×55 mm)</option>
            <option value="slim">Slim (85×35 mm)</option>
          </select>
        </div>
        
        <div className="price-summary">
          <p>Prix conception: {designPrice} fcfa</p>
          <p>Prix impression: {quantity} × {printPricePerCard} fcfa = {quantity * printPricePerCard} fcfa</p>
          <p className="total">Total: {totalPrice} fcfa</p>
        </div>
        
        <button onClick={handleCheckout} className="checkout-btn">
          Passer commande
        </button>
      </div>
    </div>
  );
};

export default PrintOptionsPage;