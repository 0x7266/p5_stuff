let cols;
let rows;
let spacing = 20;
let size = [];

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  cols = width / spacing;
  rows = height / spacing;
}

function draw() {
  background(220);
  for (let i = 0; i < cols; i++) {
    size[i] = [];
    for (let j = 0; j < rows; j++) {
      size[i][j] = dist(
        mouseX,
        mouseY,
        spacing / 2 + i * spacing,
        spacing / 2 + j * spacing,
      );
    }
  }
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      rect(
        spacing / 2 + i * spacing,
        spacing / 2 + j * spacing,
        size[i][j],
        size[i][j],
      );
    }
  }
}
