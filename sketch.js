function setup() {
  createCanvas(800, 500); 
}

function draw() {
  background(200, 235, 255); 

  // ARCOBALENO
  push();
  noFill(); 
  let sw = 18; // Spessore di ogni singola fascia
  strokeWeight(sw);

  // Arrey: Colori arcobaleno
  let rainbowColors = [
    color(230, 80, 80, 180),   
    color(240, 140, 50, 180), 
    color(250, 220, 50, 180),  
    color(100, 200, 100, 180), 
    color(70, 150, 220, 180),  
    color(70, 90, 180, 180),   
    color(140, 80, 170, 180)   
  ];

  let arcCenterX = 235;
  let arcCenterY = 540; // centro di tutte le ellissi, che e piu basso della Canvas
  let arcBaseSizeX = 800; 
  let arcBaseSizeY = 880; 

  // 7 ellissi concentriche
  for (let i = 0; i < 7; i++) { //ciclo che si ripete sette volte da 0 a 6
    stroke(rainbowColors[i]);
    ellipse(arcCenterX, arcCenterY, arcBaseSizeX - (i * sw * 2), arcBaseSizeY - (i * sw * 2)); //ogni volta la fascia dell'arcobaleno si rimpicciolisce di 18px a destra, sinistra, in basso e su
  }
  pop();
  
  // ELEMENTI CON CONTORNO NERO
  push();
  noStroke();

  // COLLINE
  fill(175, 230, 140); 
  // Collina sinistra
  ellipse(200, 550, 700, 300);
  // Collina destra
  ellipse(650, 550, 750, 350);

  // PENTOLA D'ORO
  stroke(0); 
  strokeWeight(2); 
  let potX = 540;
  let potY = 350;

  fill(70, 70, 70); 
  // piedini della pentola
  triangle(potX - 45, potY + 30, potX - 60, potY + 60, potX - 20, potY + 45);
  triangle(potX + 45, potY + 30, potX + 60, potY + 60, potX + 20, potY + 45); // right per simmetria da left
  // Corpo principale della pentola
  ellipse(potX, potY, 150, 110);
  
  // Oro
  fill(255, 220, 0); 
  ellipse(potX, potY - 45, 130, 50);

  // ANIMAZIONE oro brilla
// Raggio sinistro
  if (frameCount % 40 < 20) { //il ciclo si ripete ogni 40 secondi, nei primi 20 la condizione è vera quindi il raggio appare, da 20 a 39 no
    push(); 
    translate(potX - 30, potY - 65); // Sposta l'origine 
    rotate(-PI / 4); //45 gradi verso sinistra
    rectMode(CENTER); // rettangolo partendo dal suo centro
    rect(0, 0, 6, 20, 10); 
    pop(); 
  }

  // Raggio centrale
  if (frameCount % 60 < 30) {
    push();
    translate(potX, potY - 85);
    rectMode(CENTER);
    rect(0, 0, 8, 40, 10); 
    pop();
  }

  // Raggio destro
  if (frameCount % 50 < 25) {
    push();
    translate(potX + 30, potY - 70);
    rotate(PI / 4); // 45 gradi verso destra
    rectMode(CENTER);
    rect(0, 0, 7, 30, 10);
    pop();
  }
  pop();

}