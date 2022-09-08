let deg;
let off1;
let off2
let r1;
let r2;
let r3;
let mx;
let my;
let drawPosition;
let it = 0;
let shapeSize;
let shape;

function setup(){
    createCanvas(windowWidth, windowHeight);
    colorMode(HSB);
    background(10);
    angleMode(DEGREES);
    //frameRate(24);
    //noLoop();

    strokeWeight(1);
    stroke(250,100,100);
    noFill();

    deg = random(0.1,1);
    mx = windowWidth/2;
    my = windowHeight/2;
    off1 = round(random(-10,10));
    off2 = round(random(-10,10));
    if(windowHeight <= windowWidth){
        r1 = windowHeight*random(0.1,0.2);
    } else {
        r1 = windowWidth*random(0.1,0.2);
    }
    r2 = r1*random(0.2,1.2);
    r3 = r2*random(0.2,1.2);
    shapeSize = random(5,30);
    shape = floor(random(0,3));

}

function draw(){
    drawPosition = createVector((r1+r2)*sin(it*deg)+mx,(r1+r2)*cos(it*deg)+my);
    drawPosition.add(createVector((r2+r3)*sin(it*(deg+off1)),(r2+r3)*cos(it*(deg+off1))));
    drawPosition.add(createVector(r3*sin(it*(deg+off2)),r3*cos(it*(deg+off2))));
    switch(shape){
        case 0:
            square(drawPosition.x,drawPosition.y,shapeSize);
            break;
        case 1:
            circle(drawPosition.x,drawPosition.y,shapeSize);
            break;
        case 2:
            ellipse(drawPosition.x,drawPosition.y,shapeSize);
            break;
        default:
            background(0,80,80);
            console.log("error at switch");
            break;
    }
    it++;
}