let r = 150;
let angle = 0;
let num = 10;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  translate(width / 2, height / 2);

  for (let i = 0; i < num; i++) {
    let angle = (360 / num) * i;
    let x = r * cos(angle);
    let y = r * sin(angle);
    ellipse(x, y, 10, 10);
  }
}
