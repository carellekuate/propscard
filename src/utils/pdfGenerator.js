import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import html2canvas from 'html2canvas';

const loadImage = async (url) => {
  return new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = 'Anonymous';
    img.src = url;
    img.onload = () => resolve(img);
  });
};

const generateManualPdf = (doc, formData) => {
  // Recto de la carte
  doc.setFont('helvetica', 'bold');
  doc.setTextColor('#000000');
  
  // Nom
  doc.setFontSize(16);
  doc.text(formData.name || '', 42.5, 15, { align: 'center' });

  // Titre professionnel
  doc.setFontSize(12);
  doc.setFont('helvetica', 'normal');
  doc.text(formData.jobTitle || '', 42.5, 22, { align: 'center' });

  // Coordonnées
  doc.setFontSize(10);
  doc.setTextColor('#666666');
  if (formData.phone) doc.text(`T: ${formData.phone}`, 42.5, 30, { align: 'center' });
  if (formData.email) doc.text(`E: ${formData.email}`, 42.5, 35, { align: 'center' });
  if (formData.location) doc.text(formData.location, 42.5, 40, { align: 'center' });

  // Logo
  if (formData.logo) {
    loadImage(formData.logo).then(img => {
      const imgWidth = 25;
      const imgHeight = (img.height * imgWidth) / img.width;
      doc.addImage(
        img, 
        'JPEG', 
        (85 - imgWidth) / 2,
        50 - imgHeight,
        imgWidth,
        imgHeight
      );
    }).catch(console.error);
  }

  // Verso de la carte (toujours ajouté si des données existent)
  if (formData.companyName || formData.website || formData.tagline) {
    doc.addPage([85, 54], 'landscape');
    
    // Titre
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text(formData.companyName || 'Contact', 42.5, 20, { align: 'center' });

    // Détails
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    if (formData.tagline) doc.text(formData.tagline, 42.5, 28, { align: 'center' });
    if (formData.website) doc.text(formData.website, 42.5, 35, { align: 'center' });
    
    // Logo au verso
    if (formData.logo) {
      loadImage(formData.logo).then(img => {
        const imgWidth = 20;
        const imgHeight = (img.height * imgWidth) / img.width;
        doc.addImage(
          img, 
          'JPEG', 
          (85 - imgWidth) / 2,
          45 - imgHeight,
          imgWidth,
          imgHeight
        );
      }).catch(console.error);
    }
  }

  return doc;
};

export const generateAndDownloadPDF = async (formData, templateId, previewPrefix = 'card-preview') => {
  try {
    const doc = new jsPDF({
      orientation: 'landscape',
      unit: 'mm',
      format: [85, 54]
    });

    // Option 1: Génération à partir du HTML
    try {
      // Capture du recto
      const frontElement = document.getElementById(`${previewPrefix}-front`);
      if (!frontElement) throw new Error("Élément recto non trouvé");
      
      const frontCanvas = await html2canvas(frontElement, {
        scale: 3,
        logging: false,
        useCORS: true,
      });
      
      const frontImgData = frontCanvas.toDataURL('image/png');
      doc.addImage(frontImgData, 'PNG', 0, 0, 85, 54);

      // Capture du verso si existe
      const backElement = document.getElementById(`${previewPrefix}-back`);
      if (backElement) {
        doc.addPage([85, 54], 'landscape');
        
        const backCanvas = await html2canvas(backElement, {
          scale: 3,
          logging: false,
          useCORS: true,
        });
        
        const backImgData = backCanvas.toDataURL('image/png');
        doc.addImage(backImgData, 'PNG', 0, 0, 85, 54);
      }
    } catch (error) {
      console.error("Erreur avec html2canvas:", error);
      // Fallback à la génération manuelle
      generateManualPdf(doc, formData);
    }

    // Téléchargement
    doc.save('carte-de-visite.pdf');
    return true;
  } catch (error) {
    console.error("Erreur lors de la génération du PDF:", error);
    throw error;
  }
};