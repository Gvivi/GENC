let gap;
let bins = 16;
let randomArray = Array();

function preload() {  
    song = loadSound('assets/HoliznaCC0_MakeFunk.mp3');
}

function setup(){
    createCanvas(windowWidth, windowHeight);
    colorMode(HSB);
    background(10);
    angleMode(DEGREES);
    frameRate(12);

    song.loop();
    amp = new p5.Amplitude();
    fft = new p5.FFT();

    gap = windowHeight/20;
    
    for(let i=0;i<(windowWidth/gap)*(windowHeight/gap);i++){
        randomArray.push(round(random(5)));
    }
}

function draw(){
    background(10);
    let counter=0;
    for(let x = gap;x <= windowWidth-gap;x+=gap){
        for(let y = gap;y <= windowHeight-gap;y+=gap){
            noStroke();
            fill(20,100,70);

            let level = amp.getLevel();
            let spectrum = fft.analyze();
            let bass, lowMid, mid, highMid, treble;

            bass = fft.getEnergy("bass");
            lowMid = fft.getEnergy("lowMid");
            mid = fft.getEnergy("mid");
            highMid = fft.getEnergy("highMid");
            treble = fft.getEnergy("treble");

            let bins=[bass,lowMid,mid,highMid,treble]

            //console.log(randomArray[counter]);

            circle(x,y,map(level,0,1,windowHeight/80,windowHeight/17));
            stroke(200,100,70);
            strokeWeight(1);
            noFill();
            circle(x,y,map(bins[randomArray[counter]],0,255,windowHeight/80,windowHeight/15));
            counter++;
        }
    }
}

function mouseClicked() {
    if (song.isPlaying() ){
        song.stop();
    } else {
        song.play();
    }
}