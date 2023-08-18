import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/home';
import Error from './components/Error/Error';
import Footer from './components/Footer/Footer';
import FicheLogement from './pages/Fiche Logement/fiche-logement';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Error />} />
        <Route path="/fiches/:id" element={<FicheLogement />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default AppRouter;
