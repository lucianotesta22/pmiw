//https://youtu.be/VfbwxX4VCiM
let loop, colors;
let posX = -30;
let posY = 0;
let check;
let foto;

function preload() {
  // Cargar la imagen antes de que se ejecute el setup
  foto = loadImage('data/F_16.jpg');
}

function setup() {
  createCanvas(800, 400);
  colors = 255;
  textAlign(CENTER);
  textSize(20);
}

function draw() {
  if (clickBoton() == false) {
    background(255);
    fill(0);
    text("Presione el botón para ver \n la ilusión óptica", width / 2, 100);
    strokeWeight(2);
    stroke(0);
    fill(255, 0, 0);
    ellipse(width / 2, height / 2, 50, 50);
    loop = 0;
    posX = -30;
    posY = 0;
  } else {
    translate(width / 2, 0);
    dibujoCuadrados(colors);
    translate(-width / 2, 0);
    image(foto, 0, 0, 400, 400);
  }
}

function clickBoton() {
  return mouseIsPressed && dist(mouseX, mouseY, width / 2, height / 2) < 25;
}
