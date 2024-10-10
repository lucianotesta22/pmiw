let pant = [];
let pantActual = 0;
let x1, y1, x2, y2;

function preload() {
  x1 = 120;
  x2 = 500;
  y1 = 200;
  y2 = 200;
  pant.push(pant1);
  pant.push(pant2);
  pant.push(pant3);
  pant.push(pant4);
  pant.push(pant5);
  pant.push(pant6);
  pant.push(pant7);
  pant.push(pant8);
  pant.push(pant9);
  pant.push(pant10);
  pant.push(pant11);
  pant.push(pant12);
  pant.push(pant13);
  pant.push(pant14);
  pant.push(pant15);
}
function setup() {
  textAlign(CENTER);
  createCanvas(640, 480);
}

function draw() {
  pant[pantActual](); // Llama a la función de la pantalla actual
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
  if (dist(mouseX, mouseY, x1, y1) < 25 && pantActual >= 15) {
    pantActual = 0;
  }
  if (dist(mouseX, mouseY, x2, y2) < 25 && pantActual >= 15) {
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
