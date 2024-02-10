let r = 150;
let angle = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);

  let x = r * cos(angle);
  let y = r * sin(angle);
  translate(width / 2, height / 2);
  ellipse(0, 0, r * 2, r * 2);
  ellipse(x, y, 10, 10);
}
