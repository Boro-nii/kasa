import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter as Routeur, Routes, Route } from 'react-router-dom';

import Error from './components/Error';
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Informations from './pages/Informations';
import Logement from './pages/Logement';

import './index.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Routeur>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/logement/:id' element={<Logement/>} />
        <Route path="/informations" element={<Informations/>} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </Routeur>
  </React.StrictMode>
);

