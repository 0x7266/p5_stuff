function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(220);
  translate(width / 2, height / 2);
  beginShape();
  for (let t = 0; t < 360; t++) {
    let x = 16 * sin(t) * sin(t) * sin(t);
    let y = -1 * (13 * cos(t) - 5 * cos(2 * t) - 2 * cos(3 * t) - cos(4 * t));
    vertex(x, y);
  }
  endShape();
}
