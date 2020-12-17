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
		fill(`rgba(0, 0, 0, ${alpha} / 2)`);
		circle(this.pos.x, this.pos.y, this.r);
	}
}

/* Создаём пустой массив */
let particles = [];

function setup() {
	// Создаём полотно размеры которого соотв. размера экрана
	canvas = createCanvas(window.innerWidth, window.innerHeight);
	canvas.elt.id = "pageCanvas";
	for (let i = 0; i < width / 8; i++) {
		// Добавляем массив частицы
		particles.push(new Particle(random(0, width), random(0, height)));
	}
}

function draw() {
	// Каждый вызов метода очищаем полотно, чтобы убрать предыдущие отрисовки
	clear();

	for (let i = 0; i < particles.length; i++) {
		// Для каждой частицы вызываем методы обрабокти движения и отрисовки
		particles[i].move();
		particles[i].draw();
	}
}