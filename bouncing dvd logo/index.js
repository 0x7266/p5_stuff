let img = [];
let names = [
	"assets/images/dvd_blue.png",
	"assets/images/dvd_white.png",
	"assets/images/dvd_cyan.png",
	"assets/images/dvd_magenta.png",
	"assets/images/dvd_red.png",
	"assets/images/dvd_yellow.png",
	"assets/images/dvd_green.png",
];
let x = 100;
let y = 100;
let dx = 2;
let dy = 2;
let w = 100;
let h = 50;

function preload() {
	for (let i = 0; i < names.length; i++) {
		img[i] = loadImage(names[i]);
	}
}

function setup() {
	createCanvas(400, 400);
}

function draw() {
	background(0);
	stroke(255);
	// rect(x, y + h / 2, w, h);
	image(img[2], x, y);
	x += dx;
	y += dy;
	edgeHandling();
}

function edgeHandling() {
	if (x <= 0 || x + w >= width) {
		dx = dx * -1;
	}
	if (y + h / 2 <= 0 || y + h / 2 + h >= height) {
		dy = dy * -1;
	}
}
