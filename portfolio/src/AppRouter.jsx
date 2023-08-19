import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/home';
import Error from './components/Error/Error';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Work from './pages/Work/Work';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
        <Route path="/fiches/:id" element={<Work />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default AppRouter;
