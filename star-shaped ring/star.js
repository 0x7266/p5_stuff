let r;
function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);

  r = new Ring(150, 40);
}

function draw() {
  background(0);
  translate(width / 2, height / 2);

  r.display();
  r.move();
}
