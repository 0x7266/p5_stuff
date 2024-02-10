class Ring {
  constructor(r, num, diameter) {
    this.r = r;
    this.num = num;
    this.diameter = diameter;

    this.speed = 0;
  }

  display() {
    for (let i = 0; i < this.num; i++) {
      let angle = (360 / this.num) * i;
      let x = this.r * cos(angle + this.speed);
      let y = this.r * sin(angle + this.speed);
      ellipse(x, y, this.diameter, this.diameter);
    }
  }

  move() {
    this.speed += 1;
  }
}
