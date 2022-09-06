let gap;

function setup(){
    createCanvas(windowWidth, windowHeight);
    colorMode(HSB);
    background(10);
    angleMode(DEGREES);
    frameRate(8);
    //noLoop();

    gap = windowHeight/20;
}

function draw(){
    background(10);
    for(let x = gap;x <= windowWidth-gap;x+=gap){
        for(let y = gap;y <= windowHeight-gap;y+=gap){
            noStroke();
            fill(20,100,70);
            circle(x,y,random(5,50));
            stroke(200,100,70);
            strokeWeight(1);
            noFill();
            circle(x,y,random(5,50));
        }
    }
}