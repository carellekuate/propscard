// src/pages/ContactPage/ContactPage.js
import React, { useState } from 'react';
import './ContactPage.css';
import { navLinks } from '../constants/NavLinks';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState(null);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulation d'envoi de formulaire
    setFormStatus('loading');
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };
  
  return (
    <div className="contact-page">
      
        <header>
                <Navbar navLinks={navLinks} />
              </header>
      {/* Section Héro */}
      <div className="contact-hero">
        <div className="hero-content">
          <h1 className='hero-title'>Contactez-nous</h1>
          <p className='hero-description'>Nous sommes là pour répondre à toutes vos questions</p>
        </div>
      </div>

      {/* Section Contact */}
      <div className="contact-section">
        <div className="contact-container">
          <div className="contact-info">
            <h2>Informations de contact</h2>
            <p className="contact-description">
              Vous avez des questions sur nos services, nos produits ou vous avez besoin d'assistance ?
              Notre équipe est prête à vous aider. Contactez-nous par téléphone, email ou via le formulaire.
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">
                
                </div>
                <div className="contact-text">
                  <h3>Téléphone</h3>
                  <p>+33 6 12 34 56 78</p>
                  <p>Lundi - Vendredi, 9h - 18h</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                
                </div>
                <div className="contact-text">
                  <h3>Email</h3>
                  <p>contact@Printivaproduction.fr</p>
                  <p>support@Printivaproduction.fr</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                 
                </div>
                <div className="contact-text">
                  <h3>Adresse</h3>
                  <p>123 Avenue des Champs-Élysées</p>
                  <p>75008 Paris, France</p>
                </div>
              </div>
            </div>
            
            <div className="social-media">
              <h3>Suivez-nous</h3>
              <div className="social-icons">
                <a href="#" className="social-icon facebook">f</a>
                <a href="#" className="social-icon twitter">t</a>
                <a href="#" className="social-icon instagram">i</a>
                <a href="#" className="social-icon linkedin">in</a>
              </div>
            </div>
          </div>
          
          <div className="contact-form-container">
            <div className="form-header">
              <h2>Envoyez-nous un message</h2>
              <p>Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais</p>
            </div>
            
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Nom complet</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Adresse email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Sujet</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="submit-btn"
                disabled={formStatus === 'loading'}
              >
                {formStatus === 'loading' ? 'Envoi en cours...' : 'Envoyer le message'}
              </button>
              
              {formStatus === 'success' && (
                <div className="success-message">
                  Votre message a été envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Section Carte */}
      <div className="map-section">
        <div className="map-container">
          <iframe 
            title="Carte de localisation"
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127672.75772082225!2d11.426813614756055!3d3.848032500000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108bcf7a0d9c3f1d%3A0x6b0d2b1e3a2e4b0f!2sYaound%C3%A9%2C%20Cameroun!5e0!3m2!1sfr!2sfr!4v1712953821233!5m2!1sfr!2sfr"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="faq-section">
        <h2>Questions fréquentes</h2>
        <div className="faq-container">
          <div className="faq-item">
            <h3>Quel est le délai de livraison pour les cartes de visite?</h3>
            <p>Le délai standard de livraison est de 3 à 5 jours ouvrables pour la France métropolitaine. Pour les commandes express, nous proposons une livraison en 24h.</p>
          </div>
          
          <div className="faq-item">
            <h3>Puis-je demander un échantillon avant de commander?</h3>
            <p>Oui, nous proposons un kit d'échantillons qui inclut nos différents types de papier et finitions. Vous pouvez le commander sur notre site pour 5€ (frais de port inclus).</p>
          </div>
          
          <div className="faq-item">
            <h3>Quelles sont les options de paiement disponibles?</h3>
            <p>Nous acceptons les cartes bancaires (Visa, Mastercard), PayPal, et les virements bancaires. Toutes les transactions sont sécurisées.</p>
          </div>
          
          <div className="faq-item">
            <h3>Proposez-vous un service de design personnalisé?</h3>
            <p>Absolument! Notre équipe de designers peut créer une carte de visite entièrement personnalisée selon vos besoins. Contactez-nous pour un devis.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ContactPage; 