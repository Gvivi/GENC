let gap;

function setup(){
    createCanvas(windowWidth, windowHeight, WEBGL);
    colorMode(HSB);
    background(10);
    angleMode(DEGREES);
    //frameRate(8);
    //noLoop();

    if(windowHeight<=windowWidth){
        gap = windowHeight/80;
    } else {
        gap = windowWidth/80;
    }
}

function draw(){
    background(10);
    orbitControl();

    for(let h = 0;h < hour()+1;h++){
        for(let min = 0;min < minute();min++){
            for(let s = 0;s < second();s++){
                translate(s*gap-30*gap,min*gap-30*gap,-h*gap);

                //change saturation every 15min, change brightness every 6h
                noFill();
                if(min < 15 && h < 6){
                    stroke(250,100,100);
                } else if(min < 30 && h < 6){
                    stroke(250,75,100);
                } else if(min < 45 && h < 6){
                    stroke(250,50,100);
                } else if(h < 6){
                    stroke(250,25,100);
                } else if(min < 15 && h < 12){
                    stroke(250,100,75);
                } else if(min < 30 && h < 12){
                    stroke(250,75,75);
                } else if(min < 45 && h < 12){
                    stroke(250,50,75);
                } else if(h < 12){
                    stroke(250,25,75);
                } else if(min < 15 && h < 18){
                    stroke(250,100,50);
                } else if(min < 30 && h < 18){
                    stroke(250,75,50);
                } else if(min < 45 && h < 18){
                    stroke(250,50,50);
                } else if(h < 18){
                    stroke(250,25,50);
                } else if(min < 15){
                    stroke(250,100,25);
                } else if(min < 30){
                    stroke(250,75,25);
                } else if(min < 45){
                    stroke(250,50,25);
                } else {
                    stroke(250,25,25);
                }

                strokeWeight(0.5);

                box(gap*0.3);

                translate(-s*gap+30*gap,-min*gap+30*gap,h*gap);
            }
        }
    }
}