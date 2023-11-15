let leftPaddle;
let rightPaddle;
let ball;
let leftScore = 0;
let rightScore = 0;
let leftPaddleSpeed = 0;
let rightPaddleSpeed = 0;

function setup() {
  createCanvas(800, 400);
  leftPaddle = new Paddle(true);
  rightPaddle = new Paddle(false);
  ball = new Ball();
}

function draw() {
  background(0);

  leftPaddle.show();
  rightPaddle.show();

  leftPaddle.update();
  rightPaddle.update();

  if (keyIsDown(87)) { // 'W' key
    leftPaddleSpeed = -1;
  } else if (keyIsDown(83)) { // 'S' key
    leftPaddleSpeed = 1;
  } else {
    leftPaddleSpeed = 0;
  }

  if (keyIsDown(UP_ARROW)) {
    rightPaddleSpeed = -1;
  } else if (keyIsDown(DOWN_ARROW)) {
    rightPaddleSpeed = 1;
  } else {
    rightPaddleSpeed = 0;
  }

  leftPaddle.move(leftPaddleSpeed);
  rightPaddle.move(rightPaddleSpeed);

  ball.move();
  ball.checkCollision(leftPaddle, rightPaddle);
  ball.update();
  ball.display();

  textSize(32);
  fill(255);
  text(leftScore, width * 0.25, 50);
  text(rightScore, width * 0.75, 50);
}

class Paddle {
  constructor(isLeft) {
    this.width = 10;
    this.height = 80;
    this.y = height / 2 - this.height / 2;
    this.isLeft = isLeft;
    this.x = isLeft ? 20 : width - 30;
    this.speed = 5;
  }

  show() {
    fill(255);
    rect(this.x, this.y, this.width, this.height);
  }

  move(dir) {
    this.y += this.speed * dir;
    this.y = constrain(this.y, 0, height - this.height);
  }

  update() {
    // Voeg hier eventuele updates toe voor de paddle
  }
}

class Ball {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.radius = 10;
    this.xSpeed = 5;
    this.ySpeed = 5;
  }

  move() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
  }

  checkCollision(leftPaddle, rightPaddle) {
    if (this.y - this.radius < 0 || this.y + this.radius > height) {
      this.ySpeed *= -1;
    }

    if (this.x - this.radius < leftPaddle.x + leftPaddle.width && this.y > leftPaddle.y && this.y < leftPaddle.y + leftPaddle.height) {
      this.xSpeed *= -1;
      leftScore++;
    }

    if (this.x + this.radius > rightPaddle.x && this.y > rightPaddle.y && this.y < rightPaddle.y + rightPaddle.height) {
      this.xSpeed *= -1;
      rightScore++;
    }

    if (this.x - this.radius < 0) {
      rightScore++;
      this.reset();
    }

    if (this.x + this.radius > width) {
      leftScore++;
      this.reset();
    }
  }

  reset() {
    this.x = width / 2;
    this.y = height / 2;
    this.xSpeed = random(4, 6) * (random() > 0.5 ? 1 : -1);
    this.ySpeed = random(4, 6) * (random() > 0.5 ? 1 : -1);
  }

  update() {
    // Voeg hier eventuele updates toe voor de bal
  }

  display() {
    fill(255);
    ellipse(this.x, this.y, this.radius * 2);
  }
}