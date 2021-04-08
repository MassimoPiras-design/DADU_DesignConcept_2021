let w= -50
let o = 20
let s= 50 // la y della M
let p= 3 //spessore linea M
let q=3 // spessore linea P
let h= 200
        
let ow1=(0,255,0)//colore linea m 
let ow2=(0,0,255)// colore linea P

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(128);
  
  
  //lettera P
  strokeWeight(q)
  stroke(ow2)
  fill(255,0,0)
  rect( 200-o,50,20,250) 
  arc(220-o,130,160,160,300,PI/2)
  fill(200,200,0)
 fill(128)
  arc(220-o,130,120,120,300,PI/2,CHORD)
  strokeWeight(p)
  stroke(ow1)
  fill(0,0,255)
  
  //lettera M
  rect(10+ o-w,s,20,250)
  line(30+(o-w),s,70+(o-w),150+s)
  line(70+o-w,150+s,110+(o-w),s)
  rect( 110+o-w,s,20,250)
  
  
}

function keyTyped(
){
  // quando schiaccio un tasto nella tastiera
  console.log(key);
   w= random (-40, 50)
  o = random (4, 50)
  s= random (10,50)
  p= random(6,9)
  q= random (1,7)
  ow1= random(0,128)
  ow2=random(255,128)
}