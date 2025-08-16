// src/pages/AboutPage/AboutPage.js
import React from 'react';
import './AboutPage.css';
// Importation des liens de navigation
import { navLinks } from '../constants/NavLinks';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';


function AboutPage() {
  return (
    <div className="about-page">
        <header>
                <Navbar navLinks={navLinks} />
              </header>

      {/* Section Héro */}
      <div className="about-hero">
        <div className="hero-content">
          <h1 className='hero-title'>À Propos de PropCards</h1>
          <p className='hero-subtitle'>Votre partenaire de confiance pour des cartes de visite exceptionnelles</p>
        </div>
      </div>

      {/* Section Notre Mission */}
      <div className="mission-section">
        <div className="mission-content">
          <div className="mission-text">
            <h2>Notre Mission</h2>
            <p>
              Chez MK Production, nous croyons que chaque professionnel mérite une carte de visite 
              qui reflète parfaitement son identité et son expertise. Notre mission est de démocratiser 
              l'accès à des designs de qualité professionnelle, en proposant une plateforme intuitive 
              et des services d'impression premium.
            </p>
            <p>
              Nous combinons technologie innovante et savoir-faire artisanal pour offrir des cartes 
              qui ne sont pas seulement des outils de communication, mais de véritables extensions 
              de votre image professionnelle.
            </p>
          </div>
          <div className="mission-image"></div>
        </div>
      </div>

      {/* Section Notre Histoire */}
      <div className="history-section">
        <div className="history-timeline">
          <div className="timeline-item">
            <div className="timeline-year">2018</div>
            <div className="timeline-content">
              <h3>Fondation de MK Production</h3>
              <p>Lancement avec une vision simple : rendre le design professionnel accessible à tous.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-year">2020</div>
            <div className="timeline-content">
              <h3>Plateforme en ligne</h3>
              <p>Développement de notre plateforme web avec éditeur de cartes intégré.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-year">2022</div>
            <div className="timeline-content">
              <h3>Expansion internationale</h3>
              <p>Livraison dans plus de 15 pays avec des partenaires locaux.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-year">2024</div>
            <div className="timeline-content">
              <h3>Innovation continue</h3>
              <p>Lancement de notre application mobile et de nouvelles finitions premium.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Section Notre Équipe */}
      <div className="team-section">
        <h2>Rencontrez Notre Équipe</h2>
        <p className="section-subtitle">Des passionnés du design et de l'impression</p>
        
        <div className="team-members">
          <div className="team-member">
          
            <p>Fondatrice & Directrice Créative</p>
            <div className="member-bio">
              Designer graphique de formation, Marie a travaillé 10 ans dans l'industrie 
              de l'impression avant de créer MK Production.
            </div>
          </div>
          
          <div className="team-member">
           
            <h3>Thomas Martin</h3>
            <p>Responsable Technique</p>
            <div className="member-bio">
              Expert en développement web, Thomas transforme nos visions créatives 
              en réalité numérique fluide et intuitive.
            </div>
          </div>
          
          <div className="team-member">
            <h3>Sophie Leroy</h3>
            <p>Chef de Production</p>
            <div className="member-bio">
              Avec 15 ans d'expérience dans l'impression, Sophie veille à ce que chaque carte 
              réponde à nos standards de qualité exceptionnels.
            </div>
          </div>
        </div>
      </div>

      {/* Section Nos Valeurs */}
      <div className="values-section">
        <h2>Nos Valeurs Fondamentales</h2>
        
        <div className="values-grid">
          <div className="value-card">
            <div className="value-icon">
             
            </div>
            <h3>Excellence</h3>
            <p>Nous ne transigeons pas sur la qualité des matériaux et de l'impression.</p>
          </div>
          
          <div className="value-card">
            <div className="value-icon">
           
            </div>
            <h3>Innovation</h3>
            <p>Nous repoussons constamment les limites du design et de la technologie.</p>
          </div>
          
          <div className="value-card">
            <div className="value-icon">
            
            </div>
            <h3>Écologie</h3>
            <p>Nous utilisons des matériaux recyclés et des encres végétales.</p>
          </div>
          
          <div className="value-card">
            <div className="value-icon">
            
            </div>
            <h3>Satisfaction Client</h3>
            <p>Votre réussite est notre priorité absolue.</p>
          </div>
        </div>
      </div>

      {/* Section Chiffres Clés */}
      <div className="stats-section">
        <div className="stats-container">
          <div className="stat-item">
            <div className="stat-number">50,000+</div>
            <div className="stat-label">Clients Satisfaits</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">250+</div>
            <div className="stat-label">Modèles Uniques</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">98%</div>
            <div className="stat-label">Taux de Satisfaction</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">15</div>
            <div className="stat-label">Pays Desservis</div>
          </div>
        </div>
      </div>

     
      <Footer />
    </div>
  );
}

export default AboutPage;