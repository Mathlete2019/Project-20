var wall,car,speed,weight,deformation;

function setup() {
  createCanvas(1400,400);
  
  wall = createSprite(1300,200,60,200);
  wall.shapeColor=80;
  car = createSprite(50,200,50,50);
  car.shapeColor="white";
  
  speed=random(55,90);
  weight=random(400,1500);
}

function draw() {
  background("blue");  
  car.velocityX=speed;

  if(wall.x-car.x<wall.width/2+car.width/2 && 
    car.x-wall.x<wall.width/2+car.width/2 &&
    wall.y-car.y<wall.height/2+car.height/2 &&
    car.y-wall.y<wall.height/2+car.height/2){
      deformation=(0.5*weight*speed*speed)/22500;
      car.velocityX=0;
    }
    if(deformation<100){
      car.shapeColor="green";
      
    }
    if(deformation>=100&&deformation<=180){
      car.shapeColor="yellow";
      
    }
    if(deformation>180){
      car.shapeColor="red";
      
    }
  drawSprites();
}