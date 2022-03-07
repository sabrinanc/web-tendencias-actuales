import React from 'react';
import { NavLink } from "react-router-dom";
import MenuMobile from "./MenuMobile";


const Header = (props) => {

    const openModal = () => {
        
        document.querySelector("#menu-mobile").classList.add("menu-mobile-active");
        document.querySelector("#nav-mobile").classList.add("nav-mobile-active");
        
    }

    return(
        <div>
            <MenuMobile></MenuMobile>

            <div className="container-menu-btn">
                <button id="btn-menu" onClick={openModal}><i className="fas fa-bars"></i></button>
            </div>
            
            <div className="header-container-bg">   
            </div>
                    
            <div className="header-container">
                    <div className="header-container-links   logo-mobile">
                        <NavLink to="/"><img alt="logo" src="/img/logo-ta.png" className="logo"></img></NavLink>
                    </div>
            </div>
            
            <header className="header-web">

                <nav>

                    <div className="header-container-links">
                 
                        <NavLink to="/">INICIO</NavLink>
                        <NavLink to="/clases">CLASES</NavLink>
                    </div>
                    <div className="header-container-links">
                        <NavLink to="/"><img alt="logo" src="/img/logo-ta.png" className="logo"></img></NavLink>
                    </div>

                    <div className="header-container-links">
                        <NavLink to="/staff">STAFF</NavLink>
                        <NavLink to="/contacto">CONTACTO</NavLink>
                    </div>
                    
                    
                    
                </nav>
            </header>


        </div>
        
        
    );
}

  
export default Header;