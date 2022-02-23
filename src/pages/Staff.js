import React from 'react';
import myDataStaff from "../helpers/myDataStaff";
import StaffProfile from "../components/minicomponents/StaffProfile";


const Staff = (props) => {

    

    return(
        <main>
            <div className="first-container">
                <div className="container-blog">
                    <p className="title">STAFF</p> 
                    <div className="container-blog-cards">
                      {
                        myDataStaff.map(prof => <StaffProfile
                        id={prof.nombre}
                        key={prof.nombre}
                        nombre={prof.nombre}
                        foto={prof.fotoPerfil}
                        link={prof.linkTo}
                        cargo={prof.cargo}
                        />)
                      }
                    </div>  
                </div>
            </div>
        </main>
    );
}

  
export default Staff;