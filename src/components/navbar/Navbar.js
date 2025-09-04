// Navbar.js
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";

// Importation des icônes
import userIcon from "../../assets/icons/user.png";
import logo from "../../assets/icons/cardLogo.png";
import languageIcon from "../../assets/icons/language.png";

// Importation du style
import "./NavbarStyles.css";

const Navbar = ({ navLinks }) => {
  const [isActive, setIsActive] = useState(false);
  const location = useLocation();
  const { language, changeLanguage } = useLanguage();
  const [cartCount, setCartCount] = useState(0);
  const [showOrderCount, setShowOrderCount] = useState(false);
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);

  // Fonction pour simuler la récupération du nombre de commandes
  const fetchOrderCount = () => {
    const randomCount = Math.floor(Math.random() * 100) + 1;
    setCartCount(randomCount);
    setShowOrderCount(true);
    
    setTimeout(() => {
      setShowOrderCount(false);
    }, 3000);
  };

  // Fonction pour changer la langue
  const handleLanguageChange = (lang) => {
    changeLanguage(lang);
    setShowLanguageDropdown(false);
    // Forcer le re-rendu de toute l'application
    window.dispatchEvent(new Event('languageChange'));
  };

  // Fonction pour basculer l'affichage du menu déroulant des langues
  const toggleLanguageDropdown = () => {
    setShowLanguageDropdown(!showLanguageDropdown);
  };

  // Traduction des liens de navigation
  const getTranslatedNavLinks = () => {
    if (language === 'fr') {
      return navLinks.map(link => ({
        ...link,
        name: link.nameFr || link.name
      }));
    } else {
      return navLinks.map(link => ({
        ...link,
        name: link.nameEn || link.name
      }));
    }
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo-image" />
          <h1 className="logo">Printiva</h1>
        </div>

        <div className="menu-toggle" onClick={() => setIsActive(!isActive)}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        <ul className={`nav-links ${isActive ? "active" : ""}`}>
          {getTranslatedNavLinks().map((link) => (
            <li 
              key={link.name} 
              className={location.pathname === link.path ? "active" : ""}
            >
              <a href={link.path}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="right-container">
          <div className="language-switcher">
            <div className="language-icon-container" onClick={toggleLanguageDropdown}>
              <img src={languageIcon} alt="Language" className="icon" />
              <span className="current-language">
                {language === 'fr' ? 'FR' : 'EN'}
              </span>
              {showLanguageDropdown && (
                <div className="language-dropdown">
                  <div 
                    className={`language-option ${language === 'fr' ? 'selected' : ''}`}
                    onClick={() => handleLanguageChange('fr')}
                  >
                    Français
                  </div>
                  <div 
                    className={`language-option ${language === 'en' ? 'selected' : ''}`}
                    onClick={() => handleLanguageChange('en')}
                  >
                    English
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="quick-actions">
            <img src={userIcon} alt="User" className="icon" />
          
            <div className="cart-container" onClick={fetchOrderCount}>
              {showOrderCount && (
                <div className="order-count-popup">
                  {cartCount} {language === 'fr' ? 'personnes ont commandé des cartes' : 'people ordered cards'}
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;