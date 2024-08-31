function dibujoCuadrados(colorFill) {
  for (let loop = 0; loop <= 11; loop++) {
    let cuadX = posX;
    for (let i = 0; i <= 13; i++) {
      strokeWeight(3);
      stroke(140);
      fill(colorFill);  // Usar fill() para establecer el color de relleno
      rect(cuadX, posY, 40, 40);
      cuadX += 40;
      colorFill = (colorFill === 0) ? 255 : 0;  // Alterna entre 0 y 255
    }
    // Lógica para actualizar posX y posY
    if (posX === -30) {
      posX += 10;
      posY += 40;
    } else if (posX === -20 && posY < 120) {
      posX += 10;
      posY += 40;
    } else if (posX === -20 && posY === 120) {
      posX -= 10;
      posY += 40;
    } else if (posX === -10) {
      posX -= 10;
      posY += 40;
    } else if (posX === -20 && posY < 240) {
      posX += 10;
      posY += 40;
    } else if (posX === -20 && posY === 240) {
      posX -= 10;
      posY += 40;
    } else if (posX === -20 && posY < 280) {
      posX += 10;
      posY += 40;
    } else if (posX === -20 && posY === 280) {
      posX -= 10;
      posY += 40;
    }
  }
}
