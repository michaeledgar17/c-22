// NAme Spacing 
const Engine = Matter.Engine;// create PE
const World= Matter.World;// create the world that uses the PE
const Bodies = Matter.Bodies;// create the bodies that inhabit the world


var engine , world;
var ground;
var ball;
function setup() {
  createCanvas(400,400);
  engine = Engine.create();// michaels physics engine 
  world= engine.world;// michaels world 
var ground_options= {

  isStatic:true,
  
}

ground = Bodies.rectangle(200,390,100,50, ground_options);// body inside michaels world
World.add(world,ground);
console.log(ground);

var ball_options ={
  restitution: 0.5,
  density:1
}

ball = Bodies.circle(200,100,20, ball_options);
World.add(world,ball);

}

function draw() {

  Engine.update(engine)
  background(0);  
  rectMode(CENTER);

  rect (ground.position.x,ground.position.y,400,50)
 ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)

}