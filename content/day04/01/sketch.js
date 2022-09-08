let x1;
let x2;
let y1;
let y2;
let isX;
let currentHue;
let stop = false;

function setup(){
    createCanvas(windowWidth, windowHeight);
    colorMode(HSB);
    background(10);
    angleMode(DEGREES);
    //frameRate(8);
    //noLoop();

    strokeWeight(0.5);
    currentHue = 0;

    setStartingPoint();
}

function draw(){
    if(!stop){
        stroke(currentHue,50,100);
        x2 = random(0,windowWidth);
        y2 = random(0,windowHeight);
        line(x1,y1,x2,y2);
        x1 = x2;
        y1 = y2;
    }
    if(x2 > windowWidth-5 || y2 > windowHeight-5 || x2 < 5 || y2 < 5){
        stop = true;
        currentHue += 20;
        if(currentHue<=360){
            stop = false;
            setStartingPoint();
        }
    }
}

function setStartingPoint(){
    //random starting point at a border
    switch(round(random(0,3))){
        case 0:
            x1 = 0;
            isX = true;
            break;
        case 1:
            x1 = windowWidth;
            isX = true;
            break;
        case 2:
            y1 = 0;
            isX = false;
            break;
        case 3:
            y1 = windowHeight;
            isX = false;
            break;
    }

    if(isX){
        y1 = random(0,windowHeight);
    } else {
        x1 = random(0,windowWidth);
    }
}