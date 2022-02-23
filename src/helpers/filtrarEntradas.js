export const filtrarEntradas = (e) => {

    let hashtagSeleccionado = e.target.textContent;
    

    document.querySelectorAll("[hashtag]").forEach(entrada => {

        entrada.classList.remove("d-none");
        
        if ( e.target.textContent !== "todo" && !(entrada.attributes.hashtag.value.includes(hashtagSeleccionado)) ){
            entrada.classList.add("d-none");
        };
        
    });
    

}