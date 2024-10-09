let pant = [];
let pantActual = 0;

function preload() {
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
  createCanvas(400, 400);
}

function draw() {
  pant[pantActual](); // Llama a la función de la pantalla actual
}

function mousePressed() {
  // Cambiar a la siguiente pantalla al hacer clic
  if(dist(mouseX, mouseY, (width/2), (height/2)) < 25){ 
   pantActual = (pantActual + 1);
  }
 // cambiar a pantalla 0
 if(dist(mouseX, mouseY, (width/2), (height/2)) < 25 && pantActual == 15){
   pantActual = 0;
   }
}

function drawButton(x, y) {
  fill(255);
  ellipse((width/2), (height/2), 50,50);
  fill(0);
  textSize(16);
  text('Siguiente', x , y + 60);
}
