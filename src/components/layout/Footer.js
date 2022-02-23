import React from 'react';
import { HashLink } from "react-router-hash-link";
import myData from "../../helpers/myData";

const Footer = (props) => {

    return(
        <footer id="contacto">
           
            <div className="footer-column  reveal">
                <h3 className="title">Contactanos</h3>
                <p>
                    <a href={myData["wa-info"]} target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-whatsapp"></i> 15-4174-9292</a> <br></br>
                    <span className='m'>tendenciasactuales.ar@gmail.com</span>
                    <br></br>  
                </p>
                
                <h3 className="title">Sede</h3>
                <p>San Justo Centro, Prov. de Buenos Aires</p>
            </div>

            <div className="footer-column  reveal">
                <h3 className="title">Seguinos</h3>
                <p>Academia de danzas</p>
                <div className="container-social-media">
                    <a href={myData["ig-baile"]} target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                    <a href={myData["fb-baile"]} target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                    <a href={myData["yt-baile"]} target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>
                </div>
                
                <p>Academia de música y canto</p>
                <div className="container-social-media">
                    <a href={myData["ig-canta"]} target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                    <a href={myData["fb-canta"]} target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                    <a href={myData["yt-canta"]}target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>
                </div>
            </div>

            <div className="footer-column  reveal">
                <h3 className="title">Inscribite</h3>
                
                <p>
                    <a href={myData["form-inscripcion"]} target="_blank" rel="noreferrer">Formulario de inscripción</a> <br></br>
                    <HashLink smooth to="/curso-ingreso-pcp#">Curso de ingreso P.C.P</HashLink> <br></br>
                    <HashLink smooth to="/curso-ingreso-pd#">Curso de ingreso P.D</HashLink> <br></br>
                </p>

                <h3 className="title">Certificaciones</h3>
                <p>
                    <HashLink smooth to="/certificaciones#">Verificar un certificado</HashLink> 
                </p>
                
            </div>



        </footer>
        
        
    );
}

  
export default Footer;