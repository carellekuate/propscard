import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import html2canvas from 'html2canvas';

// Fonction pour charger une image (utilisée pour les logos)
const loadImage = async (url) => {
  return new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = 'Anonymous';
    img.src = url;
    img.onload = () => resolve(img);
  });
};

const generateBusinessCardPdf = async (cardData, previewElementId = null) => {
  // Option 1: Génération à partir du HTML (plus fidèle à la preview)
  if (previewElementId) {
    try {
      const element = document.getElementById(previewElementId);
      const canvas = await html2canvas(element, {
        scale: 3, // Qualité plus élevée
        logging: false,
        useCORS: true,
      });
      
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'mm',
        format: [85, 54] // Format carte de visite standard (85x54mm)
      });

      pdf.addImage(imgData, 'PNG', 0, 0, 85, 54);
      return pdf;
    } catch (error) {
      console.error("Erreur avec html2canvas:", error);
      // Fallback à la génération manuelle si échec
    }
  }

  // Option 2: Génération manuelle (fallback)
  const doc = new jsPDF({
    orientation: 'landscape',
    unit: 'mm',
    format: [85, 54]
  });

  // Style configuration
  const primaryColor = '#000000';
  const secondaryColor = '#666666';
  const fontSizeLarge = 16;
  const fontSizeMedium = 12;
  const fontSizeSmall = 10;

  // Recto de la carte
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(primaryColor);
  
  // Nom
  doc.setFontSize(fontSizeLarge);
  doc.text(cardData.name, 42.5, 15, { align: 'center' });

  // Titre
  doc.setFontSize(fontSizeMedium);
  doc.setFont('helvetica', 'normal');
  doc.text(cardData.title, 42.5, 22, { align: 'center' });

  // Coordonnées
  doc.setFontSize(fontSizeSmall);
  doc.setTextColor(secondaryColor);
  doc.text(`T: ${cardData.phone}`, 42.5, 30, { align: 'center' });
  doc.text(`E: ${cardData.email}`, 42.5, 35, { align: 'center' });
  
  // Adresse (si disponible)
  if (cardData.address) {
    doc.text(cardData.address, 42.5, 40, { align: 'center' });
  }

  // Logo (si disponible)
  if (cardData.logo) {
    try {
      const imgData = await loadImage(cardData.logo);
      const imgWidth = 25;
      const imgHeight = 10;
      doc.addImage(imgData, 'JPEG', 
        (85 - imgWidth) / 2, // Centré horizontalement
        45, // Position verticale
        imgWidth, 
        imgHeight
      );
    } catch (error) {
      console.error("Erreur de chargement du logo:", error);
    }
  }

  // Verso de la carte (si besoin)
  if (cardData.hasBackSide) {
    doc.addPage([85, 54], 'landscape');
    
    // Logo au verso
    if (cardData.logo) {
      try {
        const imgData = await loadImage(cardData.logo);
        doc.addImage(imgData, 'JPEG', 30, 20, 25, 10);
      } catch (error) {
        console.error("Erreur de chargement du logo verso:", error);
      }
    }
    
    // Texte supplémentaire (ex: "CRUNCH Bio plus")
    if (cardData.backText) {
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(fontSizeMedium);
      doc.setTextColor(primaryColor);
      doc.text(cardData.backText, 42.5, 40, { align: 'center' });
    }
  }

  return doc;
};

// Fonction principale d'export

export const generateAndDownloadPDF = async (cardData, previewElementId = null) => {
  try {
    const pdfDoc = await generateBusinessCardPdf(cardData, previewElementId);
    return pdfDoc.output('blob');
  } catch (error) {
    console.error("Erreur lors de la génération du PDF:", error);
    throw error;
  }
};
