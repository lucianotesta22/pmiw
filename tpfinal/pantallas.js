// Definición de pantallas
function pantallas() {
    rect(0,0,width,height);
    x1 = 60;
    x2 = 370;
    y1 = 150;
    y2 = 240;
    background(255);
    fill(0);
    textSize(32);
    text(pant[pantActual], width/2, 100);
    dibujarBoton(x1, y1, x2, y2);
}
