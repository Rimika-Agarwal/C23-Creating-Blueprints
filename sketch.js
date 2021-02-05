//namespacing/alias name
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

//create your own engine and world
var engine, world;

//create a box body
var box;
var ground;

function setup() {
  createCanvas(800,400);

  //create an engine
  engine = Engine.create();

  //create your world inside your engine
  world = engine.world;

  //create a body - rectangular body
  box1 = new Box(200,300,50,50);
  box2 = new Box(240,100,50,100);

 ground = new Ground(400,380,800,20);
  
}

function draw() {
  background(255,255,255);  

  Engine.update(engine);
  //console.log(box.position.y);

  box1.display();
  box2.display()
  ground.display();
  
}