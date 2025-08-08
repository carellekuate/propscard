import React from 'react';
import './ExplorePageStyles.css';
import ProductCard from '../../components/ProductCard/ProductCard';
import img1 from '../../assets/images/fa2.PNG'
import img2 from '../../assets/images/fb1.PNG'
import img3 from '../../assets/images/fo.PNG'
import img4 from '../../assets/images/fg.PNG'
import img5 from '../../assets/images/fi.PNG'
import img6 from '../../assets/images/ft.PNG'
import img7 from '../../assets/images/fy.PNG'
import img8 from '../../assets/images/fz.PNG'
import img9 from '../../assets/images/fs.PNG'
import img10 from '../../assets/images/fab.PNG' 
import img11 from '../../assets/images/fe.PNG'
import img12 from '../../assets/images/fk.PNG'    


const cardTemplates = [
    { id: 1, img: img1, title: "Moderne Élégant", price: "1.900fcfa" },
    { id: 2, img: img2, title: "Minimaliste Noir", price: "2.500fcfa" },
    { id: 3, img: img3, title: "Créatif Couleurs", price: "1.900fcfa" },
    { id: 4, img: img4, title: "Professionnel Bleu", price: "2.799fcfa" },
    { id: 5, img: img5, title: "Luxe Doré", price: "2.499fcfa" },
    { id: 6, img: img6, title: "Vintage", price: "1.999fcfa" },
    { id: 7, img: img7, title: "Moderne Rouge", price: "1.000fcfa" },
    { id: 8, img: img8, title: "Classique", price: "2.000fcfa" },
    { id: 9, img: img9, title: "Artistique", price: "1200fcfa" },
    { id: 10, img: img10, title: "Design Minimal", price: "2.000fcfa" },
    { id: 11, img: img11, title: "Vintage", price: "1.500fcfa" },
    { id: 12, img: img12, title: "Moderne Rouge", price: "2.100fcfa" }
  ];
  
  export default function ExplorePage() {
    return (
      <div className="products-page">
        <h1>Nos Modèles de Cartes de Visite</h1>
        <p className="subtitle">Choisissez un design qui représente votre entreprise</p>
        
        <div className="grid-container">
          {cardTemplates.map((template) => (
            <ProductCard key={template.id} template={template} />
          ))}
        </div>
      </div>
    );
  }