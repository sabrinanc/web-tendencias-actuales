import React from 'react';
import { validarCertificados } from "../helpers/validarCertificados";
import '../styles/certificaciones.css'

const Certificaciones = (props) => {
    return(
       
        <main>

            <div className="first-container">

            <div >

                <div className="contenedor-autenticacion">
                <div className="contenedor-input" id="contenedor-input">
                    <div className="contenedor-logo-input">
                        <img className="logo-input" alt='logo' src="http://drive.google.com/uc?export=view&id=1jT41KpiJPgMEwio2Ol7-Nyn5o7J78auW"/>
                    </div>
                    <p className="verificaciones-titulo">Verificar un certificado</p>
                    <label htmlFor="id-certificado">ID del certificado</label>
                    <input type="text" id="id-certificado" className="certificado-input" />
                    <p className="info-id">El ID de certificado aparece en la parte inferior de los certificados.</p>
                    <p className="error-id  novisible" id="error-id">ID no encontrado. Vuelve a intentar</p>
                    <button className="btn-certificados" id="btn-validar-certificado" onClick={validarCertificados}>Validar</button>
                    
                </div>
                <div className="contenedor-respuesta-verificacion  novisible" id="contenedor-respuesta-verificacion">
                    <div className="contenedor-respuesta-titulo">
                        <div className="contenedor-img-certificado">
                            <img className="icono-certificado" alt="certificado" src="http://drive.google.com/uc?export=view&id=1K9hIE3ZEKLecflk9Zjjya-Kg9VCpzkU0" />
                        </div>
                        <div>
                            <p><b>Certificado válido</b></p>
                            <p id="id-certificado-verificado"></p>
                        </div>
                    </div>
                    <div className="datos-certificado-verificado">
                        <p>Se certifica que <b id="certifica-nombre"></b></p>
                        <p id="tipo-certificado"></p>
                        <p><b id="certifica-materia">"Introducción al lenguaje musical"</b></p>
                        <p id="certifica-fecha"></p>
                        <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none"/><path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/></svg>
                        <button className="btn-certificados" id="btn-verificar-otro">Verificar otro</button>
                    </div>
                   
                </div>  
            </div>

            </div>
                

            </div>
         
        </main>
        
    
    );
}

  
export default Certificaciones;