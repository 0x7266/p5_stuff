let cols;
let rows;
let size = 20;
let c = [];

function setup() {
  createCanvas(400, 400);
  cols = width / size;
  rows = height / size;
  for (let i = 0; i < cols; i++) {
    c[i] = [];
    for (let j = 0; j < rows; j++) {
      c[i][j] = color(random(256), random(256), random(256));
    }
  }
}

function draw() {
  background(220);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      fill(c[i][j]);
      rect(i * size, j * size, size, size);
    }
  }
}
