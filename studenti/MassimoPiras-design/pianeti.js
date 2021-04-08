let w = 600;
let r = w/4; // raggio // radius
let a = 45; // angle

function setup() {
  createCanvas(w, w);
  colorMode(HSB); // R,G,B 0-> 0-255 -> H 0-360 S 0-100 B 0-100
}

function draw() {
  background(0,0,60);
  //noFill();
  let h = map (sin(a),-1,1,120,360);
  fill(h,80,80);
  circle(w/2,w/2, r*2);
  //ellipse(w/2,w/2,r*2,r*3)

  let x = w/2 + cos(a) * r;
  let y = w/2 + sin(a) * r;


    fill(h,h,100);
  noStroke()
  circle(x,y,36);

  let z = w/2 + cos(a) * r;
  let k = w/2 + sin(a) * r;
  
    circle(k,z,36);

  a = a + 0.01;
  // planet

  let xp = x + cos(a*2) * r;
  let yp = y + sin(a*2) * r;
  
  circle(xp, yp,18);
 fill(255,255,255);
  ellipse(xp+ sin(a*2) * r/3,yp+ cos(a*2) * r/3, 28,9)
  ellipse(xp+ sin(a*2) * r/3,yp+ cos(a*2) * r/3, 9,28)
  fill( 0,h,0)
  let zp = z + cos(a*2)*r/2
  let kp = k + sin(a*2)*r/2
  circle(zp, kp,18);


}

function keyTyped(){
  console.log(key);
}