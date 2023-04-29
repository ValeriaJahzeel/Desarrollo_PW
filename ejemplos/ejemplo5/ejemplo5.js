function abrirRegalo(event) {
    const foto = event.currentTarget;
    foto.src = 'luffy.jpg';

    const mensaje = document.querySelector('h1');
    mensaje.textContent = 'Felicidades';

    foto.removeEventListener('click', abrirRegalo);
}

const foto = document.querySelector('img');
foto.addEventListener('click', abrirRegalo);