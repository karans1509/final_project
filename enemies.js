
function Enemies(x,y) {
	this.x = x;
	this.y = y;
	this.r = 15;
	this.del = false;
	this.direction =1;

	this.show = function() {
		fill(255,0,0);
		ellipse(this.x, this.y, this.r*2, this.r*2);
	}

	this.move = function() {
		this.x = this.x + random(-1,1)*5*level;
		this.y = this.y + random(-1,1)*5*level;
	}
    
    this.turn = function() {
    if (this.x < 15) { 
      this.x = 15; 
      this.direction = -this.direction; 
    }
    else if (this.y < 15) { 
      this.y = 15; 
      this.direction = -this.direction;   
    }
    else if (this.x > width - 15) { 
      this.x = width - 15; 
      this.direction = -this.direction; 
    }
    else if (this.y > height - 15) { 
      this.y = height - 15; 
      this.direction = -this.direction;   
    } 
  };


	this.remove = function () {
      this.del = true;
	}
}