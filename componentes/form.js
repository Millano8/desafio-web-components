function form(el) {
    const formEl = document.createElement("div");
    formEl.className = "form__div"
    formEl.innerHTML = `
    <div class= "contac__titulo">
        <h2 class="form__titulo">Escribime</h2>
    </div>
    
    <form class="form">

        

        <div class="form__nombre">
            <label for="">Nombre</label>
            <textarea placeholder="Tu nombre" class="form__nombre-textarea"></textarea>
        </div>

        <div class="form__mail">
            <label for=>Email</label>
            <textarea placeholder="tu@mail.com" type="Email" class="form__mail-textarea"></textarea>
        </div>

        <div class="form__mensaje">
            <label for=>Mensaje</label>
            <textarea placeholder="Deja tu mensaje aqui" class="form__mensaje-textarea"></textarea>
        </div>

        <button class="form__button">Enviar
            <img src="./imagenes/send.png" alt="">
        </button>
    </form>
    
    `
    
    
    el.appendChild(formEl)
}