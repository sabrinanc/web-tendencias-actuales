import React from 'react';
import SvgComponent from '../components/minicomponents/Certificadosvg';
import TestimoniosInicio from "../components/minicomponents/TestimoniosInicio";


const Inicio = (props) => {
    
    return(
       
        <main>

            <div className="first-container">


                <div className="container    reveal">

                    <h1 className="title">Tu espacio de <br></br><b>formación artística</b></h1>
                    <p className="text">
                     Desde hace 20 años estamos formando artistas y profesores, con un mismo  objetivo: que alcances tu máximo desarrollo artístico y personal, 
                     y darte las herramientas para ayudar a que otros lo hagan.   
                    </p>
                    <img className='corazon-gif' src='/img/corazon-ta.gif'></img>

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

            <div className="middle-container  ">

                <div className="container-slider1" id="testimonios">
                    <TestimoniosInicio></TestimoniosInicio>
                </div>  
  
            </div>



            
         
        </main>
        
    
    );
}

  
export default Inicio;