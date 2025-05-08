let song;
let amp;

function preload() {
  song = loadSound('assets/music.mp3');
}

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
  song.play();
  amp = new p5.Amplitude();
}

function draw() {
  background(0);
  fill(255);
  textAlign(CENTER);
  text('p5.js Music Visualizer', width / 2, 30);

  let level = amp.getLevel(); // 0 ~ 1
  let size = map(level, 0, 1, 50, 300);

  translate(width / 2, height / 2);
  noFill();
  stroke(255, 100, 150);
  strokeWeight(4);
  ellipse(0, 0, size, size);
}
