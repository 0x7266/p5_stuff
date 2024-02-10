class Ring {
  constructor(r, num) {
    this.r = r;
    this.num = num;
  }

  display() {
    for (let i = 0; i < this.num; i++) {
      let angle = (360 / this.num) * i;
      let x = this.r * cos(angle);
      let y = this.r * sin(angle);
      ellipse(x, y, 10, 10);
    }
  }
}
