import React, { useState } from 'react';
import './ProductCard.css';
import PreviewModal from '../PreviewModal/PreviewModal';

const ProductCard = ({ template }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div 
        className="product-card"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="card-image-container">
          <img src={template.img} alt={template.title} />
          {isHovered && (
            <div className="hover-actions">
              <button 
                className="preview-btn"
                onClick={() => setShowModal(true)}
              >
                Aperçu rapide
              </button>
            </div>
          )}
        </div>
        <div className="card-info">
          <h3>{template.title}</h3>
          <p className="price">{template.price}</p>
          <button className="customize-btn">Personnaliser</button>
        </div>
      </div>

      {showModal && (
        <PreviewModal 
          template={template} 
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
};

export default ProductCard;