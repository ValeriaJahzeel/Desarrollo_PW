function onClick() {
    console.log("hiciste clic");
}
const boton = document.querySelector("#boton");

//Se pone entre comillas la accion
boton.addEventListener("click", onClick);
