let textos = [];
let img = [];
let pantActual = 0;
let x1, y1, x2, y2;
let pantSig = {
  0: [1],
  1: [2],
  2: [3, 4],
  3 : [0],
  4 : [5],
  5 : [6, 7],
  6 : [8],
  7: [13],
  8 : [9],
  9 : [10],
  10 : [11],
  11 : [12],
  12 : [14],
  14 : [15],
  };

function preload() {
  for (var i = 0; i <= 14; i++) {
    textos[i] = "pantalla " + i;
    img[i] = loadImage("data/pantalla" + i + ".jpg");
  }
}
function setup() {
  textAlign(CENTER);
  createCanvas(640, 480);
}

function draw() {
  // Llama a la función de las pantallas
  pantalla(pantActual);
}
function dibujar1boton( x1, y1, x2, y2 ) {
  fill(255);
  ellipse(x1, y1, 50, 50);
  ellipse(x2, y2, 50, 50);
  textSize(16);
  text('Siguiente', x1, y1 - 40);
}
function dibujarBotones( x1, y1, x2, y2 ) {
  fill(255);
  ellipse(x1, y1, 50, 50);
  ellipse(x2, y2, 50, 50);
  fill(0);
  textSize(16);
  text('Opcion 1', x1, y1 - 40);
  text('Opcion 2', x2, y2 - 40);
}
