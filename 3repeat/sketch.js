var cwidth = 800
var cheight = 600
var row = 15;

function setup() {
  createCanvas(cwidth, cheight);
  for (x = 0; x <= cwidth; x += row) {
    for (y = 0; y <= cheight; y += row) {
      stroke(random(232, 255), random(102, 171), random(102, 198));
      if ( y % 3 === 0) {
        fill(random(232, 255), random(102, 171), random(102, 198));

        bezier((random(x-80, x+80)), (random(0, 600)), (y + 50+ row), (random(1, 65)), 90, 90, 15, 80);
      }

    }
  }
}
