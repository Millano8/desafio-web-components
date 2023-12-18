function presentacion(el){
    const presentacionEl = document.createElement("div");
    presentacionEl.className = "presentacion__div"
    presentacionEl.innerHTML = ` 
        <div class="presentacion__contenido">   
            <h2 class="presentacion__soy-fran">Soy Fran</h2>
            <p class="presentacion__texto">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit enim provident minima sit quas, assumenda consectetur dicta veritatis, accusantium dolore fugiat temporibus in aut. Rem ducimus eos vitae dolore corrupti.</p>
        </div>
        <div class="presentacion__imagen">
            <img src="./imagenes/img-marce.png" alt="" class="presentacion__img">
        </div>   
    `

    el.appendChild(presentacionEl);
}   