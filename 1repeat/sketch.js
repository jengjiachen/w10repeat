var circles = [];

function setup() {
  createCanvas(800, 600);

  for (var i = 0; i < 500; i++) {
    var circle = {
      x: random(width),
      y: random(height),
      r: (random(1, 100))
    };
    circles.push(circle);
  }

  for (var i = 0; i < circles.length; i++) {
    fill(random(125, 255), random(92, 125), random(222, 255));
    stroke('#C27DFF');
    strokeWeight(4);
    ellipse(circles[i].x, circles[i].y, circles[i].r, circles[i].r);
  }
}