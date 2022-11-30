import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Import Navigation Component
import Navigation from './navigation/Navigation';
import Speisekarte from './navigation/pages/Speisekarte';
import Kontakt from './navigation/pages/Kontakt';
import Öffnungszeiten from "./navigation/pages/Oeffnungszeiten";
import Galerie from './navigation/pages/Galerie';

function App() {
  return (
    <div className='app'>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/speisekarte" element={<Speisekarte />} />
          <Route path="/kontak" element={<Kontakt />} />
          <Route path="/öffnungszeiten" element={<Öffnungszeiten />} />
          <Route path="/galerie" element={<Galerie />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
