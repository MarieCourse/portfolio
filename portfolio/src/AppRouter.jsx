import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Work from './pages/Work/Work';
import Error from './components/Error/Error';

function AppRouter() {
  return (
    <Routes>
      <Route path="/portfolio/cv_maria_carrera.pdf" />
      <Route path="/portfolio/" element={<Home />} />
      <Route path="/portfolio/home" element={<Home />} />
      <Route path="/portfolio/:id" element={<Work />} />
      <Route path="/portfolio/*" element={<Error />} />
    </Routes>
  );
}

export default AppRouter;
