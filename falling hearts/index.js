let h;
function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  h = new Heart(width / 2, height / 2);
}

function draw() {
  background(220);
  h.display();
}
