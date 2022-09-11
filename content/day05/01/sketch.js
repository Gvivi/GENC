let vectors = Array();
let epicenter;
let affectedRadius = 2;
let v;
let gap;
let side = 50;

function setup(){
    createCanvas(windowWidth, windowHeight);
    colorMode(HSB);
    background(10);
    angleMode(DEGREES);
    //frameRate(1);
    //noLoop();

    noStroke();
    fill(100);

    if(windowHeight<=windowWidth){
        gap = windowHeight/80;
    } else {
        gap = windowWidth/80;
    }

    for(let i = 0;i < side;i++){
        for(let j = 0;j < side;j++){
            vectors.push(createVector(i*gap+windowWidth/2-(side*gap/2),j*gap+windowHeight/2-(side*gap/2)));
        }
    }
    v = createVector(1,1);
    epicenter = createVector(random(windowWidth/2-(side*gap/2),windowWidth/2+(side*gap/2)),random(windowHeight/2-(side*gap/2),windowHeight/2+(side*gap/2)));
}

function draw(){
    background(10);
    //circle(epicenter.x,epicenter.y,10);

    /*if(affectedRadius > max(windowWidth/2,windowHeight/2)){
        reverse = true;
        for(let i = 0;i < vectors.length;i++){
            v.x = vectors[i].x;
            v.y = vectors[i].y;
            v.sub(epicenter);

            if(sqrt(sq(v.x)+sq(v.y)+sq(v.z))>affectedRadius){
                v.normalize();
                vectors[i].sub(v.div(2));

                circle(vectors[i].x,vectors[i].y,gap/5);
            } else {
                circle(vectors[i].x,vectors[i].y,gap/5);
            }
        }
        affectedRadius/=1.08;
    } else {*/
        for(let i = 0;i < vectors.length;i++){
            v.x = vectors[i].x;
            v.y = vectors[i].y;
            v.sub(epicenter);

            if(sqrt(sq(v.x)+sq(v.y)+sq(v.z))<=affectedRadius){
                v.normalize();
                vectors[i].add(v.mult(2));

                circle(vectors[i].x,vectors[i].y,gap/5);
            } else {
                circle(vectors[i].x,vectors[i].y,gap/5);
            }
        }
        affectedRadius*=1.08;
    /*}*/
}