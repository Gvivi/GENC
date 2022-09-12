let facemesh;
let capture;
let predictions = [];
const devices = [];
let video;

function setup() {
  createCanvas(640, 480);
  colorMode(HSB);
  navigator.mediaDevices.enumerateDevices()
    .then(gotDevices);
  /*capture = createCapture(VIDEO);
  capture.size(width, height);

  facemesh = ml5.facemesh(capture, modelReady);

  // This sets up an event that fills the global variable "predictions"
  // with an array every time new predictions are made
  facemesh.on("predict", results => {
    predictions = results;
  });

  // Hide the video element, and just show the canvas
  capture.hide();*/
}

function modelReady() {
  console.log("Model ready!");
}

function draw() {
 // image(video, 0, 0, width, height);
  background(0)

  // We can call both functions to draw all keypoints
  drawKeypoints();
}

// A function to draw ellipses over the detected keypoints
function drawKeypoints() {
  strokeWeight(0.5);
  stroke(250,100,100);
  for (let i = 0; i < predictions.length; i += 1) {
    const keypoints = predictions[i].scaledMesh;

    // Draw facial keypoints.
    for (let j = 0; j < keypoints.length; j += 1) {
      const [x, y] = keypoints[j];

      //fill(0, 255, 0);
      //ellipse(x, y, 5, 5);
      for(let k=j+1;k<keypoints.length && k<=j+1;k++){
        const [u,v] = keypoints[k];
        line(x,y,u,v);
      }
    }
  }
}

function gotDevices(deviceInfos) {
  for (let i = 0; i !== deviceInfos.length; ++i) {
    const deviceInfo = deviceInfos[i];
    if (deviceInfo.kind == 'videoinput') {
      devices.push({
        label: deviceInfo.label,
        id: deviceInfo.deviceId
      });
    }
  }
  console.log(devices);
  let supportedConstraints = navigator.mediaDevices.getSupportedConstraints();
  console.log(supportedConstraints);
  var constraints = {
    video: {
      deviceId: {
        exact: devices[1].id
      },
    }
  };
  capture = createCapture(constraints);

  facemesh = ml5.facemesh(capture, modelReady);

  // This sets up an event that fills the global variable "predictions"
  // with an array every time new predictions are made
  facemesh.on("predict", results => {
    predictions = results;
  });

  capture.size(width, height);
  capture.hide();
}