let gap;
let edge;
let xValues = Array();
let yValues = Array();
let zValues = Array();
let explosionX;
let explosionY;
let explosionZ;
let it = 0;

function setup(){
    createCanvas(windowWidth, windowHeight, WEBGL);
    colorMode(HSB);
    background(10);
    angleMode(DEGREES);
    //frameRate(8);
    //noLoop();

    if(windowHeight<=windowWidth){
        edge = windowHeight/5;
    } else {
        edge = windowWidth/5;
    }
    gap = edge/3;

    for(let x = 0;x <= edge;x+=gap){
        for(let y = 0;y <= edge;y+=gap){
            for(let z = 0;z <= edge;z+=gap){
                xValues.push(x-edge/2);
                yValues.push(y-edge/2);
                zValues.push(z-edge/2);
            }
        }
    }
    explosionX = random(min(xValues),max(xValues));
    explosionY = random(min(yValues),max(yValues));
    explosionZ = random(min(zValues),max(zValues));
}

function draw(){
    background(10);
    orbitControl();
    it+=0.1;

    for(let i = 0;i < xValues.length;i++){
        translate((explosionX - xValues[i])*it, (explosionY - yValues[i])*it, (explosionZ - zValues[i])*it);
        noFill();
        stroke(200,100,70);
        strokeWeight(0.5);
        sphere(10,6,6);
        translate((xValues[i] - explosionX)*it, (yValues[i] - explosionY)*it, (zValues[i] - explosionZ)*it);
    }
}