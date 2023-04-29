function abrirRegalo(event) {
    const nuevoHeader = document.createElement('h1');
    nuevoHeader.textContent = 'Felicidades';

    const nuevaFoto = document.createElement('img');
    nuevaFoto.src = 'luffy.jpg';

    const container = document.querySelector('#container');
    container.innerHTML = '';
    container.appendChild(nuevoHeader);
    container.appendChild(nuevaFoto);
}

const foto = document.querySelector('img');
foto.addEventListener('click', abrirRegalo);
