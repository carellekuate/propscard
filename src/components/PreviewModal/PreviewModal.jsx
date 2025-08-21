import React from 'react';
import './PreviewModal.css';

const PreviewModal = ({ design, onClose, onCustomize }) => {
  const FrontComponent = design.component;
  const BackComponent = design.backComponent;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        
        <h3>Aperçu complet - {design.title}</h3>
        
        <div className="preview-container">
          <div className="card-side">
            <h4>Recto</h4>
            <div className="card-preview-modal">
              <FrontComponent />
            </div>
          </div>
          
          <div className="card-side">
            <h4>Verso</h4>
            <div className="card-preview-modal">
              <BackComponent />
            </div>
          </div>
        </div>
        
        <div className="preview-actions">
          <button className="customize-btn" onClick={onCustomize}>
            Personnaliser ce modèle
          </button>
          <button className="close-btn" onClick={onClose}>
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
};

export default PreviewModal;