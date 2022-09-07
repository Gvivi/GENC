let mx;
let my;
let a;
let deg;
let maxR;
let r;
let newVector;
let circleR;
let error = false;

function setup(){
    createCanvas(windowWidth, windowHeight);
    colorMode(HSB);
    fill(30,40,100);
    background(10);
    angleMode(DEGREES);
    //frameRate(8);
    //noLoop();

    if(windowHeight<=windowWidth){
        maxR = windowHeight/2;
    } else {
        maxR = windowWidth/2;
    }
    mx = windowWidth/2;
    my = windowHeight/2;
    newVector = createVector(0,0);
    circleR = maxR/30;
}

function draw(){
    background(10);

    //display years
    a = year() % 1000;
    r = maxR*0.75;
    deg = 360/100;

    for(let i=0;i<a;i++){
        newVector.set(r*sin(i*deg), r*cos(i*deg));
        circle(r*sin(i*deg)+mx, r*cos(i*deg)+my,circleR);
    }

    //display months
    r = maxR*0.5;
    deg = 360/12;

    for(let i=0;i<month();i++){
        newVector.set(r*sin(i*deg), r*cos(i*deg));
        circle(r*sin(i*deg)+mx, r*cos(i*deg)+my,circleR);
    }

    //display days
    r = maxR*0.25;

    switch(month()){
        case 1:
            deg = 360/31;
            break;
        case 2:
            //leap year check
            if(year()%400==0){
                deg = 360/29;
            } else if(year()%100==0){
                deg = 360/28;
            } else if(year()%4==0){
                deg = 360/29;
            } else {
                deg = 360/28;
            }
            break;
        case 3:
            deg = 360/31;
            break;
        case 4:
            deg = 360/30;
            break;
        case 5:
            deg = 360/31;
            break;
        case 6:
            deg = 360/30;
            break;
        case 7:
            deg = 360/31;
            break;
        case 8:
            deg = 360/31;
            break;
        case 9:
            deg = 360/30;
            break;
        case 10:
            deg = 360/31;
            break;
        case 11:
            deg = 360/30;
            break;
        case 12:
            deg = 360/31;
            break;
        default:
            error = true;
            console.log("error in number of days");
            break;
    }

    for(let i=0;i<day();i++){
        if(error){
            continue;
        }
        newVector.set(r*sin(i*deg), r*cos(i*deg));
        circle(r*sin(i*deg)+mx, r*cos(i*deg)+my,circleR);
    }
}