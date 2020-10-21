var bullet, wall, rspeed, rweight, thickness,thickness1;

function setup() {
  createCanvas(1600,400);
  thickness = Math.round(random(22,83));
  rspeed  = Math.round(random(223,321))
  weight = Math.round(random(30,52))
  bullet = createSprite(200,200,30,10);
  bullet.setVelocity(0,0);
  bullet.shapeColor = color(300,300,300);
  wall = createSprite(1200,200,thickness,200);
  wall.shapeColor = color(80,80,80);
  thickness1 = thickness*thickness*thickness;
}

function draw() {
  background(0);  
 bullet.setVelocity(rspeed/20,0);
if(bullet.x>=wall.x-(wall.width+bullet.width)/2)
{
  bullet.setVelocity(0,0)
  var damage = 0.5 * weight * rspeed * rspeed/thickness1;
  console.log(damage);
  if(damage>10&&damage<=300)
  {
    bullet.shapeColor = color(255,0,0);
  }
  
  if(damage<=10)
  {
    bullet.shapeColor = color(0,255,0);
  }
 
}


  drawSprites();
}