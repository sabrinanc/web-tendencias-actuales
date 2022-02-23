import React from 'react';
import { useParams } from "react-router-dom";
import myDataStaff from "../helpers/myDataStaff";



const StaffCv = (props) => {

    const { slug } = useParams();
    const profSelected = myDataStaff.find(p => p.slug === slug)

    
    return(
       
        <main>


            <div className="first-container">


                <div className="container">

                     <img  src={`/${profSelected.fotoPerfil}`} alt={profSelected.nombre} className="perfil-cv"/>
                    <h1 className="title"><b>{profSelected.nombre}</b></h1>
                    
                    <p dangerouslySetInnerHTML={{__html: profSelected.cv}}></p>

                    
    
                    <iframe width="100%" height="285" src={profSelected.video} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    
                    <br></br><br></br>
                    <h2 className="title">"{profSelected.frase}"</h2>
                </div>
                

            </div>

            <img src={profSelected.fotoBanner} alt="banner" className="img-br"></img>

           
            
         
        </main>
        
    
    );
}

  
export default StaffCv;