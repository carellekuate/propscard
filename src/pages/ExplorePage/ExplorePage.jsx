import React, { useState } from 'react';
import './ExplorePageStyles.css';
import { FaBeer } from 'react-icons/fa';
import img1 from '../../assets/images/fa.png';
import img2 from '../../assets/images/fb1.png';
import img3 from '../../assets/images/fo.png';
import img4 from '../../assets/images/fg.png';
import img5 from '../../assets/images/fi.png';
import img6 from '../../assets/images/ft.png';
import img7 from '../../assets/images/fy.png';
import img8 from '../../assets/images/fz.png';
import img9 from '../../assets/images/fs.png';
import img10 from '../../assets/images/fab.png'; 
import img11 from '../../assets/images/fe.png';
import img12 from '../../assets/images/fk.png';    
import { navLinks } from '../../constants/NavLinks';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import { useNavigate } from 'react-router-dom';

import BusinessCardRecto1 from '../../components/CardTemplates/BusinessCardRecto1';
import BusinessCardVerso1  from '../../components/CardTemplates/BusinessCardVerso1';
import BusinessCardRecto2 from '../../components/CardTemplates/BusinessCardRecto2';
import BusinessCardVerso2  from '../../components/CardTemplates/BusinessCardVerso2';
import BusinessCardRecto3 from '../../components/CardTemplates/BusinessCardRecto3';
import BusinessCardVerso3  from '../../components/CardTemplates/BusinessCardVerso3';
import BusinessCardRecto4   from '../../components/CardTemplates/BusinessCardRecto4';
import BusinessCardVerso4  from '../../components/CardTemplates/BusinessCardVerso4';
import BusinessCardRecto5 from '../../components/CardTemplates/BusinessCardRecto5';   
import BusinessCardVerso5  from '../../components/CardTemplates/BusinessCardVerso5';
import BusinessCardRecto6 from '../../components/CardTemplates/BusinessCardRecto6';   
import BusinessCardVerso6  from '../../components/CardTemplates/BusinessCardVerso6';  
import BusinessCardRecto7 from '../../components/CardTemplates/BusinessCardRecto7';   
import BusinessCardVerso7  from '../../components/CardTemplates/BusinessCardVerso7';
import BusinessCardRecto8 from '../../components/CardTemplates/BusinessCardRecto8';   
import BusinessCardVerso8  from '../../components/CardTemplates/BusinessCardVerso8';
import PreviewModal from '../../components/PreviewModal/PreviewModal';



export default function ExplorePage() {
  const navigate = useNavigate();
  const [selectedDesign, setSelectedDesign] = useState(null);
  const [showPreview, setShowPreview] = useState(false);

  const cardDesigns = [
    { 
      id: 1, 
      title: "Design minimaliste noir",
      price: "500 fcfa",
      component: BusinessCardRecto1,
      backComponent: BusinessCardVerso1
    },
    { 
      id: 2, 
      title: "Design créatif pour artiste",
      price: "750 fcfa",
      component: BusinessCardRecto2,
      backComponent: BusinessCardVerso2
    },
    { 
      id: 3, 
      title: "Design minimaliste bleu",
      price: "500 fcfa",
      component: BusinessCardRecto3,
      backComponent: BusinessCardVerso3
    },
    { 
      id: 4, 
      title: "Design élégant or",
      price: "750 fcfa",
    component: BusinessCardRecto4,
      backComponent: BusinessCardVerso4
    },
    { 
      id: 6, 
      title: "Design moderne",  
      price: "600 fcfa",
      component: BusinessCardRecto5,
      backComponent: BusinessCardVerso5
    }
    ,{ 
      id: 7, 
      title: "Design professionnel rouge",  
      price: "800 fcfa",
      component: BusinessCardRecto6,
      backComponent: BusinessCardVerso6
    },
    { 
      id: 8, 
      title: "Design professionnel gris",   
      price: "800 fcfa",
      component: BusinessCardRecto7,
      backComponent: BusinessCardVerso7
    },
    { 
      id: 9, 
      title: "Design professionnel moderne",      
      price: "800 fcfa",    
      component: BusinessCardRecto8,    
      backComponent: BusinessCardVerso8
    } 
  ];

  const handleClick = (design) => {
    navigate("/edit", { 
      state: { 
        templateId: design.id
      } 
    });
  };

  const handlePreview = (design, e) => {
    e.stopPropagation();
    setSelectedDesign(design);
    setShowPreview(true);
  };

  const closePreview = () => {
    setShowPreview(false);
    setSelectedDesign(null);
  };

  return (
    <div className="all">
      <Navbar navLinks={navLinks} />
      <div className="products-page">
        <h2>Nos Modèles de Cartes de Visite</h2>
        <p className="subtitle">Choisissez un design qui représente votre entreprise</p>

        <div className="card-list">
          {cardDesigns.map((design) => (
            <div className="card-item" key={design.id} style={{ alignSelf: 'start' }}>
              <div className="card-preview" onClick={() => handleClick(design)}>
                <design.component />
                <button 
                  className="preview-btn"
                  onClick={(e) => handlePreview(design, e)}
                >
                  Aperçu
                </button>
              </div>
              <div className="card-details">
                <h3>{design.title}</h3>
                <p className="price">{design.price}</p>
                <button className="custom-button" onClick={() => handleClick(design)}>
                  Personnaliser
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {showPreview && selectedDesign && (
        <PreviewModal 
          design={selectedDesign} 
          onClose={closePreview}
          onCustomize={() => {
            closePreview();
            handleClick(selectedDesign);
          }}
        />
      )}
      
      <Footer />
    </div>  
  );
}