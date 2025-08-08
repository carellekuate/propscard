import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EditPage from './pages/EditPage/EditPage';
import PrintOptionPage from './pages/EditPage/PrintOptionPage';
import CheckoutPage from './pages/EditPage/CheckoutPage'; // Import manquant ajouté

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EditPage />} />
        <Route path="/print-options" element={<PrintOptionPage />} />
        <Route path="/checkout" element={<CheckoutPage />} /> {/* Balise Route corrigée */}
      </Routes>
    </Router>
  );
}

export default App;