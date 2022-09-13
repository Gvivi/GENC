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
  
  noLoop();
  rectMode(CORNERS);
  noStroke();

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
    
    let noiseVal = noise(x*0.02, i*0.02);
    let xTemp = x+noiseVal*200-100;
    fill(get(x,y[i]));
    //rect(x,y[i],width,y[i+1]);
    for(let j = xTemp;j<=width;j++){
      noiseVal = noise(j*0.01, i*0.01);
      circle(j,y[i]+noiseVal*200-100,height/n*3);
    }
  }

  //save('03.jpg');
}