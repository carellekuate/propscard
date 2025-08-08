import React from 'react';
import './PreviewModal.css';
import { useNavigate } from 'react-router-dom'; // Ajouter cette importation

const PreviewModal = ({ template, onClose }) => {
  const navigate = useNavigate(); // Utiliser le hook de navigation

  const handleCustomize = () => {
    navigate('/edit', { state: { template } }); // Navigation vers la page d'édition
    onClose(); // Fermer la modal
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>×</button>
        <div className="modal-image-container">
          <img src={template.img} alt={template.title} />
        </div>
        <div className="modal-info">
          <h2>{template.title}</h2>
          <p className="modal-price">{template.price}</p>
          <div className="modal-actions">
            <button className="modal-customize-btn" onClick={handleCustomize}>
              Personnaliser ce modèle
            </button>
            <button className="modal-close-btn" onClick={onClose}>Fermer</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewModal;