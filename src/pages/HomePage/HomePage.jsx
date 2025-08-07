// Importation du style de la page
import "./HomePageStyles.css";

// Importation de l'image d'arrière-plan
import heroBackground from "../../assets/images/heroBackground.webp";

// Importation des images de cartes
import card1 from "../../assets/images/Card.webp";

// Importations des composantes
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";

// Importation des avatars pour les avis
import avatar1 from "../../assets/images/userImage.png";

// Importation des liens de navigation
import { navLinks } from "../../constants/NavLinks";

function HomePage() {
  return (
    <div className="all">
      <header>
        <Navbar navLinks={navLinks} />
      </header>

      {/* Section Héro */}
      <div
        className="hero-section"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="hero-content">
          <h1>Créez une première impression mémorable</h1>
          <p className="slogan">
            Concevez des cartes de visite qui reflètent votre identité
            professionnelle.
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

      {/* Section des cartes les plus récentes */}
      <div className="section recent-cards-section">
        <h2>Cartes de visite les plus récentes</h2>
        <div className="card-list">
          <div className="card-item">
            <img src={card1} alt="Carte de visite récente 1" />
            <div className="card-details">
              <h3>Design minimaliste noir</h3>
              <p>Par Jean Dupont</p>
            </div>
          </div>
          <div className="card-item">
            <img src={card1} alt="Carte de visite récente 2" />
            <div className="card-details">
              <h3>Design créatif pour artiste</h3>
              <p>Par Marie Curie</p>
            </div>
          </div>
          <div className="card-item">
            <img src={card1} alt="Carte de visite récente 3" />
            <div className="card-details">
              <h3>Design corporate élégant</h3>
              <p>Par Paul Durand</p>
            </div>
          </div>
        </div>
      </div>

      {/* Section des avis des utilisateurs */}
      <div className="section user-reviews-section">
        <h2>Ce que nos clients disent</h2>
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
              <img src={avatar1} alt="Avatar utilisateur" />
              <h4>Marc D.</h4>
            </div>
            <p className="review-text">
              "J'adore le large choix de modèles. J'ai pu créer une carte unique
              qui correspond parfaitement à mon entreprise."
            </p>
          </div>
          <div className="review-item">
            <div className="review-header">
              <img src={avatar1} alt="Avatar utilisateur" />
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
          <h2>Restez à jour</h2>
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
        <h2>Comparez nos offres</h2>
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
