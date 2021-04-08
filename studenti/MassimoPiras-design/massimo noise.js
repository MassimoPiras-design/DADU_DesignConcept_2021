let w = 600
let t = 0
function setup() {
  createCanvas(w, w);
}

function draw() {
  background(220);
   //linea che taglia i due parti orizzontali
  //line(0,300,600,300);
  let n = 6 // numero di linee
  let m = w/n // distanza tra le linee 
  
  // voglio disegnare molte linee orizzontali, la sintassi e' questa, //questo è un loop, se volessi disegnare 10 linee
  for (let fila= 0; fila <n; fila ++){
    line(0,fila*m,w,fila*m);
    // voglio disegnare molte linee verticali
   line ( fila*m,0,fila*m,w)
    //creo un altro loop per inserire forme , copio il loop e lo modifico
  for (let col= 0; col <n; col ++){
    fill(0,255,0,)
    
    //aggiungo (m/2) per mettere il cerchio al centro;
    // aggiungo (+ fila*4) e ( + col* 4) per incrementare il diametro , in modo progressivo, oppure inserisco le variabili e l'indice
    let x= col*m;
    let y = fila*m
    let xc = x+m/2
    let yc = y+m/2
    // adesso inserisco anche l'indice
    let i = (fila*n)+col // indice
    // sostituisco questa formula del cerchio
  //circle(col*m+(m/2),fila*m+(m/2),12+ (+ fila*4)+( + col* 4) )
    //circle(xc,yc,12+ i )
    // possiamo inserire una variabile:
    let d = map(i,0,n*n,2,m)
    // map funziona come una proporzione: esiste una variabile i che va da 0 a n*n e una varibile d che va da 2 a n
     //random value-> valore compreso
  let v = noise (x/100+t,y/100)
  let vg = map(v,0,1,0,255)
  circle(col*m,fila*m,d)
  rectMode(CENTER)
  fill ( vg)
  
    
     square(xc,yc,m)
    let h = noise (x/100+t,y/100)
  let hg = map(h,0,1,0,255)
    
    circle(xc,yc,12+ d )
    
    let g = map( col,0,n,255,0) 
  
  
    
 
   
  fill(0)
  textAlign(CENTER,CENTER)
  text(i,xc,yc)   
      
  
  }
    
    
    
  
  
}
  t = t+0.06
}