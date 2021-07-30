var pathImg
var boyImg

function preload(){
  //pre-load images
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png", "Runner-2.png");
}

function setup(){
  createCanvas(400,400);

  //create sprites here
  path = createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale = 1.2;

  //create the runner
  runner = createSprite(180, 340, 50, 50);
  runner.addAnimation("boyrunning",boyImg);
  runner.scale = 0.1
  

  //create left and right invisible boundaries
  leftboundary = createSprite(0,0,100,800);
  leftboundary.visible = false;

  rightboundary = createSprite(410,0,100,800);
  rightboundary.visible=false;
  

  //code to reset the background
  if(path.y > 200){
    path.y = height/2;
 }
}

function draw() {
  background(0);

  //make the boy move with the mouse
  runner.x = mouseX;

  edges=createEdgeSprites();
  runner.collide(edges[3]);
  runner.collide(leftboundary);
  runner.collide(rightboundary);

  //code to reset the background
  if(path.y > 350){
    path.y = height/2;
  } 
  drawSprites();

 
}
