// Importation des dépendances
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importation des pages
import HomePage from './pages/HomePage/HomePage';
import ExplorePage from './pages/ExplorePage/ExplorePage';
import EditPage from './pages/EditPage/EditPage';
import PrintOptionPage from './pages/EditPage/PrintOptionPage';
import CheckoutPage from './pages/EditPage/CheckoutPage';
import PaymentMethodPage from './pages/EditPage/PaymentMethodPage';
import TransactionPage from './pages/EditPage/TransactionPage';
import PaymentConfirmation from './pages/EditPage/PayementConfirmation';
import AboutPage from './pages/AboutPage';
import  ContactPage from './pages/ContactPage';
import PreviewPage from './components/PreviewPage/PreviewPage';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/edit" element={<EditPage />} />
        <Route path="/print-options" element={<PrintOptionPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/payment-method" element={<PaymentMethodPage />} />
        <Route path="/transaction/:method" element={<TransactionPage />} />
        <Route path="/payment-confirmation" element={<PaymentConfirmation />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/edit" element={<EditPage />} />
        <Route path="/preview" element={<PreviewPage />} />

      </Routes>
    </Router>
  );
}

export default App;