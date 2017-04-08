
function Shooter() {
	this.x = width/2;
	this.y = 150;
	this.movement = 0;

	this.show = function() {
		fill(0);
		rectMode(CENTER);
		rect(this.x, height-10, 20, 20);
	}

	this.move = function() {
		this.x = this.x +this.movement*5;
	}

	this.setMovement = function(dir) {
      this.movement = dir;
	}

	this.turn = function() {
		if(this.x<10) {
			this.x = 10;
		}
		if(this.x>width-10)
		{
			this.x = width - 10;
		}
	}

	this.hits = function(enemy) {
      let distance = dist(this.x, this.y, enemy.x , enemy.y);

      if(distance < ((this.x+this.y)/2) + enemy.r){
      	return true;
      }
      else {
      	return false;
      }

	}
}