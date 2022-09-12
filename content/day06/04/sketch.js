let img;
let position = Array();
let v;
let x;
let y;
let r;
let s;
let c;

function preload() {
  img = loadImage('assets/adrian.png');
}

function setup() {
  createCanvas(min(windowHeight,600)*(3024/4032),min(windowHeight,600));
  noLoop();

  img.resize(min(windowHeight,600)*(3024/4032),min(windowHeight,600));
  image(img, 0, 0);
  v = createVector(0,1);
  
  for(let i=0;i<10000;i++){
    position.push(createVector(random(0,img.width),random(0,img.height)));
  }
  strokeWeight(1);
}

function draw() {
  for(let i=0;i<position.length;i++){
    x = position[i].x;
    y = position[i].y;
    let c = get(position[i].x,position[i].y);
    for(let j=i+1;j<position.length;j++){
      v = position[j].copy();
      v.sub(position[i]);
      
      if(v.mag()<img.height/40 && position[j].y < position[i].y){
        r = position[j].x;
        s = position[j].y;
        stroke(c);
        line(x,y,r,s);
      }
    }
  }
  //save('myCanvas.jpg');
}