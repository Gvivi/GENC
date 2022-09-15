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
  if(img.height>windowHeight){
    img.resize(windowHeight*(img.width/img.height),windowHeight);
  } else if(img.width>windowWidth){
    img.resize(windowWidth,windowWidth*(img.height/img.width));
  }
  createCanvas(img.width,img.height);
  noLoop();

  image(img, 0, 0);
  v = createVector(0,1);
  
  for(let i=0;i<width*2;i++){
    position.push(createVector(random(0,img.width),random(0,img.height)));
  }
  strokeWeight(height/500);
}

function draw() {
  for(let i=0;i<position.length;i++){
    x = position[i].x;
    y = position[i].y;
    let c = get(position[i].x,position[i].y);
    for(let j=i+1;j<position.length;j++){
      v = position[j].copy();
      v.sub(position[i]);
      
      if(position[i].y-position[j].y<img.height/30 && position[i].y-position[j].y>img.height/50 && position[j].y < position[i].y){
        r = position[j].x;
        s = position[j].y;
        stroke(c);
        line(x,y,r,s);
      }
    }
  }
  //save('myCanvas.jpg');
}