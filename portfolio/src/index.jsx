import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './AppRouter';
import '../src/index.sass';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <AppRouter />
    <Footer />
  </React.StrictMode>
);
