var jakeRun;
var jake;
var road;
var wallL;
var wallR;

function preload(){
  //pre-load images
  jakeRun=loadAnimation('Jake1.png','Jake2.png','Jake3.png','Jake4.png','Jake5.png'); 
  path=loadImage('path.png');
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  road=createSprite(200,200,200,400);
  road.addImage('street',path);
  jake=createSprite(200,200,200,200);
  jake.addAnimation('run',jakeRun);
  jake.scale=0.5;
  wallL=createSprite(25,200,50,400)
  wallL.visible=false
  wallR=createSprite(375,200,50,400)
  wallR.visible=false
}

function draw() { 
  background('black');

  road.velocityY=10

  if(road.y>400){
    road.y=width/2;
  }
  
  if(mouseX>24&&mouseX<400-24){
    jake.x=mouseX;
    jake.collide(wallL)
    jake.collide(wallR)
}

  drawSprites();
}