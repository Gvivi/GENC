let img;
let m;
let n = 80; //number of circles
let r = Array(); //random radiuses(?)
let p;
let c = Array();
let colorSteps = 20; //colors that are used for lerping in one circle
let gradient;
let steps = 420; //steps in a circle
let affectedRad;
let randomVec;


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
  
  angleMode(DEGREES);
  noStroke();

  image(img, 0, 0);

  randomVec = createVector(random(width),random(height));
  m = createVector(width/2, height/2);
  affectedRad = windowHeight/4;

  for(let i=0;i<n;i++){
    r.push(random(sqrt(sq(m.x)+sq(m.y))));
  }
}

function draw() {
  image(img, 0, 0);

  for(let i=0;i<r.length;i++){
    for(let j=0;j<steps;j+=steps/colorSteps){
      c.push(get(m.x+r[i]*sin(j),m.y+r[i]*cos(j)));
    }
    for(let j=0;j<steps;j++){
      p = createVector(m.x+r[i]*sin(map(j,0,steps,0,360)),m.y+r[i]*cos(map(j,0,steps,0,360)));

      let v = randomVec.copy();
      v.sub(p);
      let distToMouse = sqrt(sq(v.x)+sq(v.y));

      if(distToMouse<affectedRad){
        p.x += v.x/2;
        p.y += v.y/2;
      }
      
      let section = floor(j/steps*colorSteps);
      
      if(section<colorSteps-1){
        gradient = lerpColor(color(c[section][0],c[section][1],c[section][2]),color(c[section+1][0],c[section+1][1],c[section+1][2]),j/steps*colorSteps-floor(j/steps*colorSteps));
      } else {
        gradient = lerpColor(color(c[section][0],c[section][1],c[section][2]),color(c[0][0],c[0][1],c[0][2]),j/steps*colorSteps-floor(j/steps*colorSteps));
      }

      fill(gradient);
      circle(p.x,p.y,r[i]*0.05);
    }
    c = [];
  }
}