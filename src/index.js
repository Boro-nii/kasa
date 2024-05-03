import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter as Routeur, Routes, Route } from 'react-router-dom';

import Error from './components/Error';

import Layout from './components/Layout';

import Home from './pages/Home';
import Informations from './pages/Informations';
import Logement from './pages/Logement';

import './index.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Routeur>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/logement/:id' element={<Logement/>} />
          <Route path="/informations" element={<Informations/>} />
          <Route path='*' element={<Error />} />
        </Routes>
      </Layout>
    </Routeur>
  </React.StrictMode>
);

