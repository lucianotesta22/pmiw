let pant = [];
let pantActual = 0;
let x1, y1, x2, y2;

function preload() {
  for (var i = 0; i <= 16; i++) {
    pant[i] = "pantalla " + i;
  }
}
function setup() {
  textAlign(CENTER);
  createCanvas(640, 480);
}

function draw() {
  // Llama a la función de la pantalla actual
  pantallas();
}

function mousePressed() {
  // Cambiar a la siguiente pantalla al hacer clic
  if (dist(mouseX, mouseY, x1, y1) < 25) {
    pantActual = (pantActual + 1);
  }
  if (dist(mouseX, mouseY, x2, y2) < 25) {
    pantActual = (pantActual + 2);
  }
  // cambiar a pantalla 0
  if (dist(mouseX, mouseY, x1, y1) < 25 && pantActual >= 16) {
    pantActual = 0;
  }
  if (dist(mouseX, mouseY, x2, y2) < 25 && pantActual >= 16) {
    pantActual = 0;
  }
}

function dibujarBoton( x1, y1, x2, y2 ) {
  fill(255);
  ellipse(x1, y1, 50, 50);
  ellipse(x2, y2, 50, 50);
  fill(0);
  textSize(16);
  text('Opcion 1', x1, y1 - 40);
  text('Opcion 2', x2, y2 - 40);
}

