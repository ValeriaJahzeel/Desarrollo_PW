function abrirRegalo(){
    const foto=document.querySelector("img");
    foto.src="luffy.jpg";
    foto.removeEventListener("click",abrirRegalo);
}
const foto=document.querySelector("img");
foto.addEventListener("click", abrirRegalo);
