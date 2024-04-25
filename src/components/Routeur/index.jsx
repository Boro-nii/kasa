import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Error from '../Error';
import Header from '../Header';
import Footer from '../Footer';

import Home from '../../pages/Home';
import Information from '../../pages/Information';
import Logement from '../../pages/Logement';

function Routeur(){
    return(
        <BrowserRouter>

        <Header />
  
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/logement/:id' element={<Logement/>} />
          <Route path="/informations" element={<Information/>} />
          <Route path='*' element={<Error />} />
        </Routes>
  
        <Footer />
  
      </BrowserRouter>
    )
}

export default Routeur