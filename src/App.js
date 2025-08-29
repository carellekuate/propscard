// App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { useState, useEffect } from 'react';

// Importation des pages
import HomePage from './pages/HomePage/HomePage';
import ExplorePage from './pages/ExplorePage/ExplorePage';
import EditPage from './pages/EditPage/EditPage';
import PrintOptionPage from './pages/EditPage/PrintOptionPage';
import CheckoutPage from './pages/EditPage/CheckoutPage';
import PaymentMethodPage from './pages/EditPage/PaymentMethodPage';
import TransactionPage from './pages/EditPage/TransactionPage';
// Correction du nom du composant - vérifiez le nom exact du fichier
import PayementConfirmation from './pages/EditPage/PayementConfirmation'; 
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PreviewPage from './components/PreviewPage/PreviewPage';


function App() {
  const [navLinks] = useState([
    { path: "/", nameFr: "Accueil", nameEn: "Home" },
    { path: "/explore", nameFr: "Explorer", nameEn: "Explore" },
    { path: "/about", nameFr: "À propos", nameEn: "About" },
    { path: "/contact", nameFr: "Contact", nameEn: "Contact" }
  ]);

  const [languageUpdate, setLanguageUpdate] = useState(0);
  
  useEffect(() => {
    const handleLanguageChange = () => {
      setLanguageUpdate(prev => prev + 1);
    };
    
    window.addEventListener('languageChange', handleLanguageChange);
    
    return () => {
      window.removeEventListener('languageChange', handleLanguageChange);
    };
  }, []);

  return (
    <LanguageProvider>
      <Router>
        
        <Routes>
          <Route path="/" element={<HomePage key={languageUpdate} />} />
          <Route path="/explore" element={<ExplorePage key={languageUpdate} />} />
          <Route path="/edit" element={<EditPage key={languageUpdate} />} />
          <Route path="/print-options" element={<PrintOptionPage key={languageUpdate} />} />
          <Route path="/checkout" element={<CheckoutPage key={languageUpdate} />} />
          <Route path="/payment-method" element={<PaymentMethodPage key={languageUpdate} />} />
          <Route path="/transaction/:method" element={<TransactionPage key={languageUpdate} />} />
          <Route path="/payment-confirmation" element={<PayementConfirmation key={languageUpdate} />} />
          <Route path="/about" element={<AboutPage key={languageUpdate} />} />
          <Route path="/contact" element={<ContactPage key={languageUpdate} />} />
          <Route path="/preview" element={<PreviewPage key={languageUpdate} />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;