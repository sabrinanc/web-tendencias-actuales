import React from 'react';

const CursoIngresoPd = (props) => {
    
    return(
       
        <main>


            <div className="first-container">


                <div className="container    reveal">

                    <h1 className="title"><b>Curso de ingreso</b><br></br>Profesorado danzas (urbanas & k-pop)</h1>
                    <p>
                        ¡Bienvenido al curso de ingreso para los Profesorados de Danzas!
                        Este breve curso tiene como objetivo contarte sobre los ejes centrales de nuestro programa de formación, así como también explicarte los ejercicios a realizar en el examen.
                        El examen es nivelatorio y no excluyente. Queremos conocerte y que nos conozcas.
                        ¡Empecemos!
                   </p>
                    
                   <iframe width="100%" height="285" src="https://www.youtube.com/embed/ySU19U87-PE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>


                </div>
                

            </div>


            <div className="container" id="instancias-examen">
                <h2 className="title"><b>Instancias del examen</b></h2>

                <h3 className="title">#1 Evaluación de rítmica</h3>

                <iframe width="100%" height="285" src="https://www.youtube.com/embed/DU8sA6SvGGg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

                <p>
                    <ul>
                        Envianos un video con: 
                        <li>☑ los cuatro ejercicios de rítmica: podés marcar el tiempo con tu mano o usar un metrónomo.</li>
                    </ul>
                </p>

                
                <h3 className="title">#2 Evaluación de técnica y coreografía</h3>
                <iframe width="100%" height="285" src="https://www.youtube.com/embed/2OlY1W_1e5c" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

                <p>
                    Envianos un video tuyo bailando la mini coreo del tutorial. Al final podés bailar libre. El video no debe tener ediciones.
                    Tendremos en cuenta tanto el aspecto técnico como la interpretación.
                    <br></br>
                    <a className='a-btn' href='https://drive.google.com/u/2/uc?id=1vQvUr0ND8yseBDnVpeJJSeYQO5lbgTjY&export=download' target="_blank" rel="noreferrer"><i className="fa-solid fa-cloud-arrow-down"></i> Descargar canción</a>
                </p>

                <h3 className="title">#3 Entrevista personal</h3>
                <p>
                
                    ¡Queremos conocerte! Contanos un poco sobre vos... <br/>
                    Podés elegir el formato de texto o si te animás enviarnos un video.
                    Usa esta guía de preguntas como referencia o sentite con la libertad de contarnos lo que consideres importante.
                
                    <ul>
                        <li>☑ ¿A qué te dedicas? ¿Trabajas, estudiás?</li>
                        <li>☑ ¿Tenés experiencia bailando?</li>
                        <li>☑ ¿Tomaste clases antes? ¿Por cuánto tiempo y en dónde? ¿Tomás clases actualmente?</li>
                        <li>☑ ¿Bailaste alguna vez en público? ¿Tenés experiencia bailando profesionalmente?</li>
                        <li>☑ ¿Cuál es tu proyecto a futuro relacionado con la danza?</li>
                        <li>☑ ¿Qué estilo te gusta más y por qué?</li>
                        <li>☑ ¿Cuándo empezaste a bailar? ¿Qué te movilizó?</li>
                        <li>☑ ¿Qué lugar ocupa el baile en tu vida?</li>
                            
                    </ul>
                </p>

            </div>

            <div className="container" id="instancias-examen">

                <h2 className="title"><b>Envianos tu examen</b></h2>

                <p>
                    Envianos el video a <b>tendenciasactuales.ar@gmail.com</b> o directamente por WhatsApp al <b>15-4174-9292</b>. <br/>
                    El material que nos envies será completamente privado.<br/>
                    El video no debe tener ediciones.
                    Te recomendamos subirlo a alguna cuenta de Drive, Onedrive o YouTube (si lo preferís en privado) y enviarnos el link.
                </p>
                <p className="text1">
                    Si aún no te inscribiste no olvides hacerlo! <br/>
                    <a className="a-btn" href="https://forms.gle/tE3j7hhSBaGL5eBP9" target="_blank" rel="noreferrer"><i className="fa-solid fa-id-card"></i> Formulario de inscripción</a><br></br>
                    
                </p>

                
            </div>

            

           
            
         
        </main>
        
    
    );
}

  
export default CursoIngresoPd;