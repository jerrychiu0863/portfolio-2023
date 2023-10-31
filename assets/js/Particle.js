class Particle {
  constructor(x, y, splitCount) {
    this.p = createVector(x, y);
    this.splitCount = splitCount;
    this.offset = createVector(random(-1, 1), random(-1, 1));
    this.size = 10;
    this.dead = false;
    this.age = 0;
    // The newer splited particle, this smaller the v
    // Concentrated
    //this.v = p5.Vector.random2D().mult(map(this.splitCount, 0, 3, 5, 2));
    // Wider range
    this.v = p5.Vector.random2D().mult(10);
  }

  update() {
    // Check if particle stops
    if (this.v.mag() < 1) this.dead = true;
    // if (this.p.x > width || this.p.x < 0 || this.p.y > height || this.p.y < 0) this.dead = true
    // Adds air drag/friction.
    this.v.mult(0.9);
    this.v.add(this.offset);
    // Make movement more random
    this.offset = p5.Vector.random2D();
    this.p.add(this.v);
    this.age++;
    // this.size *= 0.95
  }

  draw() {
    push();
    translate(this.p.x, this.p.y);
    scale(0.5);
    blendMode(SCREEN);
    stroke(0, 0, 360, 200);
    strokeWeight(5);
    // point(this.p.x, this.p.y)
    // noFill()
    fill(0, 0, 360, 100);
    strokeWeight(1);
    // ellipse(0, 0, 30)
    // ellipse(0, 0, 20)
    ellipse(0, 0, this.size);
    ellipse(0, 0, 5);
    ellipse(0, 0, 2);
    pop();
  }
}
