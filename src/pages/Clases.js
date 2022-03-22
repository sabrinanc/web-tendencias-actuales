import React from 'react';
import CursoCard from '../components/minicomponents/CursoCard';
import myDataCursos from '../helpers/myDataCursos';

const Clases = (props) => {
    return(
       
        <main>

            <div className="first-container">


                <div className="container-blog">
                    
     
                    <h2 className='title'>Clases</h2>
                    
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