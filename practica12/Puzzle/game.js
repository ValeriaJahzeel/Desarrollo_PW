var buttonContainer = document.getElementById('casillas');
var buttons = buttonContainer.getElementsByTagName('button');

var botones = [];

//Revuelve los numeros
for (var i = 0; i < 16; i++) {
	var numero = Math.floor(Math.random() * 16);
	while (botones.includes(numero)) {
		numero = Math.floor(Math.random() * 16);
	}

	botones.push(numero);
	buttons[i].innerHTML = numero;
}

//Determina si ya se resolvio
function estaResuelto() {
	for (var i = 0; i < buttons.length - 1; i++) {
		if (parseInt(buttons[i].innerHTML) !== i + 1) {
			return false;
		}
	}
	return parseInt(buttons[buttons.length - 1].innerHTML) === 0;
}

//Intercambia los botones
function intercambiarBotones(indice1, indice2) {
	var temp = botones[indice1];
	botones[indice1] = botones[indice2];
	botones[indice2] = temp;
	buttons[indice1].innerHTML = botones[indice1];
	buttons[indice2].innerHTML = botones[indice2];
}

//Mueve los botones
function moverBoton(indiceBoton) {
	var indiceCero = botones.indexOf(0);

	if ((indiceBoton === indiceCero - 1 && indiceCero % 4 !== 0) ||
		(indiceBoton === indiceCero + 1 && indiceCero % 4 !== 3) ||
		indiceBoton === indiceCero - 4 || indiceBoton === indiceCero + 4) {
		intercambiarBotones(indiceBoton, indiceCero);

		if (estaResuelto()) {
			alert('¡Felicidades! ¡Has resuelto el rompecabezas!');
			const texto = document.getElementById("cabecera");
			texto.innerText = "¡Completado!!";
			detenerCronometro();
		}
	}
}

for (var i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener('click', function () {
		moverBoton(Array.prototype.indexOf.call(buttons, this));
	});
}

//Funcion del cronometro
var tiempoTranscurrido = 0;
var intervalo;

function iniciar() {
  intervalo = setInterval(function() {
    tiempoTranscurrido++;
    document.getElementById("tiempo").innerHTML = tiempoTranscurrido;
  }, 1000);
}

function detenerCronometro() {
	clearInterval(intervalo);
   }