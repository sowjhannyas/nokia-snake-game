var res = 20;
var s;
var w;
var h;
var food;
var score = 0;

function setup() {
  createCanvas(400,400);
  w = floor(width / res);
  h = floor(height / res);
  frameRate(5);
  s = new Snake();
  foodLocation();
}

function draw() {
  scale(res);
  background(50);
  
  if (s.eat(food)) {
    foodLocation();
    score++
    print('score: '+ score)
  }
  s.show();
  s.update();

  if (s.endGame()) {
    background(255, 0, 0);
    textSize(2);
    text('GAME OVER!!',3,9);
    text('Your score was : '+ score,1,12);
    fill(225);
    noLoop();
  }
  noStroke();
  fill(255,100,300)
  rect(food.x, food.y, 1, 1);
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    s.setDir(-1, 0);
  } 
  else if (keyCode === RIGHT_ARROW) {
    s.setDir(1, 0);
  } 
  else if (keyCode === DOWN_ARROW) {
    s.setDir(0, 1);
  } 
  else if (keyCode === UP_ARROW) {
    s.setDir(0, -1);
  }
  
}
