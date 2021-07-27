
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var wall1,wall2,wall3;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;
    

	var ball_options={
		isStatic:false,
		restitution:0.3,
		frction:0,
		destiny:1.2
	}

	var ground_options ={
		isStatic: true
	  };

	  var wall1_options ={
		isStatic: true
	  };
	  var wall2_options ={
		isStatic: true
	  };
	  var wall3_options ={
		isStatic: true
	  };


	
	ball = Bodies.circle(100,10,20,ball_options);
    World.add(world,ball);
    
	ground = Bodies.rectangle(500,690,1000,20,ground_options);
	World.add(world,ground);

	wall1 = Bodies.rectangle(960,560,20,650,wall1_options);
	World.add(world,wall1);

	wall2 = Bodies.rectangle(780,430,20,130,wall2_options);
	World.add(world,wall2);

	wall3 = Bodies.rectangle(860,500,180,20,wall3_options);
	World.add(world,wall3);


  

	Engine.run(engine);
    ellipseMode(RADIUS);
	rectMode(CENTER);
	keyPressed();
}


function draw() {
  rectMode(CENTER);
  background('lightblue');

  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,1000,20);
  rect(wall1.position.x,wall1.position.y,20,650);
  rect(wall2.position.x,wall2.position.y,20,130);
  rect(wall3.position.x,wall3.position.y,180,20);
  
  drawSprites();
 
}

function keyPressed(){
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(ball,x=0,y=0.5,x=0.5,y=0)
	}

}



