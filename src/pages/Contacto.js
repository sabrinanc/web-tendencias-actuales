import React, { useEffect, useState } from 'react';

const Contacto = (props) => {

    const [msjWa, setMsjWa] = useState("")

    useEffect(() => {
        document.querySelector("#send-wa-msj").addEventListener("click", (e) => {
            setMsjWa(document.querySelector("#msj-wa").value)
        })
    
    }, [msjWa])
    
    
    return(
       
        <main>

            <div className="first-container">


                <div className="container">

                    <p className="title">
                     Hablemos por WhatsApp al <br></br>
                     <b><i className="fa-brands fa-whatsapp"></i> 15-4174-9292</b>
                    </p>  
                    
                    <textarea type="text" className='wa-msj' id='msj-wa' placeholder='Escribinos tu consulta'></textarea>
                    <a className='link-send-wa' id="send-wa-msj" href={`https://api.whatsapp.com/send?phone=+541141749292&text=${msjWa}`} target="_blank" rel="noreferrer">
                        Enviar WhatsApp <i class="fa-solid fa-circle-arrow-right"></i>
                    </a>
                
                </div>

            </div>

        </main>
        
    
    );
}

  
export default Contacto;