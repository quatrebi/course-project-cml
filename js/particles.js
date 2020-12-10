let canvas;

class Particle {

	constructor(x, y) {
		this.pos = createVector(x, y);
		this.r = random(1, 4);
		this.vel = createVector(random(-1, 1), random(-1, 1));
	}

	move() {
		if (this.pos.x < 0 || this.pos.x >= width) this.vel.x *= -1;
		if (this.pos.y < 0 || this.pos.y >= height) this.vel.y *= -1;

		this.pos.add(this.vel);
	}

	draw() {
		noStroke();
		alpha = map(this.r, 1, 4, 0.2, 0.4);
		fill(`rgba(255, 127, 255, ${alpha})`);
		circle(this.pos.x, this.pos.y, this.r);
	}

	join(particles) {
		beginShape(TRIANGLE_STRIP);
		noStroke();
		fill("rgba(255, 127, 255, 0.01)");
		vertex(this.pos.x, this.pos.y);
		particles.forEach(p => {
			if (this.pos.dist(p.pos) < 45 * (width / height)) vertex(p.pos.x, p.pos.y);
		});
		endShape();
	}
}

let particles = [];

function setup() {
	canvas = createCanvas(window.innerWidth, window.innerHeight);
	canvas.elt.id = "pageCanvas";
	for (let i = 0; i < width / 8; i++) {
		particles.push(new Particle(random(0, width), random(0, height)));
	}
}

function draw() {
	clear();
	//viewport(canvas, window.innerWidth, window.innerHeight);

	particles[0].pos = createVector(mouseX, mouseY);
	for (let i = 0; i < particles.length; i++) {
		particles[i].move();
		particles[i].draw();
		particles[i].join(particles.slice(i));
	}
}

// need to fix
function viewport(renderer, width, height) {
	height = window.innerHeight;
	width = window.innerWidth;
	with (renderer) {
		elt.width = width; elt.height = height;
		elt.style.width = `${width}px`;
		elt.style.height = `${height}px`;
	}
}