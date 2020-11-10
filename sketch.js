var movingRect, fixedRect;
var o1, o2;

function setup() {
  createCanvas(800,400);
  o1=createSprite(300,300,30,40);
    o1.shapeColor = "pink";

    o2=createSprite(360,240,50,60);
    o2.shapeColor = "blue";

    movingRect = createSprite(400, 200, 80, 50);
  movingRect.shapeColor = "blue";
  
  fixedRect = createSprite(200, 300, 50, 80);
  fixedRect.shapeColor="red";
}

function draw() {
  background(0);  
  movingRect.y=mouseY;
  movingRect.x=mouseX;

 if(isTouching(o1, movingRect))
{
  movingRect.shapeColor = "yellow";
  o1.shapeColor="yellow";
}
else
{
  movingRect.shapeColor = "blue";
  o1.shapeColor="pink";
}

if(isTouching(o2, movingRect))
{
  movingRect.shapeColor = "green";
  o2.shapeColor="green";
}
else
{
  movingRect.shapeColor = "blue";
  o2.shapeColor="red";
}

  drawSprites();
}

