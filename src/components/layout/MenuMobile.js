import React from 'react';
import { NavLink } from "react-router-dom";


const MenuMobile = (props) => {


    const closeModal = () => {
        
        document.querySelector("#menu-mobile").classList.remove("menu-mobile-active");
        document.querySelector("#nav-mobile").classList.remove("nav-mobile-active");
        
    }
    

    return(

        <>

        <div className="menu-mobile" id="menu-mobile">

            <div className="container-menu-btn">
                <button id="btn-menu" onClick={closeModal}><i className="fas fa-times"></i></button>
            </div>


            



        </div>

            <nav className="nav-mobile" id="nav-mobile">

                <NavLink to="/" onClick={closeModal}>INICIO</NavLink>
                <NavLink to="/clases" onClick={closeModal}>CLASES</NavLink>
                <NavLink to="/staff" onClick={closeModal}>STAFF</NavLink>
                <NavLink to="/contacto" onClick={closeModal}>CONTACTO</NavLink>
                
            </nav>
        </>
        
        
        
    );
}

  
export default MenuMobile;