const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

engine = Engine.create();
 world = engine.world;

function setup() {
  createCanvas(800,400);
  
 ball = new Ball(400,150,40,40)
 pipe = new Pipe(300,300,300,20)
 mouth = new Pipe(400,260,100,100)

 btn = createButton("click to blow")
 btn.position=(400,350)
 
}

function draw() {
  background(255,255,255);  
  
 ball.show()
 pipe.show()
 mouth.show()

}