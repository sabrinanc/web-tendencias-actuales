import React, { Component } from "react";
import Slider from "react-slick";

export default class TestimoniosInicio extends Component {
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
                  "Llegué a la clase con muchas expectativas y no me equivoqué… Encontré a un docente de vocación que disfrutá los logros e incentiva al alumno la pasión por la música.
                  </p>
                  
                  <p>
                  Encontré en cada clase, la satisfacción de conectarme con mí propio ser, sentir la pasión y el alma misma. Mí motivación fue encontrar el tiempo a mis 73 años de hacer lo que siempre soñé.
                  </p>
                  <p>
                  Espero lograr, y seguir avanzando, junto a la profe, que sin dudas tiene conocimiento, técnica, pasión por lo que hace y la sensibilidad de un grande."
                  </p>
                  <br></br>

                  <img  src="img/user-al.png" alt="alumno" className="testimonios-img"/>
                  
                  <b>Alicia</b> <br></br>
                  Estudiante de piano
                  <br></br>
                
                </div>
          </div>

          <div className="container-t">
                <div className="testimonios-container">

                  <p>
                  "Lo que más me gusta de las clases es el momento de cantar y ver reflejado lo ejercitado en la vocalización. 
                  </p>
                  <p>
                  Empecé las clases porque estudio artes escénicas y necesitaba reforzar la técnica vocal. Espero seguir trabajando con esfuerzo para poder explotar mi voz al máximo."
                  </p>
                  <br></br>

                  <img  src="img/user-rp.png" alt="alumno" className="testimonios-img"/>
                  
                  <b>Rocío Ponce</b> <br></br>
                  Estudiante de canto
                  <br></br>
                
                </div>
          </div>

          <div className="container-t">
                <div className="testimonios-container">

                  <p>
                  "Me siento súper cómoda y acompañada. Siento que es un espacio re lindo en el que tengo libertad de conocer mi voz, sin prejuicios y tranquila de que me está guiando alguien que sabe. Además arrancar canto me re sirvió para sentirme mejor anímicamente.
                  </p>
                  <p>
                  Arranqué buscando hacer alguna actividad fuera de lo que es el estudio y el trabajo, y me puse a pensar en esas cosas que siempre pensé en hacer y nunca me animé, y canto fue lo primero que me vino a la mente.
                  </p>
                  <p>
                  Me alegra haberme animado a arrancar, descubrí que no hace falta nacer cantando y aprender puede ser mucho más natural de lo que yo creía."
                  </p>
                  
                  <br></br>

                  <img  src="img/user-mr.png" alt="alumno" className="testimonios-img"/>
                  
                  <b>Mariela</b> <br></br>
                  Estudiante de canto
                  <br></br>
                
                </div>
          </div>

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
                Estudiante profesorado canto
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
              Estudiante profesorado canto
          
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
              Estudiante profesorado canto
            
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
              Estudiante profesorado canto
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
              Estudiante profesorado canto
            
            </div>
          </div>
            
        </Slider>
      </div>
    );
  }
}