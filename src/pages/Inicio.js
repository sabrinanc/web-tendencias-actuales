import React from 'react';
import SvgComponent from '../components/minicomponents/Certificadosvg';

const Inicio = (props) => {
    
    return(
       
        <main>

            <div className="first-container">


                <div className="container">

                    <h1 className="title">Tu espacio de <br></br><b>formación artística</b></h1>
                    <p className="text">
                     Desde hace 20 años estamos formando artistas y profesores, con un mismo  objetivo: que alcances tu máximo desarrollo artístico y personal, 
                     y darte las herramientas para ayudar a que otros lo hagan.   
                    </p>
                    <img className='corazon-gif' src='/img/portada-profes.jpg' alt='corazon ta'></img>

                </div> 

                

            </div>

            <br></br>
            <div className="middle-container  ">

                <div className="container   reveal">

                    <h2 className="title">Estamos con <b>vos</b></h2>
                    <p className="text">
                    Nuestro objetivo es guiarte para descubrir tu "ser artista" interior y que así puedas alcanzar tus metas y cumplir tus sueños. Te acompañamos en cada parte del camino.
                    </p>

                    <br></br>

                    <h2 className="title">Tus <b>metas</b>, tus tiempos</h2>
                    <p className="text">
                    Porque el tiempo y la distancia no tienen que ser obstáculos para que logres tus metas, creamos un entorno de aprendizaje completamente flexible. 
                    Tenemos cursadas íntegramente virtuales, o semipresenciales, grupales e individuales. Podés empezar en cualquier momento del año. 
                    </p>

                    <h2 className="title">Certificamos tu <b>esfuerzo</b></h2>
                    <p className="text">
                        Nos aseguramos de certificar cada paso que das con nosotros y que puedas compartirlo con el mundo.
                        Entregamos certificados digitales por todos los cursos realizados, que podés verificar en nuestro sistema.
                    </p>
                    <SvgComponent 
                        nombre="Nombre y Apellido"
                        materia="Lenguaje musical y audioperceptiva III"
                        fecha="20/11/2022"
                        codigo="12312-PLET-201122"
                        horas="12"
                    ></SvgComponent>

                </div>

                <br></br>
                <br></br>



                
                

            </div>

            <img src="/img/portada-profes.jpg" alt="banner" className="img-br"></img>

    

            <section id="testimonios-pcp">

                <div className="container" id='testimonios'>
                    <h2 className="title">Nuestros estudiantes dicen...</h2>
                </div>
                <div className='container-testimonios2'>

                    <details className='details-testimonios'>

                        <summary className='summary-testimonios'>
                            
                            <img  src="img/user-al.png" alt="" />
                            
                            <p>"Encontré en cada clase, la satisfacción de conectarme con mi propio ser, sentir la pasión y el alma misma."
                            <br></br><br></br>
                            <b>Alicia</b> <br></br>
                                Estudiante de piano
                            </p>
                            
                            <i class="fa-solid fa-angles-down"></i>
                        </summary>

                        <p>
                        "Llegué a la clase con muchas expectativas y no me equivoqué… Encontré a un docente de vocación que disfrutá los logros e incentiva al alumno la pasión por la música.
                        </p>
                        
                        <p>
                        Encontré en cada clase, la satisfacción de conectarme con mi propio ser, sentir la pasión y el alma misma. Mí motivación fue encontrar el tiempo a mis 73 años de hacer lo que siempre soñé.
                        </p>
                        <p>
                        Espero lograr, y seguir avanzando, junto a la profe, que sin dudas tiene conocimiento, técnica, pasión por lo que hace y la sensibilidad de un grande."
                        </p>

                    </details>
                    <details className='details-testimonios'>

                        <summary className='summary-testimonios'>
                            
                            <img  src="img/user-mr.png" alt="" />
                            
                            <p>""Me siento súper cómoda y acompañada. Siento que es un espacio re lindo en el que tengo libertad de conocer mi voz, sin prejuicios..."
                            <br></br><br></br>
                            <b>Mariela</b> <br></br>
                                Estudiante de canto
                            </p>
                            
                            <i class="fa-solid fa-angles-down"></i>
                        </summary>

                        <p>
                        "Me siento súper cómoda y acompañada. Siento que es un espacio re lindo en el que tengo libertad de conocer mi voz, sin prejuicios y tranquila de que me está guiando alguien que sabe. Además arrancar canto me re sirvió para sentirme mejor anímicamente.
                        </p>
                        <p>
                        Arranqué buscando hacer alguna actividad fuera de lo que es el estudio y el trabajo, y me puse a pensar en esas cosas que siempre pensé en hacer y nunca me animé, y canto fue lo primero que me vino a la mente.
                        </p>
                        <p>
                        Me alegra haberme animado a arrancar, descubrí que no hace falta nacer cantando y aprender puede ser mucho más natural de lo que yo creía."
                        </p>

                    </details>
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
                    <details className='details-testimonios'>

                        <summary className='summary-testimonios'>
                            
                            <img  src="img/user-rp.png" alt="" />
                            
                            <p>"Lo que más me gusta de las clases es el momento de cantar y ver reflejado lo ejercitado en la vocalización."
                            <br></br><br></br>
                            <b>Rocío Ponce</b> <br></br>
                                Estudiante de canto
                            </p>
                            
                            <i class="fa-solid fa-angles-down"></i>
                        </summary>

                        <p>
                        "Lo que más me gusta de las clases es el momento de cantar y ver reflejado lo ejercitado en la vocalización. 
                        </p>
                        <p>
                        Empecé las clases porque estudio artes escénicas y necesitaba reforzar la técnica vocal. Espero seguir trabajando con esfuerzo para poder explotar mi voz al máximo."
                        </p>

                    </details>

                    </div>

            </section>



            
         
        </main>
        
    
    );
}

  
export default Inicio;