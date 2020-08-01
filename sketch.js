var ground, ground_running;

var face1, face_running;
var face2, face2_running;
var face3, face3_running;

var stop1, stop2;

function preload(){ 
 ground_running = loadImage("bg.jpg");
  
  face1_running = loadAnimation("helicopter.png");
  face2_running = loadAnimation("box.png");
  
 // face3_running = loadAnimation("sun.png");
   
} 

function setup() { 
  createCanvas(500, 500); 
  
  ground = createSprite(250,250,2000,2000);
  ground.addAnimation("groundrunning",ground_running); 
  ground.scale = 1.5;

face1 = createSprite(200,130,40,40); 
face1.addAnimation("face1running",face1_running); 
face1.scale = 0.07;

  face2 = createSprite(215,135,40,40); 
face2.addAnimation("face2running",face2_running); 
face2.scale = 0.07;
  face2.visible = false;

  
face3 = createSprite(250,450,500,40); 
//face3.addAnimation("face3running",face3_running); 
//face3.scale = 0.016;
  face3.visible = false;
  
  stop1 = createSprite(215,280,60,10);
  stop1.visible = false;
  
   stop2 = createSprite(215,355,60,10);
  stop2.visible = false;

}
function draw() { 
  background("white"); 
  
  if(keyDown(DOWN_ARROW)){
    face2.velocityY = 3;
    face2.visible = true;
  }
  
if(face2.isTouching(face3)&& face2.velocityY ===3){
  face2.velocityY = -2.5;
}
  if(face2.isTouching(stop1)&& face2.velocityY ===-2.5){
  face2.velocityY = 2;
}
  if(face2.isTouching(face3)&& face2.velocityY ===2){
  face2.velocityY = -1.5;
}
  if(face2.isTouching(stop2)&& face2.velocityY ===-1.5){
  face2.velocityY = 1;
}
  if(face2.isTouching(face3)&& face2.velocityY ===1){
  face2.velocityY = 0;
}
   
   
  drawSprites(); 
}