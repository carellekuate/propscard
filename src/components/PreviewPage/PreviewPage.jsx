import React, { useRef, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './PreviewPageStyles.css';
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
import BusinessCardVerso7 from '../../components/CardTemplates/BusinessCardVerso7' ;
import BusinessCardRecto8 from '../../components/CardTemplates/BusinessCardRecto8'; 
import BusinessCardVerso8 from '../../components/CardTemplates/BusinessCardVerso8' ;
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
    price: "800 fcfa",
    component: BusinessCardRecto6,
    backComponent: BusinessCardVerso6
  },
  { 
    id: 8, 
    price: "800 fcfa",
    component: BusinessCardRecto7,
    backComponent: BusinessCardVerso7
  },
  { 
    id: 9, 
    price: "800 fcfa",      
    component: BusinessCardRecto8,    
    backComponent: BusinessCardVerso8
  }
];

// Composant de filigrane pour les cartes
const WatermarkOverlay = ({ data }) => {
  return (
    <div className="card-watermark">
      <div className="watermark-line">NON PAYÉ - {data.name || 'UTILISATEUR'}</div>
      <div className="watermark-line">{new Date().toLocaleDateString()}</div>
      <div className="watermark-line">{document.location.hostname}</div>
    </div>
  );
};

export default function PreviewPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { formData, templateId } = location.state || {};
  const [showAlert, setShowAlert] = useState(false);
  
  const frontRef = useRef(null);
  const backRef = useRef(null);

  const template = allTemplates.find(t => t.id === templateId);
  const TemplateFront = template?.component;
  const TemplateBack = template?.backComponent;

  useEffect(() => {
    let alertTimeout;
    
    // Fonction pour afficher le message d'alerte
    const showAlertMessage = () => {
      setShowAlert(true);
      
      // Cacher l'alerte après 3 secondes
      alertTimeout = setTimeout(() => {
        setShowAlert(false);
      }, 3000);
    };

    // Empêcher le menu contextuel (clic droit)
    const preventContextMenu = (e) => {
      // Ne bloquer que si on clique sur une carte
      if (e.target.closest('.card-preview-modal')) {
        e.preventDefault();
        showAlertMessage();
        return false;
      }
    };

    // Détecter les tentatives de capture d'écran
    const preventScreenCapture = (e) => {
      // Détecter la touche Impr écran et les raccourcis d'impression
      if (e.key === "PrintScreen" || (e.ctrlKey && e.key === "p") || (e.metaKey && e.key === "p")) {
        // Ne bloquer que si on est sur la page de prévisualisation
        e.preventDefault();
        showAlertMessage();
        return false;
      }
    };

    // Ajouter les écouteurs d'événements
    document.addEventListener('contextmenu', preventContextMenu);
    document.addEventListener('keydown', preventScreenCapture);

    // Nettoyer les écouteurs lors du démontage du composant
    return () => {
      document.removeEventListener('contextmenu', preventContextMenu);
      document.removeEventListener('keydown', preventScreenCapture);
      
      clearTimeout(alertTimeout);
    };
  }, []);

  if (!template || !formData) {
    return <div className="error-message">Données manquantes</div>;
  }

  const handleDownload = async () => {
    try {
      // Créer des éléments div pour capturer le contenu
      const frontElement = document.createElement('div');
      const backElement = document.createElement('div');
      
      // Rendre les composants dans ces éléments
      const frontComponent = <TemplateFront data={formData} />;
      const backComponent = <TemplateBack data={formData} />;
      
      // Utiliser ReactDOM pour rendre les composants dans les éléments
      const { render } = await import('react-dom');
      await render(frontComponent, frontElement);
      await render(backComponent, backElement);
      
      // Attendre que le rendu soit complet
      await new Promise(resolve => setTimeout(resolve, 100));
      
      // Sauvegarder le HTML
      const captureData = {
        frontHTML: frontElement.innerHTML,
        backHTML: backElement.innerHTML,
        fileName: `carte-${formData.name || 'visite'}.pdf`,
        formData: formData,
        templateId: templateId
      };
      
      localStorage.setItem('pdfCaptureData', JSON.stringify(captureData));
      
    navigate('/payment-method', {
      state: {
        totalPrice: parseInt(template.price.replace(/\D/g, '')),
        formData: JSON.parse(JSON.stringify(formData)),
        templateId,
        action: 'download'
      }
    });
    
  } catch (error) {
    console.error('Erreur préparation téléchargement:', error);
    alert('Erreur lors de la préparation du téléchargement');
  }
};

  const handleOrder = () => {
    navigate('/print-options', {
      state: {
        cardData: JSON.parse(JSON.stringify(formData)),
        templateId,
        action: 'order'
      }
    });
  };

  return (
    <div className="preview-page-container">
      {showAlert && (
        <div className="screenshot-alert">
          <div className="screenshot-alert-content">
            <h3>⚠️ Protection du contenu</h3>
            <p>La capture d'écran est désactivée sur cette page</p>
          </div>
        </div>
      )}
      
      <div className="preview-modal-content">
        <h1>Présentation Finale de votre Carte</h1>        
        <div className="preview-container">
          <div className="card-side">
            <div className="card-preview-modal">
              <TemplateFront data={formData} />
              <WatermarkOverlay data={formData} />
            </div>
            <div className="card-preview-modal">
              <TemplateBack data={formData} />
              <WatermarkOverlay data={formData} />
            </div>
          </div>
          
          <div className="preview-description">
            <p>⚠️ Après paiement, vous pourrez télécharger vos cartes sans filigrane.</p>
          </div>
          
          <div className="preview-actions">
            <button
              onClick={handleDownload}
              className="download-pdf-btn"
            >
              Télécharger PDF
            </button>
            <button
              onClick={handleOrder}
              className="order-print-btn"
            >
              Commander l'impression
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}