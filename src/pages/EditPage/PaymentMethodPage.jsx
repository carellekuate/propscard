import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './PaymentMethodPage.css';
import orangeMoneyIcon from "../../assets/images/orange-money-icon.png";
import mtnMoneyIcon from "../../assets/images/mtn-money-icon.jpg";

export default function PaymentMethodPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { totalPrice, formData, templateId, action } = location.state || {};
  const [selectedMethod, setSelectedMethod] = useState(null);

  const paymentMethods = [
    { id: 1, name: "Orange Money", icon: orangeMoneyIcon },
    { id: 2, name: "MTN Money", icon: mtnMoneyIcon },
  ];

  const handleMethodSelection = (methodName) => {
    setSelectedMethod(methodName);
    
    navigate(`/transaction/${methodName.toLowerCase().replace(/\s+/g, '-')}`, {
      state: {
        method: methodName,
        amount: totalPrice,
        formData,
        templateId,
        action
      }
    });
  };

  return (
    <div className="paymentMethodContainer">
      <h1>Choisissez votre mode de paiement</h1>
      <p className="totalAmount">Total à payer: <strong>{totalPrice?.toLocaleString()} fcfa</strong></p>
      
      <div className="paymentMethods">
        {paymentMethods.map((method) => (
          <div 
            key={method.id} 
            className={`paymentMethod ${selectedMethod === method.name ? 'selected' : ''}`}
            onClick={() => handleMethodSelection(method.name)}
          >
            <img src={method.icon} alt={method.name} />
            <span>{method.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}