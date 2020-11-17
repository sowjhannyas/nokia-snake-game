function Snake() {
  this.x = 0;
  this.y = 0;
  this.xSpeed = 1;
  this.ySpeed = 0;
  this.total = 0;
  this.tail = [];

  this.update = function() {
  
    if(this.total === this.tail.length){
       for (var i = 0; i < this.tail.length - 1;   i++){
      this.tail[i] = this.tail[i+1];
    }
    }
    
    this.tail [this.total-1] = createVector(this.x,this.y)
    
    this.x += this.xSpeed;
    this.y += this.ySpeed;
  }

  this.eat = function() {
    if (this.x == food.x && this.y == food.y) {
      this.total++;
      return true;
    }
    return false;
  }

  this.show = function() {
    for (var i = 0; i < this.tail.length;   i++){
      fill(255,0,0);
      strokeWeight(0.1);
      stroke(0);
      rect(this.tail[i].x, this.tail[i].y, 1, 1);
    }
    fill(255);
    strokeWeight(0.1);
    stroke(0);
    rect(this.x, this.y, 1, 1);
  }

  this.setDir = function(x, y) {
    this.xSpeed = x;
    this.ySpeed = y;
  }


  this.endGame = function() {
    if (this.x > col - 1 || this.x < 0 || this.y > row - 1 ||this.y < 0) {
      return true;
    }
  }
}
