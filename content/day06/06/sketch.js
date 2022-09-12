let img;
let position = Array();
let x;
let y;
let c = Array();
let b = Array();

function preload() {
  img = loadImage('assets/adrian.png');
}

function setup() {
  createCanvas(min(windowHeight,600)*(3024/4032),min(windowHeight,600));
  noLoop();

  img.resize(min(windowHeight,600)*(3024/4032),min(windowHeight,600));
  image(img, 0, 0);
  v = createVector(0,1);
  
  for(let i=0;i<8000;i++){
    position.push(createVector(random(0,img.width),random(0,img.height)));
    c.push(get(position[i].x,position[i].y));
    //b = brightness(c);
  }
  console.log(c[1]);
  strokeWeight(1);
}

function draw() {
  for(let i=0;i<position.length;i++){
    x = position[i].x;
    y = position[i].y;
    
    noStroke();
    fill(c[i]);
    circle(x,y,map(c[i][0]+c[i][1]+c[i][2],0,765,0,height/40));
  }
  //save('myCanvas.jpg');
}