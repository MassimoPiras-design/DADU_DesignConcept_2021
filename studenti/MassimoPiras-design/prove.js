let w = 600;
let y = 20;
let x= 10;

// The statements in the setup() function
// execute once when the program begins
function setup() {
  createCanvas(720, 400); // Size must be the first statement
  stroke(128); // Set line drawing color to white
  frameRate(20);
}
// The statements in draw() are executed until the
// program is stopped. Each statement is executed in
// sequence and after the last line is read, the first
// line is executed again.
function draw() {
  background(255,0,255); // Set the background to black
  y = y - 1;
  if (y < 0) {
    y = height;
   
  }
  //line(0, y, width, y);
  ellipse(360,y,height,y)

x = x - 2;
  if (x <0) 
    x = height;
  
    square (x,20,width,x)
  noFill(0)
  fill(255,0,0)
  
   
  
  
  
}