let hearts = [];
function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(220);
  for (let i = 0; i < hearts.length; i++) {
    hearts[i].display();
  }
}

function mouseDragged() {
  hearts.push(new Heart(mouseX, mouseY));
}
