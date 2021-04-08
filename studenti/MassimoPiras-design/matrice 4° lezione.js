let w = 600
let  t= 0
function setup() {
  createCanvas(w, w);
}

function draw() {
  background(220);
  let n=12
  let m= w/n
  
  for (let fila=0; fila<n; fila++) {
  
  for(col=0;col<n;col++){
  let x= col*m
  let y = fila*m
  let xc = x + m/2
  let yc = y = y + m/2
  let i = (fila*n)+ col
  let d = map (i,0,n*n,2,m );
  //let g = map( i,0,n*n,255,0) 
  let g = map( col,0,n,255,0) 
  
   //random value-> valore compreso
  let v = noise (x/100+t,y/100)
  let vg = map(v,0,1,0,255)
  //circle(col*m,fila*m,d)
  rectMode(CENTER)
  fill ( vg)
    
  square(xc,yc,m)
   
  fill(0)
  textAlign(CENTER,CENTER)
  text(i,xc,yc)   
      
    }
    
  }
  t= t+0.01
}