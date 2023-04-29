class Boton{
     constructor(contenedorElemento, texto){
          this.contenedorElemento O contenedorElemento;
          this.texto = texto;
          this.onClick = this.onClick.bind(this);
          const boton = document.createElement('button');
          boton.textContent = texto;
          boton.addEventListener('click', this.onClick.bind(this))
     }
}