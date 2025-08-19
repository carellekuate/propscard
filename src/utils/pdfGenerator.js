import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

// Fonction améliorée pour charger et convertir les SVG en données base64
const loadAndConvertImages = async (element) => {
  const images = element.querySelectorAll('img');
  const conversions = [];

  for (const img of images) {
    if (img.src && img.src.toLowerCase().endsWith('.svg')) {
      conversions.push(convertSvgToDataURL(img));
    }
  }

  await Promise.all(conversions);
};

// Convertit les SVG en données base64
const convertSvgToDataURL = async (imgElement) => {
  try {
    if (imgElement.src.startsWith('data:')) {
      return; // Déjà en base64
    }

    const response = await fetch(imgElement.src, {
      mode: 'cors',
      credentials: 'include'
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const svgText = await response.text();
    const base64 = btoa(unescape(encodeURIComponent(svgText)));
    const dataURL = `data:image/svg+xml;base64,${base64}`;
    
    // Remplace la source par la version base64
    imgElement.src = dataURL;
    
  } catch (error) {
    console.warn('Erreur conversion SVG:', error);
    // Fallback: utilise un placeholder ou laisse l'image originale
  }
};

// Fonction pour attendre le chargement complet des images
const waitForImages = (element) => {
  const images = element.querySelectorAll('img');
  const promises = [];

  images.forEach(img => {
    if (!img.complete) {
      promises.push(new Promise((resolve) => {
        img.onload = resolve;
        img.onerror = resolve; // Continue même en cas d'erreur
      }));
    }
  });

  return Promise.all(promises);
};

export const generateAndDownloadPDF = async (element, fileName = 'carte-visite.pdf') => {
  try {
    if (!element) {
      throw new Error('Élément HTML introuvable pour la capture');
    }

    // Clone l'élément pour éviter d'affecter le DOM original
    const clone = element.cloneNode(true);
    clone.style.position = 'fixed';
    clone.style.top = '0';
    clone.style.left = '0';
    clone.style.zIndex = '9999';
    clone.style.visibility = 'visible';
    clone.style.opacity = '1';
    document.body.appendChild(clone);

    // Convertit les SVG et attend le chargement des images
    await loadAndConvertImages(clone);
    await waitForImages(clone);
    await new Promise(resolve => setTimeout(resolve, 100)); // Délai supplémentaire

    const canvas = await html2canvas(clone, {
      scale: 3,
      logging: true, // Active les logs pour le débogage
      useCORS: true,
      allowTaint: true,
      backgroundColor: null,
      onclone: (clonedDoc, clonedElement) => {
        // Force les styles pour la capture
        clonedElement.style.visibility = 'visible';
        clonedElement.style.opacity = '1';
        clonedElement.style.transform = 'none';
        
        // Traite les images dans le clone aussi
        const images = clonedElement.querySelectorAll('img');
        images.forEach(img => {
          img.style.display = 'block';
          img.style.visibility = 'visible';
          if (img.src.toLowerCase().endsWith('.svg')) {
            img.style.width = img.style.width || '100%';
            img.style.height = img.style.height || 'auto';
          }
        });
      }
    });

    // Nettoie le clone
    document.body.removeChild(clone);

    const imgData = canvas.toDataURL('image/png', 1.0);
    
    const pdf = new jsPDF({
      orientation: 'landscape',
      unit: 'mm',
      format: [85, 54]
    });

    pdf.addImage(imgData, 'PNG', 0, 0, 85, 54);
    pdf.save(fileName);
    
    return true;

  } catch (error) {
    console.error('Erreur lors de la génération du PDF:', error);
    throw new Error(`Échec de la génération: ${error.message}`);
  }
};

export const generateDoubleSidedPDF = async (frontElement, backElement, fileName = 'carte-double-face.pdf') => {
  try {
    const pdf = new jsPDF({
      orientation: 'landscape',
      unit: 'mm',
      format: [85, 54]
    });

    // Clone et prépare le recto
    const frontClone = frontElement.cloneNode(true);
    document.body.appendChild(frontClone);
    await loadAndConvertImages(frontClone);
    await waitForImages(frontClone);

    const frontCanvas = await html2canvas(frontClone, {
      scale: 3,
      backgroundColor: null,
      useCORS: true,
      allowTaint: true
    });
    document.body.removeChild(frontClone);

    const frontImgData = frontCanvas.toDataURL('image/png');
    pdf.addImage(frontImgData, 'PNG', 0, 0, 85, 54);

    // Clone et prépare le verso
    pdf.addPage([85, 54], 'landscape');
    
    const backClone = backElement.cloneNode(true);
    document.body.appendChild(backClone);
    await loadAndConvertImages(backClone);
    await waitForImages(backClone);

    const backCanvas = await html2canvas(backClone, {
      scale: 3,
      backgroundColor: null,
      useCORS: true,
      allowTaint: true
    });
    document.body.removeChild(backClone);

    const backImgData = backCanvas.toDataURL('image/png');
    pdf.addImage(backImgData, 'PNG', 0, 0, 85, 54);

    pdf.save(fileName);
    return true;

  } catch (error) {
    console.error('Erreur génération PDF double face:', error);
    throw error;
  }
};

export const generatePDFFromSavedHTML = async () => {
  try {
    const captureData = localStorage.getItem('pdfCaptureData');
    if (!captureData) {
      throw new Error('Aucune donnée de capture trouvée');
    }

    const { frontHTML, backHTML, fileName } = JSON.parse(captureData);
    
    // Crée un conteneur temporaire
    const tempContainer = document.createElement('div');
    tempContainer.style.position = 'fixed';
    tempContainer.style.top = '-9999px';
    tempContainer.style.left = '-9999px';
    tempContainer.style.zIndex = '-9999';
    document.body.appendChild(tempContainer);

    // Crée les éléments front et back
    const frontDiv = document.createElement('div');
    frontDiv.innerHTML = frontHTML;
    frontDiv.style.width = '340px';
    frontDiv.style.height = '216px';
    
    const backDiv = document.createElement('div');
    backDiv.innerHTML = backHTML;
    backDiv.style.width = '340px';
    backDiv.style.height = '216px';

    tempContainer.appendChild(frontDiv);
    tempContainer.appendChild(backDiv);

    // Convertit les SVG et attend le chargement
    await loadAndConvertImages(frontDiv);
    await loadAndConvertImages(backDiv);
    await waitForImages(frontDiv);
    await waitForImages(backDiv);
    await new Promise(resolve => setTimeout(resolve, 200));

    // Génère le PDF
    await generateDoubleSidedPDF(frontDiv, backDiv, fileName);
    
    // Nettoie
    document.body.removeChild(tempContainer);
    localStorage.removeItem('pdfCaptureData');
    
    return true;
  } catch (error) {
    console.error('Erreur génération PDF depuis HTML:', error);
    localStorage.removeItem('pdfCaptureData');
    throw error;
  }
};

// Fonction utilitaire pour forcer le téléchargement d'une image
export const preloadImage = (url) => {
  return new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = 'Anonymous';
    img.src = url;
    img.onload = () => resolve(img);
    img.onerror = () => resolve(null); // Continue même en cas d'erreur
  });
};