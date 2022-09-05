let pointsX = Array();
let pointsY = Array();

function setup(){
    createCanvas(windowWidth, windowHeight);
    colorMode(HSB);
    background('beige');
    stroke(200,100,50);
    strokeWeight(1);
    angleMode(DEGREES);
    noLoop();
}

function draw(){
    //create 20 x and y values
    let pointnum = 20;
    for(let i=0;i<pointnum;i++){
        pointsX.push(random(0,windowWidth));
        pointsY.push(random(0,windowHeight));
    }
    //connect them all
    for(let startP=0;startP<pointnum*2;startP++){
        for(let endP = startP+1;endP<pointnum*2;endP++){
            line(pointsX[startP],pointsY[startP],pointsX[endP],pointsY[endP]);
        }
        console.log(startP + " ");
    }
}