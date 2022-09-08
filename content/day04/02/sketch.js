let positions = Array();
let n = 40;
let deg = 360/(2*n);
let r;

function setup(){
    createCanvas(windowWidth, windowHeight);
    colorMode(HSB);
    background(10);
    angleMode(DEGREES);
    //frameRate(8);
    noLoop();

    strokeWeight(1);
    stroke(250,100,100);
    fill(100,100,100);

    if(windowHeight <= windowWidth){
        r = windowHeight*0.375;
    } else {
        r = windowWidth*0.375;
    }
    createOuterCircle();
}

function draw(){
    for(let i=1;i<n;i++){
        line(positions[i].x,positions[i].y,positions[i*2].x,positions[i*2].y);
        line(positions[n+i].x,positions[n+i].y,positions[i*2].x,positions[i*2].y);
    }
}

function createOuterCircle(){
    for(let i=0;i<2*n;i++){
        positions.push(createVector(r*sin(i*deg)+windowWidth/2,r*cos(i*deg)+windowHeight/2,5));
        //circle(positions[i].x,positions[i].y,5);
    }
}