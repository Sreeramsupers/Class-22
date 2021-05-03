const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine,world
var ground,ball




function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world

  //for ground
  var g_option = {
    isStatic: true
  }
  ground = Bodies.rectangle(200,390,1000,20,g_option)

  World.add(world,ground)

  //for ball
  var b_option={
    restitution: 1.2
  }

  ball = Bodies.circle(200,200,30,b_option)
  World.add(world,ball)

}

function draw() {
  background(0);

  Engine.update(engine)
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,1200,20)
  
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,30,30)

  
}