import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Work from './pages/Work/Work';
import Error from './components/Error/Error';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/cv_maria_carrera.pdf" />
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/work/:id" element={<Work />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
