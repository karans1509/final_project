let score = 0;
let header = document.getElementById('points');
let shooter;
let enemies = [];
let bullets= [];
let level = 1;
let overall_time = 30;

window.onload = function(){
    
     let time = overall_time;
     setInterval(function(){

       document.getElementById("timer").innerHTML = time ;
       time--;
       if(time == 0)
       {   
         level++;
         overall_time--;
         
         time = overall_time;
         setup();
        
       }

       
      },500);
    }

function setup(){

  createCanvas(1080,480);
  shooter = new Shooter();
  bullet = new Bullet((width/2) - 20, (height/2)-20);
  for(let i=0; i<15; i++) {
  	enemies[i] = new Enemies(i*80 + 80,60);
  }

}

function draw() {
 
 background(255);
 shooter.show();
 shooter.move();
 shooter.turn();
 for(let i=0; i<enemies.length; i++)
 {
 	 enemies[i].show();
   enemies[i].move(level);
   enemies[i].turn();
 }

  for(let i = 0; i<bullets.length; i++)
  {
  	bullets[i].show();
  	bullets[i].move();

  	for(let j = 0; j<enemies.length; j++)
  	{
  		if(bullets[i].hits(enemies[j])) {
        score = score+2;
        header.textContent = score;
  			bullets[i].remove();
  			enemies[j].remove();
  		}
  	}
  }

  for(let i = bullets.length-1; i>=0; i--) {
      if(bullets[i].del)
      {
      	bullets.splice(i,1);
      }
  }

  for(let j = enemies.length-1; j>=0; j--) {
      if(enemies[j].del)
      {
      	enemies.splice(j,1);
      }
  }

}

function keyPressed() {
	if(key === ' ') {
       let bullet = new Bullet(shooter.x,height-25);
       bullets.push(bullet);
	}

	if(keyCode === 37) {
		shooter.setMovement(-1);
	}

	else if(keyCode === 39) {
		shooter.setMovement(1);
	}
}

function keyReleased() {
  if(key !==' ')
  shooter.setMovement(0);
}



