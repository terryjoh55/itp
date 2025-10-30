function setup() {
  createCanvas(400, 400);
  noStroke(); 
  angleMode(DEGREES)
}

function drawObject(x, y, s) {
  push();
  translate(x, y);
  scale(s);
  fill(0); 
  ellipse(100, 100, 200, 200); 
  fill("red"); 
  ellipse(100, 100, 50, 200);
  push();                 
  translate(100, 100);   
  rotate(60);            
  fill("red");
  ellipse(0, 0, 50, 200); 
  pop()
  push();                 
  translate(100, 100);   
  rotate(300);            
  fill("red");
  ellipse(0, 0, 50, 200); 
  pop(); 
  fill(0); 
  ellipse(100, 100, 20, 20);
}

function draw() {
  drawObject(0, 0, 1);
  drawObject(0, 200, 1);
}