// function Particle() {
//   this.pos = createVector(random(width), random(height));
//   this.vel = createVector(0, 0);
//   this.acc = createVector(0, 0);
//   this.maxspeed = 2;
//   // this.h = 1;

//   // this.prevPos = this.pos.copy();

//   this.update = function() {
//     this.vel.add(this.acc);
//     this.vel.limit(this.maxspeed);
//     this.pos.add(this.vel);
//     this.acc.mult(0);
//   }

//   this.follow = function(vectors) {
//     var x = floor(this.pos.x / scl) ;
//     var y = floor(this.pos.y / scl) ;
//     var index = x + y * cols;
//     var force = vectors[index];
//     this.applyForce(force);
//   }

//   this.applyForce = function(force) {
//     this.acc.add(force);
//   }

//   this.show = function() {
//     stroke(0, 5);
//     strokeWeight(4)
//     point(this.pos.x, this.pos.y);
//     // this.h = this.h + 1;
//     // if (this.h > 255) {
//       // this.h = 0;
//     // }
//     // strokeWeight(1);
//     // line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);
//     // this.updatePrev();
//   }

// //   this.updatePrev = function() {
// //     this.prevPos.x = this.pos.x;
// //     this.prevPos.y = this.pos.y;
// //   }

//   this.edges = function() {
//     if (this.pos.x > width) {
//       this.pos.x = 0;
//       // this.updatePrev();
//     }
//     if (this.pos.x < 0) {
//       this.pos.x = width;
//       // this.updatePrev();
//     }
//     if (this.pos.y > height) {
//       this.pos.y = 0;
//       // this.updatePrev();
//     }
//     if (this.pos.y < 0) {
//       this.pos.y = height;
//       // this.updatePrev();
//     }

//   }

// }
var yoff = 0.0022;        // 2nd dimension of perlin noise

function setup() {
  createCanvas(710, 400);
}

function draw() {
  background(255);

  fill(255);
  // We are going to draw a polygon out of the wave points
  // beginShape(); 
  
  var xoff = 0.022;       // Option #1: 2D Noise
  // var xoff = yoff; // Option #2: 1D Noise
  // var zoff = 10;
  // Iterate over horizontal pixels
  for (var x = 1; x <= width; x += 10) {
    // Calculate a y value according to noise, map to 
    
    // Option #1: 2D Noise
    // var y = map(noise(xoff, yoff), 0, 1, 200,300);

    // Option #2: 1D Noise
    var y = map(noise(xoff, yoff), 0, 1, 10,300);
    
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
