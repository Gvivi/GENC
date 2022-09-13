let img;
let y = Array();
let x;
let n = 200;

function preload() {
  img = loadImage('assets/jungle.jpeg');
}

function setup() {
  if(img.height>windowHeight){
    img.resize(windowHeight*(img.width/img.height),windowHeight);
  } else if(img.width>windowWidth){
    img.resize(windowWidth,windowWidth*(img.height/img.width));
  }
  createCanvas(img.width,img.height);
  
  //noLoop();
  rectMode(CORNERS);

  image(img, 0, 0);

  x = random(width);
  y.push(0);
  
  for(let i=0;i<n-1;i++){
    y.push(random(height));
  }
  sort(y);
}

function draw() {
  image(img, 0, 0);
  for(let i=0;i<y.length-1;i++){
    
    noStroke();
    fill(get(mouseX,y[i]));
    rect(mouseX,y[i],width,y[i+1]);
  }
  fill(get(mouseX,y[y.length-1]));
  rect(mouseX,y[y.length-1],width,height);

  //save('01.jpg');
}