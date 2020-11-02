var car,walls;
var speed,weigth;

function setup() 
{
  createCanvas(1600,400);
  car = createSprite(50, 200, 50, 50);
  walls = createSprite(1450, 200, 50, height/2);
  walls.shapeColor = color("violet")
  speed = random(55,90);
  weight = random(400,1500);
  
}

function draw() 
{
  background(0);  
  car.velocityX = speed;
  if (walls.x - car.x < (car.width + walls.width)/2)
  {
    car.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed/22509;
  }

  if (deformation > 180)
  {
    car.shapeColor = color("Red");
  }

  if (deformation < 180 &&deformation > 100)
  {
    car.shapeColor = color("Yellow");
  }

  if (deformation < 100)
  {
    car.shapeColor = color("Green");
  }
  drawSprites();
}