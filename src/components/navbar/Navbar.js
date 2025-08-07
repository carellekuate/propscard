// Importation des dépendances
import { useState } from "react";

// Importation des icônes
import heartIcon from "../../assets/icons/heart.png";
import cartIcon from "../../assets/icons/cart.png";
import userIcon from "../../assets/icons/user.png";
import logo from "../../assets/icons/cardLogo.png";
import languageIcon from "../../assets/icons/language.png";

// Importation du style
import "./NavbarStyles.css";

const Navbar = ({ navLinks}) => {
  const [isActive, setIsActive] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const [language, setLanguage] = useState("en");

  return (
      <>
          <nav className="navbar">
              <div className="logo-container">
                  <img src={logo} alt="Logo" className="logo-image" />
                  <h1 className="logo">PropCards</h1>
              </div>

              <div className="menu-toggle" onClick={() => setIsActive(!isActive)}>
                  <div className="bar"></div>
                  <div className="bar"></div>
                  <div className="bar"></div>
              </div>

              <ul className={`nav-links ${isActive ? "active" : ""}`}>
                  {navLinks.map((link) => (
                      <li key={link.name} className={activeLink === link.name ? "active" : ""}>
                          <a href={link.path} onClick={() => setActiveLink(link.name)}>
                              {link.name}
                          </a>
                      </li>
                  ))}
              </ul>

              <div className="right-container">
                  <div className="language-switcher">
                      <img src={languageIcon} alt="Language Flag" className="icon" />
                      <select>
                          <option value="en">En</option>
                          <option value="fr">Fr</option>
                      </select>
                  </div>

                  <div className="quick-actions">
                      <img src={userIcon} alt="User" className="icon" />
                      <img src={heartIcon} alt="Like" className="icon" />
                      <img src={cartIcon} alt="Cart" className="icon" />
                  </div>
              </div>
          </nav>
      </>
  );
};

export default Navbar;
