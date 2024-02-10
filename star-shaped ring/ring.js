class Ring {
  constructor(r, num) {
    this.r = r;
    this.num = num;

    this.speed = 0;
  }

  display() {
    for (let i = 0; i < this.num; i++) {
      let angle = (360 / this.num) * i;
      let x = this.r * cos(angle + this.speed);
      let y = this.r * sin(angle + this.speed);
      ellipse(x, y, 10, 10);
    }
  }

  move() {
    this.speed += 1;
  }
}
