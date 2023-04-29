function tecladaso(event) {
    console.log('onKeyUp:' + event.key);
    const foto = document.querySelector("img");
    foto.src = "luffy.jpg";
}

document.addEventListener('keyup', tecladaso);