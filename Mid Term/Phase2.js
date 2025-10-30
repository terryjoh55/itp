function setup() {
  createCanvas(200, 200); 
  noStroke(); 
  angleMode(DEGREES)
}
function draw() {
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