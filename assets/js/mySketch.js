let particles = [];

function setup() {
  const canvasContainer = document.getElementById("canvasContainer");
  const containerWidth = canvasContainer.offsetWidth;
  const containerHeight = canvasContainer.offsetHeight;
  var canvas = createCanvas(containerWidth, containerHeight);
  canvas.parent("canvasContainer");
  background(80);
  for (let i = 0; i < 1; i++) {
    particles.push(new Particle(random(width), random(height)));
  }
  colorMode(HSB, 360);
}

function draw() {
  // noLoop()
  clear();
  for (let p of particles) {
    p.draw();
    p.update();

    // Particles split
    if (p.age % 10 === 0 && p.splitCount > 0) {
      p.splitCount--;
      particles.push(new Particle(p.p.x, p.p.y, p.splitCount));
    }
  }
  // if (frameCount % 4 === 0) {
  //   particles.push(new Particle(mouseX, mouseY, 3));
  // }

  if (frameCount % 50 === 0 && windowWidth < 991) {
    for (let i = 0; i < 10; i++) {
      particles.push(new Particle(random(width), random(height), 3));
    }
  }

  // Remove dead particles
  particles = particles.filter((p) => {
    return !p.dead;
  });

  // delaunay triangle
  if (particles.length > 0) {
    let data = Delaunay.triangulate(
      particles.map((p) => {
        return [p.p.x, p.p.y];
      })
    );

    //
    let distThresh = 50;

    for (let i = 0; i < data.length; i += 3) {
      // Fetch the 3 particles that make up a triangle.
      let particle1 = particles[data[i]];
      let particle2 = particles[data[i + 1]];
      let particle3 = particles[data[i + 2]];
      const s = map(40, 0, 100, 0, 360);
      let clr = color(40 + particle1.age * 1.5, 20, 360, 200);

      // Check distance between each point to see if they are all within the threshold, otherwise skip it.
      if (
        particle1.p.dist(particle2.p) > distThresh ||
        particle2.p.dist(particle3.p) > distThresh ||
        particle1.p.dist(particle3.p) > distThresh
      ) {
        continue;
      }

      fill(clr);
      // noFill()
      stroke(0, 0, 360, 100);
      strokeWeight(1);
      // Display particles as a triangle.
      triangle(
        particle1.p.x,
        particle1.p.y,
        particle2.p.x,
        particle2.p.y,
        particle3.p.x,
        particle3.p.y
      );
    }
  }
}

function mouseDragged() {
  // Limit the amout of particles
  if (frameCount % 4 === 0) {
    particles.push(new Particle(mouseX, mouseY, 3));
  }
}

function mouseMoved() {
  // Limit the amout of particles
  if (frameCount % 4 === 0) {
    particles.push(new Particle(mouseX, mouseY, 3));
  }
}

function windowResized() {
  const canvasContainer = document.getElementById("canvasContainer");
  const containerWidth = canvasContainer.offsetWidth;
  const containerHeight = canvasContainer.offsetHeight;
  resizeCanvas(containerWidth, containerHeight);
}
