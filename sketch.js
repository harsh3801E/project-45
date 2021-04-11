function setup() {
  createCanvas(600,600);
  packman=createSprite(400, 200, 20, 20);
  packman.shapeColor="yellow" 

  boundary1=createSprite(300,0,600,5);
  boundary1.shapeColor="red"

  boundary2=createSprite(0,300,5,600);
  boundary2.shapeColor="red"

  boundary3=createSprite(300,600,600,5);
  boundary3.shapeColor="red"
  
  boundary4=createSprite(600,100,5,350);
  boundary4.shapeColor="red"

  boundary5=createSprite(600,500,5,350);
  boundary5.shapeColor="red"

  portal=createSprite(600,300,5,50);
  portal.visibility=false;

  maze1=createSprite(100,100,200,20);
  maze1.shapeColor="black";

  maze2=createSprite(100,200,100,5)
  maze2.shapeColor="black"

  maze3=createSprite(100,300,100,5)
  maze1.shapeColor="black"

  maze3=createSprite(100,400,100,5)
  maze3.shapeColor="black"

  maze4=createSprite(100,500,100,5)
  maze4.shapeColor="black"

  maze5=createSprite(20,20,100,5)
  maze5.shapeColor="black"

  maze6=createSprite(20,20,100,5)
  maze6.shapeColor="black"
}

function draw() {
  background("grey");
  if(keyDown("left_arrow")){
    packman.velocityX=-5;
    packman.velocityY=0
  }
  if(keyDown("right_arrow")){
    packman.velocityX=5;
    packman.velocityY=0
  }
  if(keyDown("up_arrow")){
    packman.velocityY=-5;
    packman.velocityX=0
  }
  if(keyDown("down_arrow")){
    packman.velocityY=5;
    packman.velocityX=0
  }
  if(packman.isTouching(portal)){
packman.x=5;
packman.y=300;
  }
  packman.collide(boundary1)
  packman.collide(boundary2)
  packman.collide(boundary3)
  packman.collide(boundary4)
  packman.collide(boundary5)
  drawSprites();
}