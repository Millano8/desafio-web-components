function footer(el){
    const footerCont = document.createElement("div");
    footerCont.innerHTML = `
    <h2 class="footer__tu-logo">Tu logo</h2>
    <div class="footer__links">
        <div class="footer__link-home">
            <a href="#inicio" class="formulario__link-texto">
                <img src="/imagenes/home.png" alt="">
                Home</a>
        </div>
        <div class="footer__link-servicios">
            <a href="#servicios" class="formulario__link-texto">
                <img src="/imagenes/user.png" alt="">
                Servicios</a>
        </div>
        <div class="footer_link-contacto">
            <a href="#contacto" class="formulario__link-texto">
                <img src="/imagenes/phone.png" alt="">
                Contacto</a>
        </div>
    </div>
    <div class="footer__links-redes">
        <a href="">
            <img src="/imagenes/Frame 24.png" alt="" class="footer__link-linkedin">
        </a>
        <a href="">
            <img src="/imagenes/Frame 26.png" alt="" class="footer__link-github">
        </a>
        <a href="">
            <img src="/imagenes/Frame 26 (1).png" alt="">
        </a>     
    </div>
    <div class="footer__link-apx">
        <a href="https://apx.school" class="footer__link-apx-color">2022 - https://apx.school</a>
    </div>
    
    `


    el.appendChild(footerCont)
}

