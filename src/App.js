import React from 'react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';

/*--Pages--*/
import Inicio from './pages/Inicio';
import Clases from './pages/Clases';
import Staff from  './pages/Staff';
import Error404 from './pages/Error404';
import Contacto from './pages/Contacto';


import { revealEffect } from './helpers/revealEffect';


import ProfCanto from './pages/Clases/ProfCanto';
import CursoIngresoPcp from './pages/Cursos-ingreso/CursoIngresoPcp';
import ProfUrbanos from './pages/Clases/ProfUrbanos';
import ProfKpop from './pages/Clases/ProfKpop';
import CursoIngresoPd from './pages/Cursos-ingreso/CursoIngresoPd';
import Certificaciones from './pages/Certificaciones';

import StaffCv from './pages/StaffCv';
import CertificacionesId from './pages/CertificacionesId';


function App() {

  revealEffect();




  return (
    <div>
     
        <BrowserRouter>
          

          <Header></Header>

          <div className='container-all'>

            <Routes>
              <Route path="/"  element={<Inicio />} />
              <Route path="/clases"  exact element={<Clases />} />
              <Route path="/staff"  exact element={<Staff />} />
              <Route path="/contacto"  exact element={<Contacto />} />
              

              <Route path="/profesorado-canto-popular"  exact element={<ProfCanto/>} />
              <Route path="/curso-ingreso-pcp"  exact element={<CursoIngresoPcp/>} />
              <Route path="/profesorado-danzas-urbanas"  exact element={<ProfUrbanos />} />
              <Route path="/profesorado-kpop-dance"  exact element={<ProfKpop/>} />
              <Route path="/curso-ingreso-pd"  exact element={<CursoIngresoPd/>} />

              <Route path="/certificaciones"  exact element={<Certificaciones/>} />

              <Route path="/staff/:slug" element={<StaffCv/>}/>

              <Route path="/certificaciones/:idCertificado" element={<CertificacionesId/>}/>
              <Route path='*' element={<Error404/>}/>
            
              

            </Routes>
            

            <Footer></Footer>

            

          </div>

          

        </BrowserRouter>
     
     
     
    </div>
  );
}

export default App;
