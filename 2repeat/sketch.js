//TWO II TWO//

// var circles = [];

// function setup() {
//   createCanvas(800, 600);

//   for (var i = 0; i < 500; i++) {
//     var circle = {
//       x: random(width),
//       y: random(height),
//       r: (random(1, 100))
//     };
//     circles.push(circle);
//   }

//   for (var i = 0; i < circles.length; i++) {
//     fill(random(144, 158), random(202, 255), random(202, 255));
//     stroke('#9EFFCA');
//     strokeWeight(4);
//     ellipse(circles[i].x, circles[i].y, circles[i].r, circles[i].r);
//   }
// }



let spots;
var circles = [];

function setup() {
  createCanvas(800, 600);
  spots = new SpinSpots(width/2, height/2, -0.10, 90.0);

  for (var i = 0; i < 500; i++) {
    var circle = {
      x: random(width),
      y: random(height),
      r: (random(1, 60))
    };
    circles.push(circle);
  }

  for (var i = 0; i < circles.length; i++) {
    fill(random(144, 158), random(202, 255), random(202, 255));
    noStroke();
 
    ellipse(circles[i].x, circles[i].y, circles[i].r, circles[i].r);
  }
}

function draw() {
  
  spots.update();
  spots.display();
}

class SpinSpots {
  constructor(x, y, s, d) {
    this.x = x;
    this.y = y;
    this.speed = s/5;
    this.dim = d;
    this.angle = 0.0;
  }

  update() {
    this.angle += this.speed;
  }

  display() {
    noStroke();
    push();
    translate(this.x, this.y);
    this.angle += this.speed;
    rotate(this.angle);
    fill(random(144, 158), random(202, 255), random(202, 255));
    ellipse(this.dim*5, 0, this.dim, this.dim);
    fill(random(144, 158), random(202, 255), random(202, 255));
    ellipse(-this.dim*4, 0, this.dim, this.dim);
    fill(random(144, 158), random(202, 255), random(202, 255));
    ellipse(this.dim*3, 0, this.dim, this.dim);
    fill(random(144, 158), random(202, 255), random(202, 255));
    ellipse(-this.dim*2, 0, this.dim, this.dim);
    fill(random(144, 158), random(202, 255), random(202, 255));
    ellipse(this.dim, 0, this.dim, this.dim);
    fill(random(144, 158), random(202, 255), random(202, 255));
    ellipse(this.dim/2, 0, this.dim, this.dim);

    pop();
  }
}