function abrirRegalo(event) {
    const foto = event.currentTarget;
    foto.src = "luffy.jpg";
    foto.removeEventListener("click", abrirRegalo);
}
const foto = document.querySelector("img");
foto.addEventListener("click", abrirRegalo);
