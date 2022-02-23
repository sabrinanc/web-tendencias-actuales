import React from 'react';
import { HashLink } from "react-router-hash-link";

const CursoCard = (props) => {

  let  {link, curso, foto, hashtag, descripcion} = props;
   

    return(
        
        <div className="blog-card"  hashtag={hashtag}>

            <HashLink smooth to={link}>
                <div className="container-blog-img">
                    <img src={foto} alt={curso}/>
                </div>
                <h3 className="title">{curso}</h3>
            </HashLink>
            <p>{descripcion}</p>
            <HashLink smooth to={link} className="a-btn">Más info...</HashLink>
        </div> 
    );
}

  
export default CursoCard;