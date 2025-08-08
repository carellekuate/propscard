// Importation des dépendances
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importation des pages
import HomePage from './pages/HomePage/HomePage';
import ExplorePage from './pages/ExplorePage/ExplorePage';
import EditPage from './pages/EditPage/EditPage';
import PrintOptionPage from './pages/EditPage/PrintOptionPage';
import CheckoutPage from './pages/EditPage/CheckoutPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/edit" element={<EditPage />} />
        <Route path="/print-options" element={<PrintOptionPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </Router>
  );
}

export default App;