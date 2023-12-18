function bienvenida(el) {
    const bienvenidaEl = document.createElement("div");
    bienvenidaEl.innerHTML = `
    <div class="bienvenida__texto">
        <h2 class="bienvenida__texto-hola">Hola<br></h2>
        <h2 class="bienvenida__texto-soy">Soy</h2>
        <h2 class="bienvenida__texto-soy">Fran</h2>
    </div>
    <div class="bienvenida__imagen">
        <img src="./imagenes/image-rocket.png" alt="" class="bienvenida__img-rocket">
    </div>       
    `



    el.appendChild(bienvenidaEl);
}