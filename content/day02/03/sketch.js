let gap;
let edge;
let xValues = Array();
let yValues = Array();
let zValues = Array();
let explosionX;
let explosionY;
let explosionZ;
let off = 4;
let affectedDia = 50;
let v;

function setup(){
    createCanvas(windowWidth, windowHeight, WEBGL);
    colorMode(HSB);
    background(10);
    angleMode(DEGREES);
    //frameRate(8);
    //noLoop();

    if(windowHeight<=windowWidth){
        edge = windowHeight/6;
    } else {
        edge = windowWidth/6;
    }
    gap = edge/3;

    for(let x = 0;x <= edge;x+=gap){
        for(let y = 0;y <= edge;y+=gap){
            for(let z = 0;z <= edge;z+=gap){
                xValues.push(x);
                yValues.push(y);
                zValues.push(z);
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
    affectedDia+=1;

    for(let i = 0;i < xValues.length;i++){
        if(sqrt(sq(xValues[i]-explosionX)+sq(yValues[i]-explosionY)+sq(zValues[i]-explosionZ))<=affectedDia){
            v = createVector(xValues[i]-explosionX, yValues[i]-explosionY, zValues[i]-explosionZ);
            v.normalize();
            xValues[i]+=(v.x)*off;
            yValues[i]+=(v.y)*off;
            zValues[i]+=(v.z)*off;
            translate(xValues[i]-edge/2, yValues[i]-edge/2, zValues[i]-edge/2);
            noFill();
            stroke(200,100,70);
            strokeWeight(0.5);
            sphere(gap*0.25,6,6);
            translate(-(xValues[i]-edge/2), -(yValues[i]-edge/2), -(zValues[i]-edge/2));
        } else {
            translate(xValues[i]-edge/2, yValues[i]-edge/2, zValues[i]-edge/2);
            noFill();
            stroke(200,100,70);
            strokeWeight(0.5);
            sphere(gap*0.25,6,6);
            translate(-(xValues[i]-edge/2), -(yValues[i]-edge/2), -(zValues[i]-edge/2));
        }
    }
}