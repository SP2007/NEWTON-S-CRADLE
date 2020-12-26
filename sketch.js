
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

const Constraint = Matter.Constraint;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5,bobDiameter;
var roof,roofObject;
var rope1,rope2,rope3, rope4,rope5;
//var constrained;

function preload()
{
	
}

function setup() {
	createCanvas(700, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	roofObject=new Roof(width/2,height/4,width/7,20);

	bobDiameter=40;
	bobObject1=new Bob(280,450,40);
	bobObject2=new Bob(290,450,40);
	bobObject3=new Bob(330,450,40);
	bobObject4=new Bob(380,450,40);
	bobObject5=new Bob(420,450,40);

rope1=new Rope(bobObject1.body,roofObject.body,-bobDiameter*2, 0)

	rope2=new Rope(bobObject2.body,roofObject.body,-bobDiameter*1, 0)
	rope3=new Rope(bobObject3.body,roofObject.body,0, 0)
	rope4=new Rope(bobObject4.body,roofObject.body,bobDiameter*1, 0)
	rope5=new Rope(bobObject5.body,roofObject.body,bobDiameter*2, 0)

 


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
 bobObject1.display();
 bobObject2.display();
 bobObject3.display();
 bobObject4.display();
 bobObject5.display();
 roofObject.display();



  drawSprites();
 
}

function drawLine(constraint)
{
	bobBodyPosition=constraint.bodyA.position
	roofBodyPosition=constraint.bodyB.position

	roofBodyOffset=constraint.pointB;
	
	roofBodyX=roofBodyPosition.x+roofBodyOffset.x
	roofBodyY=roofBodyPosition.y+roofBodyOffset.y
	line(bobBodyPosition.x, bobBodyPosition.y, roofBodyX,roofBodyY);
}

