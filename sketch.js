const Bodies= Matter.Bodies;
const World= Matter.World;
const Engine= Matter.Engine;
var ball,ground;
var myWorld,myEngine;


function setup() {
  
  createCanvas(800,400);
myEngine=Engine.create();
myWorld=myEngine.world;
var groundOption={
  isStatic:true
}
ground=Bodies.rectangle(200,390,400,20,groundOption);
World.add(myWorld,ground)
console.log(ground)

}

function draw() {
  background(0);
  Engine.update(myEngine) ;
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);

  
  drawSprites();
}