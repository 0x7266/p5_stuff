let hearts = [];
function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(220);
  for (let i = 0; i < hearts.length; i++) {
    hearts[i].display();
    hearts[i].fall();
  }
  for (let i = 0; i < hearts.length; i++) {
    if (hearts[i].y > height + 20) {
      hearts.splice(i, 1);
    }
  }
}

function mouseDragged() {
  hearts.push(new Heart(mouseX, mouseY));
}
