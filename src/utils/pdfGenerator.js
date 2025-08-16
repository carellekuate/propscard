import { PDFDocument, rgb } from 'pdf-lib';

// Fonction principale exportée
export const generateAndDownloadPDF = async (formData, templateId) => {
  console.log('[PDF Generator] Début de génération avec template:', templateId);
  
  try {
    // Validation des entrées
    if (!formData || !templateId) {
      throw new Error('Données manquantes: formData ou templateId non fournis');
    }

    const pdfDoc = await PDFDocument.create();
    const width = 85 * 2.83465; // 85mm en points
    const height = 55 * 2.83465; // 55mm en points

    // Page recto
    const frontPage = pdfDoc.addPage([width, height]);
    await drawCardFront(pdfDoc, frontPage, formData, templateId);

    // Page verso
    const backPage = pdfDoc.addPage([width, height]);
    await drawCardBack(pdfDoc, backPage, formData, templateId);

    // Génération finale
    const pdfBytes = await pdfDoc.save();
    downloadPDF(pdfBytes, `business-card-${Date.now()}.pdf`);
    
    console.log('[PDF Generator] PDF généré avec succès');
    return true;

  } catch (error) {
    console.error('[PDF Generator] Échec critique:', {
      error: error.message,
      stack: error.stack,
      data: { templateId, formData: Object.keys(formData) }
    });
    return false;
  }
};

// Téléchargement du PDF
const downloadPDF = (pdfBytes, fileName) => {
  try {
    const blob = new Blob([pdfBytes], { type: 'application/pdf' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(link.href);
  } catch (error) {
    console.error('[PDF Generator] Échec du téléchargement:', error);
  }
};

// Fonction pour dessiner une image
async function drawImage(pdfDoc, page, imageData, x, y, width, height) {
  try {
    if (!imageData) {
      console.warn('Aucune donnée image fournie');
      return false;
    }

    let imageBytes;
    if (typeof imageData === 'string') {
      if (imageData.startsWith('data:')) {
        const res = await fetch(imageData);
        imageBytes = await res.arrayBuffer();
      } else {
        throw new Error('Format image non supporté');
      }
    } else if (imageData instanceof ArrayBuffer) {
      imageBytes = imageData;
    } else {
      throw new Error('Type de donnée image non reconnu');
    }

    const image = imageData.startsWith('data:image/png') 
      ? await pdfDoc.embedPng(imageBytes)
      : await pdfDoc.embedJpg(imageBytes);

    page.drawImage(image, { x, y, width, height });
    return true;
  } catch (error) {
    console.error('[PDF Generator] Erreur image:', error);
    return false;
  }
}

// Template Minimaliste (exemple)
async function drawTemplate1Front(pdfDoc, page, data) {
  const { width, height } = page.getSize();
  const {
    name = 'Nom complet',
    jobTitle = 'Poste',
    phone = '',
    email = '',
    logo = null
  } = data;

  // Arrière-plan
  page.drawRectangle({
    x: 0, y: 0, width, height,
    color: rgb(1, 1, 1), // Blanc
    borderColor: rgb(0.9, 0.9, 0.9),
    borderWidth: 1
  });

  // Logo (si disponible)
  if (logo) {
    await drawImage(pdfDoc, page, logo, width - 70, height - 70, 50, 50);
  }

  // Texte
  page.drawText(name, {
    x: 30, y: height - 50,
    size: 16,
    color: rgb(0, 0, 0)
  });

  page.drawText(jobTitle, {
    x: 30, y: height - 80,
    size: 12,
    color: rgb(0.3, 0.3, 0.3)
  });

  // Coordonnées
  const contacts = [
    `T: ${phone}`,
    `E: ${email}`
  ].filter(Boolean).join(' | ');

  page.drawText(contacts, {
    x: 30, y: 40,
    size: 10,
    color: rgb(0.4, 0.4, 0.4)
  });
}

// Ajoutez ici les autres templates...

// Fonctions principales
async function drawCardFront(pdfDoc, page, data, templateId) {
  try {
    switch(templateId) {
      case 1: return await drawTemplate1Front(pdfDoc, page, data);
      // Ajoutez d'autres cas...
      default: throw new Error(`Template ${templateId} non implémenté`);
    }
  } catch (error) {
    console.error(`[Template ${templateId} Recto] Erreur:`, error);
    throw error;
  }
}

async function drawCardBack(pdfDoc, page, data, templateId) {
  // Implémentez similairement au recto
}