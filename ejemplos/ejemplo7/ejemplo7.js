function abrirRegalo(event) {
    const foto = event.currentTarget;
    foto.removeEventListener('click', abrirRegalo);

    const regaloCerrado = document.querySelector('#regalo-cerrado');
    const regaloAbierto = document.querySelector('#regalo-abierto');

    regaloCerrado.classList.add('oculto');
    regaloAbierto.classList.remove('oculto');
}

const foto = document.querySelector('#regalo-cerrado img');
foto.addEventListener('click', abrirRegalo);