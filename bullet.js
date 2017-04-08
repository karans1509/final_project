
function Bullet(x,y) {
	this.x = x;
	this.y = y;
	this.r = 8;
	this.del = false;

	this.show = function() {
		fill(0,0,255);
		ellipse(this.x, this.y, this.r*2, this.r*2);
	}

	this.move = function(distance) {
		this.y = this.y - 5;
	}

	this.hits = function(enemy) {
      let distance = dist(this.x, this.y, enemy.x , enemy.y);

      if(distance < this.r + enemy.r){
      	return true;
      }
      else {
      	return false;
      }

	}

	this.remove = function () {
      this.del = true;
	}
}