let gap;
let edge;

function setup(){
    createCanvas(windowWidth, windowHeight, WEBGL);
    colorMode(HSB);
    background(10);
    angleMode(DEGREES);
    frameRate(8);
    //noLoop();

    if(windowHeight<=windowWidth){
        edge = windowHeight/3;
    } else {
        edge = windowWidth/3;
    }
    gap = edge/8;
}

function draw(){
    background(10);
    orbitControl();

    for(let x = 0;x <= edge;x+=gap){
        for(let y = 0;y <= edge;y+=gap){
            for(let z = 0;z <= edge;z+=gap){
                translate(x-edge/2, y-edge/2, z-edge/2);
                noFill();
                stroke(200,100,70);
                strokeWeight(0.5);
                box(noise(x, y, z)*gap);
                translate(edge/2-x, edge/2-y, edge/2-z);
            }
        }
    }
}