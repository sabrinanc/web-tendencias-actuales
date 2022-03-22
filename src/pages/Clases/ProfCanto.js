import React from 'react';
import { HashLink } from 'react-router-hash-link';
import myData from "../../helpers/myData";

const ProfCanto = (props) => {
    
    return(
       
        <main>


            <div className="first-container">


                <div className="container    reveal">

                    <h1 className="title">Profesorado de<br></br><b>canto popular</b></h1>
                    <p>
                    Una formación integral que abarca tanto el aspecto técnico y pedagógico, como la transformación hacia tu ser artista deseado. 
                    Contamos con un staff de profesionales especializados en cada área que te acompañará en el proceso de aprendizaje, de manera que potencies al máximo tus virtudes.     
                    </p>
                    
                    <p>
                        <i className="fa-solid fa-graduation-cap"></i> Título: <b>PROFESOR SUPERIOR DE CANTO POPULAR</b><br></br>
                        <i className="fa-solid fa-calendar-check"></i> Duración: <b>3 AÑOS (6 cuatrimestres)</b> <br></br>
                        <i className="fa-solid fa-desktop"></i> Modalidad: <b>VIRTUAL</b>
                        
                    </p>

                    <HashLink smooth to="/profesorado-canto-popular#propuesta">Propuesta</HashLink>
                    <HashLink smooth to="/profesorado-canto-popular#plan-de-estudios"> | Plan de estudios</HashLink>
                    <HashLink smooth to="/profesorado-canto-popular#testimonios"> | Testimonios</HashLink>
                    <HashLink smooth to="/profesorado-canto-popular#faq-pcp"> | Preguntas frecuentes</HashLink>

                </div>
                

            </div>

            <img src="/img/portada-profesorado-canto-popular.jpg" alt="banner" className="img-br"></img>

            <div className="middle-container" id="propuesta">

                <div className="container">



                    <div className="item-info  reveal">
                        <h3 className="title"><i className="fas fa-video"></i> Clases sincrónicas</h3>
                        <p>Clases y talleres grupales semanales por Zoom con tus profesores. Coaching individual para alcanzar tus propios objetivos.</p>
                    </div>
                    <br></br>
                    <div className="item-info  reveal">
                        <h3 className="title"><i className="fas fa-chalkboard-teacher"></i> Videoclases grabadas</h3>
                        <p>Podés acceder a las videoclases y tutoriales en cualquier momento y desde cualquier dispositivo.</p>
                    </div>
                    <br></br>
                    <div className="item-info  reveal">
                        <h3 className="title"><i className="fas fa-cloud-download-alt"></i> Material descargable</h3>
                        <p>Cuadernillos, audios de ejercitación, guías de estudio y más material completamente descargable.</p>
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
            <img src="/img/portada-encontra-tu-voz.jpg" alt="banner" className="img-br"></img>


            <div className="middle-container" id="plan-de-estudios">

                <div className="container  reveal" >

                    <h2 className="title">Plan de estudios</h2>
                    <p>Nuestro plan de estudios está completamente adaptado a las necesidades actuales. 
                        Vas a aprender lo que verdaderamente necesitás para llevar adelante la profesión.
                    </p>

                    <details id="instancias-examen">

                        <summary>
                           <i className="fa-solid fa-book"></i> Primer año
                        </summary>

                        <p>
                            <b className="subtitle"> PRIMER CUATRIMESTRE</b>
                            <ul>
                                <li>☑ Introducción al Lenguaje musical y Audioperceptiva</li>
                                <li>☑ Introducción a la Técnica vocal</li>
                                <li>☑ Taller Actoral</li>
                            </ul>

                            <b className="subtitle">SEGUNDO CUATRIMESTRE</b>
                            <ul>
                                <li>☑ Lenguaje musical y Audioperceptiva I</li>
                                <li>☑ Técnica vocal I</li>
                                <li>☑ Taller de Interpretación I</li>
                                <li>☑ Teclado complementario I</li>
                            </ul>
                        </p>

                    </details>

                    <details id="instancias-examen">

                        <summary>
                           <i className="fa-solid fa-book"></i> Segundo año
                        </summary>

                        <p>
                            <b className="subtitle">PRIMER CUATRIMESTRE</b>
                            <ul>
                                <li>☑ Lenguaje Musical y Audioperceptiva II</li>
                                <li>☑ Técnica vocal II</li>
                                <li>☑ Teclado complementario II</li>
                                <li>☑ Taller actoral II</li>
                                <li>☑ Historia de la Música Popular</li>
                                <li>☑ Taller de Locución I</li>
                            </ul>

                            <b className="subtitle"> SEGUNDO CUATRIMESTRE</b>
                            <ul>
                                <li>☑ Lenguaje musical y Audioperceptiva III</li>
                                <li>☑ Técnica vocal III</li>
                                <li>☑ Taller de Interpretación II</li>
                                <li>☑ Teclado complementario III</li>
                                <li>☑ Edición audiovisual</li>
                            </ul>
                        </p>

                    </details>

                    <details id="instancias-examen">

                        <summary>
                           <i className="fa-solid fa-book"></i> Tercer año
                        </summary>

                        <p>
                            <b className="subtitle">PRIMER CUATRIMESTRE</b>
                            <ul>
                                <li>☑ Lenguaje musical y Audioperceptiva IV</li>
                                <li>☑ Técnica vocal IV</li>
                                <li>☑ Pedagogía, Liderazgo y Ética profesional </li>
                                <li>☑ Taller de Locución II</li>
                            </ul>

                            <b className="subtitle">SEGUNDO CUATRIMESTRE</b>
                            <ul>
                                <li>☑ Perfil artístico y docente</li>
                                <li>☑ Taller de Interpretación III</li>
                                <li>☑ Imagen y desarrollo profesional</li>
                                <li>☑ Taller actoral III</li>
                                <li>☑ Prácticas docentes</li>
                            </ul>
                        </p>

                    </details>

                </div>

             

            </div>

            <img src="/img/portada-cursada.jpg" alt="banner" className="img-br"></img>

            <section id="testimonios-pcp">

                <div className="container" id='testimonios'>
                    <h2 className="title">Testimonios</h2>
                </div>
                <div className='container-testimonios2'>

                    <details className='details-testimonios'>

                        <summary className='summary-testimonios'>
                            
                            <img  src="img/user-rr.png" alt="" />
                            
                            <p>"Agradezco el tener tan buenos docentes, muy dedicados y siempre atentos a nuestras necesidades."
                            <br></br><br></br>
                            <b>Romina Reimondez</b> <br></br>
                                Estudiante 2do año (2021)
                            </p>
                            
                            <i class="fa-solid fa-angles-down"></i>

                            
                                
                                
                        </summary>

                        <p>
                        "Agradezco el tener tan buenos docentes, muy dedicados y siempre atentos a nuestras necesidades. 
                        Aprendí a confiar más en mí, a descubrir cosas que creía imposibles de hacer. No solo nos brindaron contenido teórico sino sobre la vida, de conectar con uno, disfrutar, confiar, y abrazar lo que somos.
                        </p>
                        <p>
                        A quien esté por empezar la carrera le diría que no dude y se anime a intentar, que se va a encontrar con un excelente equipo docente, un completo plan de estudios y que realmente se va a poder conectar con su esencia explotando al máximo todo su potencial y disfrutando de ese proceso."
                        </p>
                        
                    </details>
                    <details className='details-testimonios'>

                        <summary className='summary-testimonios'>
                            
                            <img  src="img/user-go.png" alt="" />
                            
                            <p>
                            "Tuve muchísimos aprendizajes, nervios antes de cada examen, hice nuevos amigos y estoy feliz de ser parte de los alumnos de TA."
                            <br></br><br></br>
                            <b>Gabriel Ortiz</b> <br></br>
                                Estudiante 2do año (2021)
                            </p>
                            
                            <i class="fa-solid fa-angles-down"></i>

                            
                                
                                
                        </summary>

                        <p>
                            "Me siento muy bien tanto con el material de estudio y con la forma en que los profes explican.
                            <br></br><br></br>
                            La relación con mis compañeros es super buena, realizamos covers grupales y siento que esas cosas nos re unen.
                            <br></br><br></br>
                            Tuve muchísimos aprendizajes, nervios antes de cada examen, hice nuevos amigos y estoy feliz de ser parte de los alumnos de TA.
                            <br></br><br></br>
                            Mi sueño es poder transmitir todo lo que aprendí, sigo aprendiendo y también el amor a la música."
                        </p>
                        
                    </details>
                    <details className='details-testimonios'>

                        <summary className='summary-testimonios'>
                            
                            <img  src="img/user-mfv.png" alt="" />
                            
                            <p>"A quien esté por comenzar quisiera decirle que arranque con todo, la carrera es hermosa."
                            <br></br><br></br>
                            <b>María Florencia Velazquez</b> <br></br>
                                Estudiante 1er año (2021)
                            </p>
                            <i class="fa-solid fa-angles-down"></i>              
                        </summary>

                        <p>
                            "Los profes son muy buenos y atentos, llevan la docencia con mucho amor. Además tengo muy buena relación con mis compañeras, incluso tenemos grupo de WhatsApp!
                            <br></br> <br></br> 
                            Me gustan todas las materias… Siento que crecí mucho en las presentaciones en escenario, superé mis expectativas en la presentación del Taller Actoral.
                            <br></br><br></br>
                            A quien esté por comenzar quisiera decirle que arranque con todo, la carrera es hermosa."
                        </p>
                        
                    </details>
                    <details className='details-testimonios'>

                        <summary className='summary-testimonios'>
                            
                            <img  src="img/user-ss.png" alt="" />
                            
                            <p>"En la cursada aprendí a no decir "no puedo", todo se puede solo hay que proponérselo."
                            <br></br><br></br>
                            <b>Sandra Saltarelli</b> <br></br>
                                Estudiante 1er año (2021)
                            </p>
                            
                            <i class="fa-solid fa-angles-down"></i>

                            
                                
                                
                        </summary>

                        <p>
                            "Mi motivación para empezar fue conseguir el título…
                            <br></br><br></br>
                            En la cursada aprendí a no decir "no puedo", todo se puede solo hay que proponérselo. 
                            <br></br><br></br>
                            Los profes son re copados y mis compañeras son excelentes, de ellas también se aprende."
                        </p>
                        
                    </details>
                    <details className='details-testimonios'>

                        <summary className='summary-testimonios'>
                            
                            <img  src="img/user-ns.png" alt="" />
                            
                            <p>"Me gustan todas las materias y el staff docente es excelente."
                            <br></br><br></br>
                            <b>Nathalia San Miguel</b> <br></br>
                                Estudiante 1er año (2021)
                            </p>
                            <i class="fa-solid fa-angles-down"></i>          
                        </summary>

                        <p>
                            "Arranqué la carrera porque la música y cantar son mi pasión, y poder enseñar a educar la voz sería el combo perfecto.
                            <br></br><br></br>
                            Me gustan todas las materias y el staff docente es excelente.
                            <br></br><br></br>
                            Si estás por empezar a cursar no lo dudes, es el empujón para comenzar tus sueños…"
                        </p>
                        
                    </details>

                    </div>

            </section>

            <section id="faq-pcp">

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
                            <HashLink smooth to="/curso-ingreso-pcp#" className="a-btn">Realizar curso de ingreso</HashLink>
                        </p>
                        
                    </details>

                    

                    <details>

                        <summary>
                            <i class="fa-solid fa-angles-right"></i> ¿Necesito formación previa para empezar?
                        </summary>

                        <p>
                            No necesitás tener formación previa, podés empezar de cero. Nuestro programa está elaborado para que adquieras todo el conocimiento necesario sin necesidad de haber estudiado antes.
                            Igualmente, si tenés alguna formación podés realizar los exámenes nivelatorios y empezar en un nivel más avanzado.
                        </p>
                        
                        
                    </details>

                    <details>

                        <summary>
                            <i class="fa-solid fa-angles-right"></i> ¿Puedo adelantar materias si ya tengo estudios previos?
                        </summary>

                        <p>
                            Claro que sí... Te damos la opción de validar tus estudios previos ya sean formales o informales y <b>adelantar el PRIMER CUATRIMESTRE, o hasta el PRIMER AÑO</b>
                            <br/><br/><b>REQUISITOS:</b>
                            <ul>
                                <li>☑ Realizar una entrevista individual para coordinar las instancias posteriores.</li>
                                <li>☑ Presentar certificados de materias aprobadas y/o cursos de lenguaje musical y audioperceptiva. *Si no tenés estudios comprobables podés realizar un examen práctico escrito y otro teórico oral para acreditar tus conocimientos.</li>
                                <li>☑ Realizar un examen de técnica vocal.</li>
                                *Todas las instancias de nivelación son gratuitas.
                            </ul>
                        </p>
                        
                        
                    </details>

                    <details>

                        <summary>
                            <i class="fa-solid fa-angles-right"></i> ¿Qué aval tiene el título?
                        </summary>

                        <p>
                          El título del Conservatorio es privado, habilita para la enseñanza en instituciones privadas o de forma particular. 
                          Además podemos asesorarte para cursar la formación oficial terciaria complementaria que te permite acceder a enseñar en colegios o cualquier institución que requiera título oficial.
                        </p>
                        
                        
                    </details>

                </div>

            </section>

           
            
         
        </main>
        
    
    );
}

  
export default ProfCanto;