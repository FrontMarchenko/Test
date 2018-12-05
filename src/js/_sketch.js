// var inc = 0.1;
// var scl = 10;
// var cols, rows;

// var zoff = 0;

// var fr;

// var particles = [];

// var flowfield ;

// function setup() {
//   createCanvas(800, 400);

//   // colorMode(HSB, 255);
//   cols = floor(width / scl);
//   rows = floor(height / scl);
//   fr = createP('');

//   flowfield = new Array(cols * rows);

//   for (var i = 0; i < 1500; i++) {
//     particles[i] = new Particle();
//   }
//   background(255);
// }

// function draw() {
//   // background(0);
//   var yoff = 0;

//   for (var y = 0; y < rows; y++) {
//     var xoff = 0;
//     for (var x = 0; x < cols; x++) {
//       var index = x + y * cols;
//       // var r = noise(xoff, yoff) * 255;
//       var angle = noise(xoff, yoff, zoff) * TWO_PI * 4;
//       var v = p5.Vector.fromAngle(angle);
//       xoff += inc;
//       // fill(r);
//       // rect(x * scl, y * scl, scl, scl);
      
//       // var v = p5.Vector.fromAngle(0);
//       v.setMag(1);
//       flowfield[index] = v;
//       xoff += inc;
//       stroke(255, 50);
//       // push();
//       // translate(x * scl, y * scl);
//       // rotate(v.heading());
//       // strokeWeight(1);
//       // line(0, 0, scl, 0);
//       // pop();
//     }
//     yoff += inc;

//     zoff += 0.0003;
//   }

//   for (var i = 0; i < particles.length; i++) {
//     particles[i].follow(flowfield);
//     particles[i].update();
//     particles[i].show();
//     particles[i].edges();
//   // }

//   fr.html(floor(frameRate()));
// }
// }
var yoff = 0.22;        // 2nd dimension of perlin noise

function setup() {
  createCanvas(710, 400);
}

function draw() {
  background(255);

  fill(255);
  // We are going to draw a polygon out of the wave points
  // beginShape(); 
  
  var xoff = 0.22;       // Option #1: 2D Noise
  // var xoff = yoff; // Option #2: 1D Noise
  // var zoff = 10;
  // Iterate over horizontal pixels
  for (var x = 10; x <= width; x += 10) {
    // Calculate a y value according to noise, map to 
    
    // Option #1: 2D Noise
    // var y = map(noise(xoff, yoff), 0, 1, 200,300);

    // Option #2: 1D Noise
    var y = map(noise(xoff, yoff), 0, 1, 200,300);
    
    // Set the vertex
    vertex(x, y); 
    // Increment x dimension for noise
    xoff += 0.022;
  }
  // increment y dimension for noise
  yoff += 0.022;
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);
}
