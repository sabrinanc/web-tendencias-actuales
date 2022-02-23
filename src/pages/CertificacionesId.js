import { doc, getDoc } from 'firebase/firestore';

import React, { useEffect, useState } from 'react';

// import db from '../firebase/firebase-config';

import { useParams } from "react-router-dom";
import SvgComponent from '../components/minicomponents/Certificadosvg';


// Download diploma
import jsPDF from 'jspdf';
import { svgAsPngUri } from "save-svg-as-png";




const CertificacionesId = (props) => {

    const { idCertificado } = useParams();
    /*
    
    
   
    const [certificadoSelected, setCertificadoSelected] = useState("inicio")


  useEffect(() => {

    const getCertificados = async() => { 
      
      
      const docRef = doc(db, "certificados", idCertificado);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        let certi = docSnap.data()
        setCertificadoSelected(certi)
    
      } else {
        // doc.data() will be undefined in this case
        console.log("No se encontró el certificado");
}
      
     
    }

    getCertificados();
    

  }, []);

   
    */

  //// Descargar diploma

  async function downLoadPDF() {
    const graph = document.getElementsByClassName("diploma-ta")[0];
    const pdf = new jsPDF("l", "px", [650, 460]);
    const pdfCanvas = document.createElement("canvas");
    pdfCanvas.setAttribute("width", 33676);
    pdfCanvas.setAttribute("height", 23811);

    const dataURI = await svgAsPngUri(graph);

    

    pdf.addImage(dataURI, "PNG", 0, 0);
    pdf.save("certificado-tendenciasactuales.pdf");
  }

  
  

 
    return(
       
        <main>



            <div className="first-container">

              <div className='container'>

                <SvgComponent className="diploma-ta"
                     nombre={"Nicolás Ángel Surdi"} 
                     materia={"Ingeniero electrónico"}
                     fecha={"22/02/2022"}
                     codigo={"15442-IUY-098383"}
                     horas={"960"}
                ></SvgComponent>
                  
              </div>
                <div className="container">
                  <h2 className='title'>¡Felicitaciones, lo lograste!</h2>
                  <p>Te felicitamos de parte de todo el staff de Tendencias Actuales por tu esfuerzo. ¡Seguí trabajando en vos y poco a poco alcanzarás todas tus metas!</p>
                  <div>
                    Descargar el certificado
                    <button onClick={downLoadPDF} className="btn-icon">
                      <i className="fa-solid fa-file-arrow-down"></i>
                    </button>
                  </div>
                  <br/>
                  <div>
                    Compartir en redes sociales 
                    <br/>
                    <a className='icon' href={`https://www.facebook.com/sharer/sharer.php?u=http://www.tendenciasactuales.com.ar/certificaciones/${idCertificado}`}>
                        <i className="fa-brands fa-facebook"></i>
                    </a>
                    <a className='icon' href={`https://www.linkedin.com/sharing/share-offsite/?url=http://www.tendenciasactuales.com.ar/certificaciones/${idCertificado}`}>
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                    <a className='icon' href={`https://api.whatsapp.com/send?text=http://www.tendenciasactuales.com.ar/certificaciones/${idCertificado}`}>
                        <i className="fa-brands fa-whatsapp"></i>
                    </a> 
                  </div>
                </div>
            </div>


           
            
         
        </main>
        
    
    );


}

  
export default CertificacionesId;