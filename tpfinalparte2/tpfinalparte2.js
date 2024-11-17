let juego;
let musica;
let play = false;

function preload() {
  soundFormats('mp3');
  musica = loadSound('data/musica_fondo.mp3');
}

function setup() {
  createCanvas(640, 480);
  juego = new Juego();
}

function draw() {
  background(100);
  juego.cambioPantalla();
}

function keyPressed() {
  if (key === ' ' && juego.pantallaActual === "Juego") {
    juego.leon.disparar(); // Disparar proyectil
  }
  if (key === 'R' || key === 'r') {
    juego.leon.recargar(); 
  }
}


function reiniciarJuego() {


}

function mousePressed() {
  juego.mousePressed();
}
