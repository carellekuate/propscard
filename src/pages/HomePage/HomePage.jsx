// Importation du style de la page
import "./HomePageStyles.css";

// Importation de l'image d'arrière-plan
import heroBackground from "../../assets/images/mockup3.jpg";

// Importation des images de cartes
import card1 from "../../assets/images/fab.PNG";
import card2 from '../../assets/images/fb1.PNG';
import card3 from '../../assets/images/fi.PNG';
import card4 from '../../assets/images/fj.PNG';
import card5 from '../../assets/images/fa1.PNG';
import card6 from '../../assets/images/fo.PNG';
import card7 from '../../assets/images/ft.PNG';
import card8 from '../../assets/images/fk.PNG';
import card9 from '../../assets/images/fa2.PNG';
import card10 from '../../assets/images/fs.PNG';
import card11 from '../../assets/images/fe.PNG';
import card12 from '../../assets/images/fg.PNG';

// Importations des composantes
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";

// Importation des avatars pour les avis
import avatar1 from "../../assets/images/fab.PNG";
import avatar2 from '../../assets/images/fb1.PNG';
import avatar3 from '../../assets/images/fi.PNG';

// Importation des liens de navigation
import { navLinks } from "../../constants/NavLinks";
// Importation de Link pour la navigation
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3; // 3 lots de 4 cartes

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

  // Regrouper les cartes en lots de 4
  const cardGroups = [];
  for (let i = 0; i < allCards.length; i += 4) {
    cardGroups.push(allCards.slice(i, i + 4));
  }

  // Fonction pour passer au slide suivant
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  // Fonction pour passer au slide précédent
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  // Défilement automatique
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change de slide toutes les 5 secondes

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="all">
      
        <Navbar navLinks={navLinks} />

      {/* Section Héro avec image statique */}
      <div 
        className="hero-section" 
        style={{ 
          backgroundImage: `url(${heroBackground})`,
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

      {/* Section des cartes les plus récentes avec carrousel */}
      <div className="section recent-cards-section">
        <h1>Cartes de visite les plus récentes</h1>
        <div className="carousel-container">
          <button className="carousel-arrow carousel-arrow-left" onClick={prevSlide}>
            &#10094;
          </button>
          
          <div className="carousel-wrapper">
            <div 
              className="carousel-track" 
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {cardGroups.map((group, groupIndex) => (
                <div key={groupIndex} className="carousel-slide">
                  <div className="card-list">
                    {group.map(card => (
                      <div key={card.id} className="card-item">
                        <Link to="/explore">
                          <img src={card.image} alt={card.alt} />
                        </Link>
                        <div className="card-details">
                          <h3>{card.title}</h3>
                          <p></p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button className="carousel-arrow carousel-arrow-right" onClick={nextSlide}>
            &#10095;
          </button>
        </div>
        
        {/* Indicateurs de slide */}
        <div className="carousel-indicators">
          {cardGroups.map((_, index) => (
            <button
              key={index}
              className={`carousel-indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            ></button>
          ))}
        </div>
      </div>

      {/* Le reste du code reste inchangé */}
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