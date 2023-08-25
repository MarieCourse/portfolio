import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Work from './pages/Work/Work';
import Error from './components/Error/Error';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Error />} />
        <Route path="/work/:id" element={<Work />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
