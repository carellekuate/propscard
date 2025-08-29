import React from 'react';
import './PreviewModal.css';

const PreviewModal = ({ design, onClose, onCustomize }) => {
  // Vérification que design est défini et a les propriétés nécessaires
  if (!design || typeof design !== 'object') {
    return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <button className="modal-close" onClick={onClose}>×</button>
          <h3>Erreur: Design non disponible</h3>
          <p>Le design que vous essayez de visualiser n'est pas disponible.</p>
          <button className="close-btn" onClick={onClose}>
            Fermer
          </button>
        </div>
      </div>
    );
  }

  // Utilisation de valeurs par défaut sécurisées
  const FrontComponent = design.component || (() => <div>Composant recto non disponible</div>);
  const BackComponent = design.backComponent || (() => <div>Composant verso non disponible</div>);
  const title = design.title || 'Design sans titre';

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        
        <h3>Aperçu complet - {title}</h3>
        
        <div className="preview-container">
          <div className="card-side">
            <div className="card-preview-modal">
              <FrontComponent />
            </div>
              <div className="card-preview-modal">
                <BackComponent />
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
    </div>
  );
};

export default PreviewModal;