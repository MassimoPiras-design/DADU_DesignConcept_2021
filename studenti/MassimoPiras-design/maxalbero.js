let w = 600;
let maxLevel = 2
let split = 4
let level = 0

function setup() {
  createCanvas(w, w);
  
  
}

function draw() {
  background(200);
  fill (255,0,255)
  stroke(40,40,40)
  //noStroke()
  rect (0,300,40,20);
  traslate(300,350)
  rotate(PI);

}
function drawBranch(){
    let a = 0.8 // angolo della divisione
    let b = 100/(level +1) // lunghezza ramo
    let c = 20/(level +1) //lo spessore del ramo
    stroke (40,40,40)
    strokeWeight(c)
    push ();
    if (level=0)rotate (-0.5*(split-1)*a);
    line (0,0,0,b)
    traslate (0,b) // sposta la fine del ramo
    if(level<maxLevel-1){//esci quando si raggiunge lo stato di base
    level ++;
    for ( let i = 0; i < split; i ++);
    drawBranch();
    rotate(a);


}
level -- ;
for ( let i = 0; i < split; i ++);
    drawBranch();
    rotate(a);

pop();

function mousePressed(){
    loop ();
}
function keyTyped(){
  console.log(key);
}