import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { HashLink } from "react-router-hash-link";
import myData from "../../helpers/myData";

const ProfUrbanos = (props) => {
    
    return(
       
        <main>


            <div className="first-container">


                <div className="container    reveal">

                    <h1 className="title">Profesorado de<br></br><b>danzas urbanas</b></h1>
                    <p>
                    Adquirí la técnica necesaria para crear tus propias coreografías y la formación pedagógica para dictar clases en distintos contextos y para diferentes grupos.
                    Obtené tu título intermedio al finalizar cada año.     
                    </p>
                    
                    <p>
                        <i className="fa-solid fa-graduation-cap"></i> Título: <b>PROFESOR SUPERIOR DE DANZAS URBANAS</b><br></br>
                        
                        <i className="fa-solid fa-calendar-check"></i> Duración: <b>3 AÑOS (6 cuatrimestres)</b> <br></br>
                        <i className="fa-solid fa-desktop"></i> Modalidad: <b>SEMIPRESENCIAL</b>
                        
                    </p>

                    <HashLink smooth to="/profesorado-danzas-urbanas#propuesta">Propuesta</HashLink>
                    <HashLink smooth to="/profesorado-danzas-urbanas#plan-de-estudios"> | Plan de estudios</HashLink>
                    <HashLink smooth to="/profesorado-danzas-urbanas#staff"> | Staff</HashLink>
                    <HashLink smooth to="/profesorado-danzas-urbanas#faq"> | Preguntas frecuentes</HashLink>

                </div>
                

            </div>

            <img src="/img/portada-profesorado-danzas-urbanas.jpg" alt="banner" className="img-br"></img>

            <div className="middle-container" id="propuesta">

                <div className="container">

                    <div className="item-info  reveal">
                        <h3 className="title"><i className="fas fa-video"></i> Clases mixtas</h3>
                        <p>Clases presenciales semanales con tus profesores en la sede San Justo Centro. Clase teórica virtual por Zoom.</p>
                    </div>
                    <br></br>
    
                    <div className="item-info  reveal">
                        <h3 className="title"><i className="fas fa-cloud-download-alt"></i> Material descargable</h3>
                        <p>Tutoriales, cuadernillos, guías de estudio y más material completamente descargable para complementar tu aprendizaje.</p>
                    </div>
                    <br></br>
                    <div className="item-info  reveal">
                        <h3 className="title"><i className="fas fa-trophy"></i> Certificados digitales</h3>
                        <p>Al finalizar cada materia y cumplir con las instancias de evaluación, obtenés tu certificado digital de aprobación.</p>
                    </div>
                    
                    
                </div>
                

            </div>

            <br></br>
            <br></br>
            <br></br>
            <img src="/img/portada-clases-hh.jpg" alt="banner" className="img-br"></img>


            <div className="middle-container" id="plan-de-estudios">

                <div className="container  reveal">

                    <h2 className="title">Plan de estudios</h2>
                    <p>Nuestro plan de estudios está completamente adaptado a las necesidades actuales. 
                        Vas a aprender lo que verdaderamente necesitás para llevar adelante la profesión.
                    </p>

                    <details id="instancias-examen">

                        <summary>
                           <i className="fa-solid fa-book"></i> Primer año
                        </summary>

                        <p>
                            
                            <ul>
                                <li>☑ Hip Hop I - Historia, técnica y coreografía</li>
                                <li>☑ Reggaetón I - Historia, técnica y coreografía</li>
                                <li>☑ Electrodance I - Técnica y coreografía</li>
                                <li>☑ Commercial Dance I - Técnica y coreografía</li>
                                <li>☑ Introducción a la Rítmica</li>
                                <li>☑ Metodología I - Fitness grupal </li>
                                <li>☑ Pedagogía y Liderazgo I</li>
                                <li>☑ Prácticas docentes I - Instructorado de Reggaetón y Hip-Hop</li>
                            </ul>

                            <i className="fa-solid fa-graduation-cap"></i> Título: <b>INSTRUCTOR DE REGGAETÓN Y HIP-HOP DANCE</b><br></br>

                        </p>

                    </details>

                    <details id="instancias-examen">

                        <summary>
                           <i className="fa-solid fa-book"></i> Segundo año
                        </summary>

                        <p>
                            
                            <ul>
                                <li>☑ Hip Hop II - Técnica y coreografía</li>
                                <li>☑ Reggaetón II - Técnica y coreografía</li>
                                <li>☑ Electrodance II - Historia, técnica y coreografía</li>
                                <li>☑ Commercial Dance II - Historia, técnica y coreografía</li>
                                <li>☑ Rítmica I</li>
                                <li>☑ Metodología II - Grupos infantiles</li>
                                <li>☑ Herramientas complementarias I - Manejo de la voz, edición audiovisual y conexiones de audio</li>
                                <li>☑ Composición coreográfica</li>
                                <li>☑ Prácticas docentes II - Profesor elemental de Danzas Urbanas</li>
                            </ul>

                            <i className="fa-solid fa-graduation-cap"></i> Título: <b>PROFESOR ELEMENTAL DE DANZAS URBANAS</b><br></br>

                        </p>

                    </details>

                    <details id="instancias-examen">

                        <summary>
                           <i className="fa-solid fa-book"></i> Tercer año
                        </summary>

                        <p>
                            
                            <ul>
                                <li>☑ Hip Hop III - Técnica y coreografía</li>
                                <li>☑ Reggaetón III - Técnica y coreografía</li>
                                <li>☑ Electrodance III - Técnica y coreografía</li>
                                <li>☑ Commercial Dance III - Técnica y coreografía</li>
                                <li>☑ Rítmica II</li>
                                <li>☑ Introducción a la anatomía humana</li>
                                <li>☑ Pedagogía y Liderazgo II</li>
                                <li>☑ Imagen y desarrollo profesional</li>
                                <li>☑ Prácticas docentes II - Profesor superior de Danzas Urbanas</li>
                            </ul>

                            <i className="fa-solid fa-graduation-cap"></i> Título: <b>PROFESOR SUPERIOR DE DANZAS URBANAS</b><br></br>

                        </p>

                    </details>

                </div>

             

            </div>

            <img src="/img/portada-clases-reggaeton.jpg" alt="banner" className="img-br"></img>

            <div className="container-blog" id="staff">
        
                    <p className="title">STAFF
                        
                    </p> 
                    
                    <div className="container-blog-cards">

                        
                        <HashLink smooth to="/staff/florencia-curiel#">
                        <div className="section-banner-card-2    reveal">
                            <img  src="img/STAFF PD Flor.png" alt="florencia curiel"/>
                            <h3 className="title">Florencia Curiel</h3>
                            <p>Prof. superior de danzas urbanas. <br/>Profesora de reggaetón
                            </p>
                        </div>
                        </HashLink>

                        <HashLink smooth to="/staff/santiago-curiel#">
                        <div className="section-banner-card-2    reveal">
                            <img  src="img/STAFF PD Santi.png" alt="santiago curiel"/>
                            <h3 className="title">Santiago Curiel</h3>
                            <p>Prof. superior de danzas urbanas. <br/>Profesor de hip-hop dance y electrodance
                            </p>
                        </div>
                        </HashLink>

                      
                        <HashLink smooth to="/staff/sabrina-casalini#">
                        <div className="section-banner-card-2    reveal">
                            <img  src="img/STAFF PD SabriB&W.png" alt="sabrina casalini"/>
                            <h3 className="title">Sabrina Casalini</h3>
                            <p>Prof. superior de danzas urbanas.
                            <br/> Prof. de Commercial Dance
                            <br/> Prof. de teoría (prof danzas)
                            </p>
                        </div>
                        </HashLink>

                        <HashLink smooth to="/staff/monica-espinoza#">
                        <div className="section-banner-card-2    reveal">
                            <img  src="img/STAFF PCP MoniB&W.png" alt="monica espinoza"/>
                            <h3 className="title">Mónica Espinoza</h3>
                            <p>Prof. superior de piano, solfeo y teoría. <br/>Lic. en Psicología U.B.A.<br/>Profesora de danzas.
                            </p>
                        
                        </div>
                        </HashLink>


                    </div>
                    
                    
                    
                    
                </div>


            <section id="faq">

                <div className="container">
                    <h2 className="title">Preguntas frecuentes</h2>

                    <details>

                        <summary>
                            	<i class="fa-solid fa-angles-right"></i> ¿Cómo me inscribo?
                        </summary>

                        <p>
                            Podés realizar la inscripción completando tus datos en esta página: <br/>
                            <a className="a-btn" href={myData["form-inscripcion"]} target="_blank" rel="noreferrer">Formulario de inscripción</a>
                        </p>
                        
                    </details>

                    <details>

                        <summary>
                            <i class="fa-solid fa-angles-right"></i> ¿Tengo que realizar un examen de ingreso?
                        </summary>

                        <p>
                            Sí, tenés que realizar un examen de ingreso para que podamos conocerte. Este examen es únicamente nivelatorio y <b>no excluyente. </b>
                            Las pautas del examen se encuentran en un mini curso de ingreso. Se realiza completamente online y sólo te llevará una hora.<br/>
                            <HashLink smooth to="/curso-ingreso-pd#" className="a-btn">Realizar curso de ingreso</HashLink>
                        </p>
                        
                    </details>

                    

                    <details>

                        <summary>
                            <i class="fa-solid fa-angles-right"></i> ¿Necesito formación previa para empezar?
                        </summary>

                        <p>
                            No necesitás tener formación previa, podés empezar de cero. Nuestro programa está elaborado para que adquieras todo el conocimiento necesario sin necesidad de haber estudiado antes.
        
                        </p>
                        
                        
                    </details>


                    <details>

                        <summary>
                            <i class="fa-solid fa-angles-right"></i> ¿Qué aval tiene el título?
                        </summary>

                        <p>
                          El título del Conservatorio es privado, habilita para la enseñanza en instituciones privadas o de forma particular. 
                        </p>
                        
                        
                    </details>

                </div>

            </section>

           
            
         
        </main>
        
    
    );
}

  
export default ProfUrbanos;