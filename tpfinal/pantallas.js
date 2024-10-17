function pantalla(pantallaActual) {
  if (pantSig[pantallaActual].length === 1) {
    x1 = 60;
    x2 = 370;
    y1 = 150;
    y2 = 240;
    background(255);
    fill(0);
    textSize(32);
    image(img[pantallaActual], 0, 0, width, height);
    dibujar1boton(x1, y1);
    if (mouseIsPressed && dist(x1, y1, mouseX, mouseY) < 25) {
      pantActual = pantSig[pantActual];
    }
  } else if (pantSig[pantallaActual].length === 2) {
    x1 = 80;
    x2 = 370;
    y1 = 190;
    y2 = 240;
    background(255);
    fill(0);
    textSize(32);
    image(img[pantallaActual], 0, 0, width, height);
    dibujarBotones(x1, y1, x2, y2);
    if (mouseIsPressed && dist(x1, y1, mouseX, mouseY) < 25) {
      pantActual = pantActual + 1; 
    } else if (mouseIsPressed && dist(x2, y2, mouseX, mouseY) < 25) {
      pantActual = pantActual + 2;
    }
  }
}
