let w = 600;
let r = w/4; // raggio // radius
let a = 0; // angle

function setup() {
  createCanvas(w, w);
  coloMode(HSB)
}

function draw() {
  background(120,50,99);
  //noFill();
  let h = map (sin(a),-1,1,0,360)
  fill(h,80,80)
  circle(w/2,w/2, r*2);

  let x = w/2 + cos(a) * r;
  let y = w/2 + sin(a) * r;

  fill(0);
  circle(x,y,36);
  a = a + 0.01;
  // planet
  let xp = x + cos(a*2) * r/3;
  let yp = y + sin(a*2) * r/3;
  circle(xp, yp, 18);
}

function keyTyped(){
  console.log(key);
}
