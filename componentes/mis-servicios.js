function addServiceCard(params) {
    const template = document.querySelector("#servicios-template");
    const container = document.querySelector(".mis-servicios")


    template.content.querySelector(".servicios__content-image").src = params.imagen
    template.content.querySelector(".servicios__content-title").textContent = params.titulo
    template.content.querySelector(".servicios__content-descripcion").textContent = params.descripcion


    var clone = document.importNode(template.content, true)
    container.appendChild(clone)
}




function servicios(el) {
    const serviciosEl = document.createElement("div");
    serviciosEl.innerHTML = `
        <div class="servicios__header">
            <h2 class="servicios__title">Mis <span class="servicios__titulo-segunda-palabra">Servicios</span></h2>
        </div>
    ` 
    el.appendChild(serviciosEl)

}






function getServices() {
    return fetch("https://cdn.contentful.com/spaces/lx5lgqnxmra2/environments/master/entries?access_token=LY0fNV0of0JdRTqXfSGTV6sHO0qY0U75Iqkyw2_iTL8&content_type=misServiciosWebComponents")
    .then((res)=>{
        return res.json()
    }).then((data)=>{
        console.log(data)
        
        var imageCollection = []
        for (let i = 0; i < data.items.length; i++){
            imageCollection.push(data.includes.Asset[i].fields.file.url)
        }

        var imageJson = imageCollection.map(function(image){
            return {imagen: image}
        })

        
        const fieldsCollection = data.items.map((item)=>{
            return {
                titulo: item.fields.tituloDelServicio,
                descripcion: item.fields.descripcionDelServicio
            }
        })

        var jsonFinal = imageJson.map(function(imagen,index){
            return Object.assign({},imagen,fieldsCollection[index])
        })

        return jsonFinal

    })
}
