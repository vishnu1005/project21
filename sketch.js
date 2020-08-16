var bullet,wall,thickness;
var speed,weight;



function setup() {
  createCanvas(600,400);

  thickness=random(22,83);


  wall=createSprite(600,400,thickness,800);
  bullet=createSprite(50, 50, 15, 5);
 


  speed=random(223,321);
  weight=random(30,52);
 
  bullet.velocityX=speed;
 


  wall.shapeColor=color(80,80,80);


}

function draw()
 {
  background(255,255,255);

  line(600-5,0,600-5,400);

  for (var i = 0; i < 600; i=i+20) 
    {
      line(i,200,i+10,200);
      line(i,210,i+10,210);
    }


if(hascollided(bullet,wall))
{
  bullet.velocityX=0;
  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

  if(damage>10)
  {
    wall.shapeColor=color(255,0,0);
  }

  if(damage<10)
  {
    wall.shapeColor=color(0,255,0);
  }
}
 

  drawSprites();
 }

 function hascollided(bullet,wall)
 {
   bulletRightEdge=bullet.x+bullet.width;
   wallLeftEdge=wall.x;
   if(bulletRightEdge>=wallLeftEdge)
   {
     return true
   }
   return false;
 }