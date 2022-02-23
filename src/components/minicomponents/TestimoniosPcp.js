import React, { Component } from "react";
import Slider from "react-slick";

export default class Testimonios extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>

        <h2 className="title  slider-title">Nuestros estudiantes dicen...</h2>
       
        <Slider {...settings}>

          <div className="container-t">
              <div className="testimonios-container">

                <p>
                  "Agradezco el tener tan buenos docentes, muy dedicados y siempre atentos a nuestras necesidades. 
                  Aprendí a confiar más en mí, a descubrir cosas que creía imposibles de hacer. No solo nos brindaron contenido teórico sino sobre la vida, de conectar con uno, disfrutar, confiar, y abrazar lo que somos.
                </p>
                <p>
                  A quien esté por empezar la carrera le diría que no dude y se anime a intentar, que se va a encontrar con un excelente equipo docente, un completo plan de estudios y que realmente se va a poder conectar con su esencia explotando al máximo todo su potencial y disfrutando de ese proceso."
                </p>
                
                <br></br>

                <img  src="img/user-rr.png" alt="" className="testimonios-img"/>
                
                <b>Romina Reimondez</b> <br></br>
                Estudiante 2do año (2021)
                <br></br>
              
              </div>
          </div>

          <div className="container-t">
            <div className="testimonios-container">
                
              <p>
                "Me siento muy bien tanto con el material de estudio y con la forma en que los profes explican.
                <br></br><br></br>
                La relación con mis compañeros es super buena, realizamos covers grupales y siento que esas cosas nos re unen.
                <br></br><br></br>
                Tuve muchísimos aprendizajes, nervios antes de cada examen, hice nuevos amigos y estoy feliz de ser parte de los alumnos de TA.
                <br></br><br></br>
                Mi sueño es poder transmitir todo lo que aprendí, sigo aprendiendo y también el amor a la música."
              </p> <br></br>

              <img  src="img/user-go.png" alt="foto-perfil" className="testimonios-img"/>
              
              <b>Gabriel Ortiz</b>
              <br></br>
              Estudiante 2do año (2021)
          
            </div>
          </div>
          
          <div className="container-t">
            <div className="testimonios-container">
                
              <p>
              "Los profes son muy buenos y atentos, llevan la docencia con mucho amor. Además tengo muy buena relación con mis compañeras, incluso tenemos grupo de WhatsApp!
              <br></br> <br></br> 
              Me gustan todas las materias… Siento que crecí mucho en las presentaciones en escenario, superé mis expectativas en la presentación del Taller Actoral.
              <br></br><br></br>
              A quien esté por comenzar quisiera decirle que arranque con todo, la carrera es hermosa."

              </p> <br></br>

              <img  src="img/user-mfv.png" alt="" className="testimonios-img"/>
              
              <b>María Florencia Velazquez</b>
              <br></br>
              Estudiante 1er año (2021)
            
            </div>
          </div> 

          <div className="container-t">
            <div className="testimonios-container">
                
              <p>
              "Mi motivación para empezar fue conseguir el título…
              <br></br><br></br>
              En la cursada aprendí a no decir "no puedo", todo se puede solo hay que proponérselo. 
              <br></br><br></br>
              Los profes son re copados y mis compañeras son excelentes, de ellas también se aprende."
              </p> <br></br>

              <img  src="img/user-ss.png" alt="" className="testimonios-img"/>
              
              <b>Sandra Saltarelli</b>
              <br></br>
              Estudiante 1er año (2021)
            
            </div>
          </div>

          <div className="container-t">
            <div className="testimonios-container">
                
              <p>
                "Arranqué la carrera porque la música y cantar son mi pasión, y poder enseñar a educar la voz sería el combo perfecto.
                <br></br><br></br>
                Me gustan todas las materias y el staff docente es excelente.
                <br></br><br></br>
                Si estás por empezar a cursar no lo dudes, es el empujón para comenzar tus sueños…"
        
              </p> <br></br>

              <img  src="img/user-ns.png" alt="" className="testimonios-img"/>
              
              <b>Nathalia San Miguel</b>
              <br></br>
              Estudiante 1er año (2021)
            
            </div>
          </div>
            
        </Slider>
      </div>
    );
  }
}