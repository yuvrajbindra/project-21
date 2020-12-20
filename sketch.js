
var wall, thickness;
var bullet,speed, weight;

function setup() {
  createCanvas(1600, 400);

  speed=random(223,321)
  weight=random(30,52)
  thickness=random(22,83)

  bullet=createSprite(50, 200, 50,5);  
  bullet.velocityX = speed;
  bullet.shapeColor="white";

  wall=createSprite(1200, 200, thickness, 200);  
  wall.shapeColor="gray";
}


function draw() {
  background(0);  
  if(hasCollided(bullet, wall))
  {
  	bullet.velocityX=0;
  	var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);

  	
	if(damage>10)
	{
		wall.shapeColor="red";
		
	}

	

	if(damage<10)
	{
		wall.shapeColor="green";
	}
	
  }


  drawSprites();
 
}


function hasCollided(lbullet, lwall)
{
	bulletRightEdge=lbullet.x +lbullet.width/2;
	wallLeftEdge=lwall.x - lwall.width/2 ;
	if (bulletRightEdge>=wallLeftEdge)
	{
		return true
	}
	return false;
}


