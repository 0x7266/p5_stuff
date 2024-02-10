let rings = [];
let n = 9;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  for (let i = 0; i < n; i++) {
    rings[i] = new Ring(150 - i * 10, 30);
  }
  r = new Ring(150, 40);
}

function draw() {
  background(0);
  translate(width / 2, height / 2);

  for (let i = 0; i < n; i++) {
    rings[i].display();
    rings[i].move();
  }
}
