// Importation du style de la page
import "./HomePageStyles.css";

// Importation de l'image d'arrière-plan
import mockupImage from "../../assets/images/mockup.jpg";

// Importation des images de cartes
import card1 from "../../assets/images/fab.png";
import card2 from '../../assets/images/fb1.png';
import card3 from '../../assets/images/fi.png';
import card4 from '../../assets/images/fj.png';
import card5 from '../../assets/images/fa1.png';
import card6 from '../../assets/images/fo.png';
import card7 from '../../assets/images/ft.png';
import card8 from '../../assets/images/fk.png';
let card9;
try {
  card9 = require('../../assets/images/fa.png');
} catch (e) {
  card9 = '';
}
import card10 from '../../assets/images/fs.png';
import card11 from '../../assets/images/fe.png';
import card12 from '../../assets/images/fg.png';

// Importations des composantes
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";

// Importation des avatars pour les avis
import avatar1 from "../../assets/images/fab.png";
import avatar2 from '../../assets/images/fb1.png';
import avatar3 from '../../assets/images/fi.png';

// Importation des liens de navigation
import { navLinks } from "../../constants/NavLinks";
// Importation de Link pour la navigation
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const intervalRef = useRef(null);
  
  // Toutes les cartes
  const allCards = [
    {
      id: 1,
      image: card1,
      title: "Design minimaliste noir",
      alt: "Carte de visite récente 1"
    },
    {
      id: 2,
      image: card2,
      title: "Design créatif pour artiste",
      alt: "Carte de visite récente 2"
    },
    {
      id: 3,
      image: card3,
      title: "Design corporate élégant",
      alt: "Carte de visite récente 3"
    },
    {
      id: 4,
      image: card4,
      title: "Design moderne et épuré",
      alt: "Carte de visite récente 4"
    },
    {
      id: 5,
      image: card5,
      title: "Design élégant doré",
      alt: "Carte de visite récente 5"
    },
    {
      id: 6,
      image: card6,
      title: "Design créatif coloré",
      alt: "Carte de visite récente 6"
    },
    {
      id: 7,
      image: card7,
      title: "Design professionnel bleu",
      alt: "Carte de visite récente 7"
    },
    {
      id: 8,
      image: card8,
      title: "Design minimaliste blanc",
      alt: "Carte de visite récente 8"
    },
    {
      id: 9,
      image: card9,
      title: "Design moderne géométrique",
      alt: "Carte de visite récente 9"
    },
    {
      id: 10,
      image: card10,
      title: "Design artistique abstrait",
      alt: "Carte de visite récente 10"
    },
    {
      id: 11,
      image: card11,
      title: "Design élégant classique",
      alt: "Carte de visite récente 11"
    },
    {
      id: 12,
      image: card12,
      title: "Design créatif moderne",
      alt: "Carte de visite récente 12"
    }
  ];

  // Dupliquer les cartes pour créer un effet infini
  const duplicatedCards = [...allCards, ...allCards, ...allCards];

  // Défilement automatique infini
  useEffect(() => {
    const startAutoScroll = () => {
      intervalRef.current = setInterval(() => {
        setCurrentIndex(prev => {
          if (prev >= allCards.length * 2 - 1) {
            // Retourner au début sans animation
            setTimeout(() => {
              setCurrentIndex(0);
            }, 0);
            return allCards.length;
          }
          return prev + 1;
        });
      }, 3000);
    };

    startAutoScroll();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [allCards.length]);

  // Gérer le clic sur les indicateurs
  const handleIndicatorClick = (index) => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setCurrentIndex(index);
    
    // Redémarrer le défilement automatique après un délai
    setTimeout(() => {
      intervalRef.current = setInterval(() => {
        setCurrentIndex(prev => {
          if (prev >= allCards.length * 2 - 1) {
            setTimeout(() => {
              setCurrentIndex(0);
            }, 0);
            return allCards.length;
          }
          return prev + 1;
        });
      }, 3000);
    }, 5000);
  };

  return (
    <div className="all">
      
        <Navbar navLinks={navLinks} />

      {/* Section Héro avec image statique */}
      <div 
        className="hero-section" 
        style={{ 
          backgroundImage: `url(${mockupImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Overlay sombre */}
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1> <span className="name"> Créez une première impression mémorable</span> </h1>
          <p className="slogan">
           <span className="name">  Concevez des cartes de visite qui reflètent votre identité
            professionnelle.</span>
          </p>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Recherchez un design, un métier, un style..."
            />
            <button>Rechercher</button>
          </div>
        </div>
      </div>

      {/* Nouveau carousel infini avec défilement horizontal et effet de zoom */}
      <div className="section recent-cards-section">
        <h1>Cartes de visite les plus récentes</h1>
        
        <div className="card-carousel-container">
          <div className="carousel-wrapper">
            <div 
              className="cards-container"
              ref={carouselRef}
              style={{ 
                transform: `translateX(-${currentIndex * 320}px)`,
                transition: currentIndex >= allCards.length * 2 ? 'none' : 'transform 0.5s ease-in-out'
              }}
            >
              {duplicatedCards.map((card, index) => {
                // Calculer la distance par rapport à la position centrale
                const adjustedIndex = index % allCards.length;
                const distanceFromCenter = Math.abs(adjustedIndex - (currentIndex % allCards.length));
                const scaleValue = 1 - (distanceFromCenter * 0.15);
                const opacityValue = 1 - (distanceFromCenter * 0.3);
                
                return (
                  <div 
                    key={`${card.id}-${index}`}
                    className="card-item"
                    style={{
                      transform: `scale(${Math.max(0.7, scaleValue)})`,
                      opacity: Math.max(0.3, opacityValue),
                      zIndex: 12 - distanceFromCenter
                    }}
                  >
                    <Link to="/explore">
                      <img src={card.image} alt={card.alt} />
                    </Link>
                    <div className="card-details">
                      <h3>{card.title}</h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Indicateurs de points */}
          <div className="carousel-indicators">
            {allCards.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === (currentIndex % allCards.length) ? 'active' : ''}`}
                onClick={() => handleIndicatorClick(index)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Section des avis des utilisateurs */}
      <div className="section user-reviews-section">
        <h1>Commentaires des Clients </h1>
        <div className="review-list">
          <div className="review-item">
            <div className="review-header">
              <img src={avatar1} alt="Avatar utilisateur" />
              <h4>Sophie L.</h4>
            </div>
            <p className="review-text">
              "L'outil de création est incroyablement simple à utiliser et les
              designs sont superbes. J'ai reçu mes cartes en un temps record !"
            </p>
          </div>
          <div className="review-item">
            <div className="review-header">
              <img src={avatar2} alt="Avatar utilisateur" />
              <h4>Marc D.</h4>
            </div>
            <p className="review-text">
              "J'adore le large choix de modèles. J'ai pu créer une carte unique
              qui correspond parfaitement à mon entreprise."
            </p>
          </div>
          <div className="review-item">
            <div className="review-header">
              <img src={avatar3} alt="Avatar utilisateur" />
              <h4>Laura P.</h4>
            </div>
            <p className="review-text">
              "La qualité d'impression est exceptionnelle. Je recommande
              vivement ce site à tous mes contacts."
            </p>
          </div>
        </div>
      </div>

      {/* Section Newsletter */}
      <div className="section newsletter-section">
        <div className="newsletter-content">
          <h1>Actualites</h1>
          <p>
            Abonnez-vous à notre newsletter pour recevoir les dernières
            nouveautés et offres exclusives.
          </p>
          <div className="newsletter-form">
            <input type="email" placeholder="Entrez votre adresse e-mail" />
            <button>S'abonner</button>
          </div>
        </div>
      </div>

      {/* Section de comparaison des offres */}
      <div className="section offers-comparison-section">
        <h1>Offres Concurrentielles </h1>
        <div className="comparison-table">
          <div className="offer-column standard-user">
            <h3>Utilisateur Standard</h3>
            <ul>
              <li>Accès aux modèles gratuits</li>
              <li>Impression de qualité standard</li>
              <li>Support e-mail</li>
              <li>
                <span className="unavailable">Sauvegarde des projets</span>
              </li>
            </ul>
          </div>
          <div className="offer-column loggedin-user">
            <h3>Utilisateur Connecté</h3>
            <ul>
              <li>Accès à tous les modèles (gratuits et premium)</li>
              <li>Options de papier et finitions premium</li>
              <li>Support prioritaire</li>
              <li>Sauvegarde de vos projets</li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default HomePage;