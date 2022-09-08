let vectors = Array();
let epicenter;
let affectedDia = 10;
let v;

function setup(){
    createCanvas(windowWidth, windowHeight);
    colorMode(HSB);
    background(10);
    angleMode(DEGREES);
    //frameRate(8);
    //noLoop();

    if(windowHeight<=windowWidth){
        edge = windowHeight/2;
    } else {
        edge = windowWidth/2;
    }
    gap = edge/40;

    for(let x = 0;x <= edge;x+=gap){
        for(let y = 0;y <= edge;y+=gap){
            vectors.push(createVector(x+windowWidth/2-edge/2,y+windowHeight/2-edge/2));
        }
    }
    v = createVector(1,1);
    epicenter = createVector(random(windowWidth/2-edge/2,windowWidth/2+edge/2),random(windowHeight/2-edge/2,windowHeight/2+edge/2));
}

function draw(){
    background(10);
    affectedDia+=10;
    circle(epicenter.x,epicenter.y,10);

    for(let i = 0;i < vectors.length;i++){
        v.copy(vectors[i]);
        v.sub(epicenter);
        console.log(mag(v));
        console.log(sqrt(sq(v.x)+sq(v.y)+sq(v.z)));

        if(sqrt(sq(v.x)+sq(v.y)+sq(v.z))<=affectedDia){
            console.log("WEEEE");
            v.normalize();
            vectors[i] = vectors[i].add(v.mult(1.5));

            noStroke();
            fill(100);
            circle(vectors[i].x,vectors[i].y,2);
        } else {
            noStroke();
            fill(100);
            circle(vectors[i].x,vectors[i].y,2);
        }
    }
}