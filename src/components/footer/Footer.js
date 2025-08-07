import React from 'react';
import './FooterStyles.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section about">
                        <h2>À Propos de Nous</h2>
                        <p>Nous aidons les professionnels à créer des cartes de visite uniques et mémorables. Notre outil de création facile à utiliser vous permet de concevoir une carte qui vous ressemble.</p>
                    </div>
                    <div className="footer-section links">
                        <h2>Liens Utiles</h2>
                        <ul>
                            <li><a href="/creation-de-cartes">Création de Cartes</a></li>
                            <li><a href="/tarifs">Tarifs</a></li>
                            <li><a href="/faq">FAQ</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </div>
                    <div className="footer-section social">
                        <h2>Suivez-nous</h2>
                        <div className="social-links">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} MonSiteDeCartesDeVisite. Tous droits réservés.</p>
            </div>
        </footer>
    );
};

export default Footer;