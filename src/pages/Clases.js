import React from 'react';
import { HashLink } from "react-router-hash-link";
import CursoCard from '../components/minicomponents/CursoCard';
import { filtrarEntradas } from "../helpers/filtrarEntradas";
import myDataCursos from '../helpers/myDataCursos';

const Clases = (props) => {
    return(
       
        <main>

            <div className="first-container">


                <div className="container-blog">
                    

                    <p className="title" id="hashtags">Quiero aprender
                        <button onClick={filtrarEntradas} className="btn-hashtag">todo</button>
                        <button onClick={filtrarEntradas} className="btn-hashtag">#música</button>
                        <button onClick={filtrarEntradas} className="btn-hashtag">#danza</button>
                        <button onClick={filtrarEntradas} className="btn-hashtag">#canto</button>
                    </p> 
                    
                    <div className="container-blog-cards">   
                        {
                            myDataCursos.map(el => <CursoCard
                                key={el.codigo}
                                codigo= {el.codigo}
                                curso={el.curso}
                                descripcion={el.descripcion}
                                link={el.linkTo}
                                foto={el.foto}
                                hashtag={el.hashtag}
                            />)
                        }

                    </div>
                    
                    
                    
                    
                </div>
                

            </div>
         
        </main>
        
    
    );
}

  
export default Clases;