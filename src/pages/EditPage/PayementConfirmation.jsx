import React, { useState, useEffect } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import './PayementConfirmation.css';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

// Import des composants de template
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

export default function PaymentConfirmation() {
  const location = useLocation();
  const navigate = useNavigate();
  const { amount, method, action, formData, templateId } = location.state || {};
  const [isDownloading, setIsDownloading] = useState(false);
  const [template, setTemplate] = useState(null);

  useEffect(() => {
    if (templateId) {
      const foundTemplate = allTemplates.find(t => t.id === templateId);
      setTemplate(foundTemplate);
    }
  }, [templateId]);

  const handleDownload = async () => {
    if (!template || !formData) return;
    
    setIsDownloading(true);
    
    try {
      // Créer un PDF
      const pdf = new jsPDF('p', 'mm', 'a4');
      
      // Créer des éléments temporaires pour le rendu
      const frontDiv = document.createElement('div');
      const backDiv = document.createElement('div');
      
      // Ajouter les classes pour le style
      frontDiv.className = 'card-for-pdf';
      backDiv.className = 'card-for-pdf';
      
      // Rendre les composants dans les éléments
      const FrontComponent = template.component;
      const BackComponent = template.backComponent;
      
      // Utiliser ReactDOM pour rendre les composants
      const { render, unmountComponentAtNode } = await import('react-dom');
      
      await render(<FrontComponent data={formData} />, frontDiv);
      await render(<BackComponent data={formData} />, backDiv);
      
      // Attendre que le rendu soit complet
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Convertir en canvas puis en image
      const frontCanvas = await html2canvas(frontDiv, { scale: 3 });
      const backCanvas = await html2canvas(backDiv, { scale: 3 });
      
      const frontImgData = frontCanvas.toDataURL('image/png');
      const backImgData = backCanvas.toDataURL('image/png');
      
      // Ajouter les images au PDF
      pdf.addImage(frontImgData, 'PNG', 10, 10, 85, 55);
      pdf.addPage();
      pdf.addImage(backImgData, 'PNG', 10, 10, 85, 55);
      
      // Télécharger le PDF
      pdf.save(`carte-visite-${formData.name || 'sans-nom'}.pdf`);
      
      // Nettoyer
      unmountComponentAtNode(frontDiv);
      unmountComponentAtNode(backDiv);
      
    } catch (error) {
      console.error('Erreur lors du téléchargement:', error);
      alert('Une erreur est survenue lors du téléchargement');
    } finally {
      setIsDownloading(false);
    }
  };

  const handleNewOrder = () => {
    navigate('/');
  };

  return (
    <div className="confirmationContainer">
      <div className="confirmationCard">
        <div className="checkmark">✓</div>
        <h1>Paiement Réussi !</h1>
        
        {action === 'download' ? (
          <>
            <p>Votre carte de visite a été générée avec succès.</p>
            <p>Montant: <strong>{amount?.toLocaleString()} fcfa</strong> via {method}</p>
            
            <button 
              onClick={handleDownload} 
              className="downloadButton"
              disabled={isDownloading}
            >
              {isDownloading ? 'Téléchargement en cours...' : 'Télécharger ma carte'}
            </button>
          </>
        ) : (
          <>
            <p>Votre commande de cartes a été confirmée.</p>
            <p>Montant: <strong>{amount?.toLocaleString()} fcfa</strong> via {method}</p>
            <p className="delivery-info">
              Vos cartes seront livrées dans les 5 à 7 jours ouvrables.
            </p>
          </>
        )}
        
        <div className="actions">
          <button onClick={handleNewOrder} className="homeButton">
            Retour à l'accueil
          </button>
          <Link 
            to="/preview" 
            className="exploreButton"
            state={{ 
              formData: JSON.parse(JSON.stringify(formData || {})), 
              templateId 
            }}
          >
            Voir à nouveau ma carte
          </Link>
        </div>
      </div>
    </div>
  );
}