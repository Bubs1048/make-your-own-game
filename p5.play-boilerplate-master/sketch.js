/*var fixedRect,movingRect,gameObject1,gameObject2,gameObject3,gameObject4;
function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(200,200,50,80);
  fixedRect.shapeColor="green";
  movingRect=createSprite(400,200,80,30);
  movingRect.shapeColor="green";
  //console.log(movingRect.x-fixedRect.x);
  gameObject1 = createSprite(100,100,50,80);
  gameObject1.shapeColor="green"
  gameObject2 = createSprite(200,100,50,80);
  gameObject2.shapeColor="teal"
  gameObject3 = createSprite(300,100,50,80);
  gameObject3.shapeColor="red"
  gameObject4 = createSprite(400,100,50,80);
  gameObject4.shapeColor="orange"
  //isTouch(gameObject1,movingRect)
}

function draw() {
  background("pink");  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  if(isTouch(gameObject1,movingRect))//16-31  if(false)
  {//
    movingRect.shapeColor="blue";
gameObject1.shapeColor="blue";
  }
  else{
    movingRect.shapeColor="yellow";
    gameObject1.shapeColor="yellow";
  }
  //200 <65
  //-200 <65
  
  //console.log(fixedRect.x-movingRect.x)
  drawSprites();
}
*/

var fixedRect,movingRect;
function setup()
{
  createCanvas (1000,800)
  fixedRect=createSprite(400,100,50,80);
  fixedRect.shapeColor="green";
  fixedRect.debug=true;
  movingRect=createSprite(400,800,80,30);
  movingRect.shapeColor="green";
  movingRect.debug=true;
  movingRect.velocityY=-5;
  fixedRect.velocityY=5;
  
}

function draw()
{
  background("pink");
   bounce(fixedRect,movingRect)
   drawSprites();
}

