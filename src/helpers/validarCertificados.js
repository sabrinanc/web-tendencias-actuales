export const validarCertificados = (e) => {

    let $contenedorRespuestaVerificacion = document.getElementById("contenedor-respuesta-verificacion");
    let $contenedorInput = document.getElementById("contenedor-input");


        
    let urlCursos = "https://sheets.googleapis.com/v4/spreadsheets/1NN0JxtURdP-7gKvAFQ6WL4XfBw0QNIMsq32Qj10T_dg/values/CERTIFICACIONES!A:H?key=AIzaSyDyuAvsvRXyQSi-SDdXVrqXCOYfm_XeR-Q";
        


    const obtenerDataFetchCursos = () => {

        let inputIdCertificado = document.getElementById("id-certificado").value;

        

        ///////////////////////////////////////////////////////////////

        fetch(urlCursos)
            .then(res => res.json())
            .then(json => {
                
                let dataCertificados = json.values;
                let existe = false;

                
            
                for (let i = 0; i < dataCertificados.length; i++){

                    let certificado = dataCertificados[i][7];
                    
                    if (certificado === inputIdCertificado & certificado !== ""){

                        let objetoCertificado = {
                            nombre: dataCertificados[i][1],
                            materia: dataCertificados[i][3],
                            fecha: dataCertificados[i][5],
                            horas: dataCertificados[i][4],
                            idCertificado: certificado
                        }

                        existe = true;
                        
                        // Visualizacion de la ficha de certificado verificado

                        document.getElementById("id-certificado-verificado").textContent = `Id del certificado: ${objetoCertificado.idCertificado}`;
                        document.getElementById("certifica-nombre").textContent = objetoCertificado.nombre;
                        document.getElementById("certifica-materia").textContent = objetoCertificado.materia;
                        if(inputIdCertificado.includes("TPSDU") || inputIdCertificado.includes("TPSCP")) {
                            document.getElementById("tipo-certificado").textContent = "ha obtenido el título de";
                            document.getElementById("certifica-fecha").textContent = `(${objetoCertificado.horas} horas) el ${objetoCertificado.fecha}`;
                        } else if (inputIdCertificado.includes("EFITA")){
                            document.getElementById("tipo-certificado").textContent = "ha aprobado el examen final";
                            document.getElementById("certifica-fecha").textContent = `el ${objetoCertificado.fecha}`;
                        } else{
                            document.getElementById("tipo-certificado").textContent = "ha aprobado el curso";
                            document.getElementById("certifica-fecha").textContent = `(${objetoCertificado.horas} horas) el ${objetoCertificado.fecha}`;
                        }
                        
                        
                        

                        $contenedorInput.classList.add("novisible");
                        document.getElementById("error-id").classList.add("novisible");
                        $contenedorRespuestaVerificacion.classList.remove("novisible");
                        
                    }   

                }  

                if (existe === false){
                    document.getElementById("error-id").classList.remove("novisible");
                    $contenedorRespuestaVerificacion.classList.add("novisible");
                }
            

            }   

        ); //Fin peticion

    } //Fin funcion obtenerDataFetch




    const visibilizarInicio = () => {
        $contenedorRespuestaVerificacion.classList.add("novisible");
        document.getElementById("id-certificado").value = "";
        $contenedorInput.classList.remove("novisible");
    }




    document.addEventListener("click", (e) =>{
        if(e.target === document.getElementById("btn-validar-certificado")){
            obtenerDataFetchCursos();    
        }
        if(e.target === document.getElementById("btn-verificar-otro")){
            visibilizarInicio();
        }
    })
    
    
}