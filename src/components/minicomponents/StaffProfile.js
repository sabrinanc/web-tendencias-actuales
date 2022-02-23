import React from 'react';
import { HashLink } from "react-router-hash-link";

const StaffProfile = (props) => {

  let  {link, nombre, foto, cargo} = props;
   

    return(
        
        <HashLink smooth to={link}>
            <div className="section-banner-card-2    reveal">
                <img  src={foto} alt={nombre}/>
                <h3 className="title">{props.nombre}</h3>
                <p dangerouslySetInnerHTML={{__html: cargo}}></p>
            </div>
        </HashLink>
        
    );
}

  
export default StaffProfile;