function main(){

    getServices().then(function(works){
        for (const w of works){
            console.log(w)
            console.log(w.imagen)
            console.log(w.titulo)
            console.log(w.descripcion)
            addServiceCard(w)
        }
    })


    const headerCont = document.querySelector(".header")
    header(headerCont);
    openWindow()

    const bienvenidaCont = document.querySelector(".bienvenida")
    bienvenida(bienvenidaCont)

    const presentacionCont = document.querySelector(".presentacion")
    presentacion(presentacionCont)

    const serviciosCont = document.querySelector(".mis-servicios")
    servicios(serviciosCont)

    const formCont = document.querySelector(".formulario-de-contacto")
    form(formCont)

    const footerCont = document.querySelector(".footer")
    footer(footerCont)

}






main()
