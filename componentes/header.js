function header(el) {

    const headerEl = document.createElement("div");
    headerEl.innerHTML = ` 
    <div class="header__cont">
    
            <img src="./imagenes/logo.png" alt="logo" class="header__tu-logo">
    
            <button class="abre-ventana">
                <img src="./imagenes/menu-hambur.png" alt="menu" class="header__burger-logo">
            </button>
            
            <div class="logo-expandido">
                <a href="#presentacion" class="menu__link">Presentacion</a>
                <a href="#servicios" class="menu__link">Servicios</a>
                <a href="#contacto" class="menu__link">Contacto</a>
            </div>

            <div class="ventana">
                <button class="ventana__cierra-ventana">
                    <img src="./imagenes/cierra-ventana.png" class="ventana__cierra-ventana-img">
                </button>
                <div class="ventana__contenido">
                    <a href="#presentacion" class="ventana__link">
                        <h2 class="ventana__texto">Bienvenida</h2>
                    </a>
                    <a href="#servicios" class="ventana__link">
                        <h2 class="ventana__texto">Servicios</h2>
                    </a>
                    <a href="#contacto" class="ventana__link">
                        <h2 class="ventana__texto">Contacto</h2>
                    </a>
                </div>
            </div>
        </div>
    `
    el.appendChild(headerEl)
    
}


function openWindow(){
    const abreVentanaEl = document.querySelector(".abre-ventana")
    const cierraVentanaEl = document.querySelector(".ventana__cierra-ventana")
    const cierreAutVentanaEl = document.querySelector(".ventana__link")
    const ventanaEl = document.querySelector(".ventana")
    
    abreVentanaEl.addEventListener("click",()=>{
        ventanaEl.style.display = "inherit";
    })
    cierraVentanaEl.addEventListener("click",()=>{
        ventanaEl.style.display = "none";
    })
    cierreAutVentanaEl.addEventListener("click",()=>{
        ventanaEl.style.display = "none";
    })


}