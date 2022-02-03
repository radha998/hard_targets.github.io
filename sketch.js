
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var left;
var right;
var top_wall;

var ball;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(width/2,670,width,20);//ground is an object. new key word will create an object. Ground is a class name of a ground file.This line will call the constructor of ground file.
	right  = new Ground(1350,600,20,120);
	left = new Ground(1100,600,20,120);
	//top_wall = new Ground(200,10,400,20);

	var ball_options ={
		isStatic:false,
		restitution: 0.3,
		friction:0,
		density:1.2
	}

	ball = Bodies.circle(200,100,20,ball_options);
	World.add(world,ball);

	


	Engine.run(engine);
  
}

function show() {
	var pos = this.body.position;
	Push();
	rectmode(CENTER);
	Fill(1227);
	rect(pos.x,pos.y,this.w,this.h);
	Pop();
}

function draw()
 {
  rectMode(CENTER);

  background(51);

  ellipse(ball.position.x,ball.position.y,20,20);

  ground.show();
  //top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);
  
  drawSprites();
 
}

function hForce(){
	Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
}

function keyPressed()
{
	if(keyCode === UP_ARROW ){

	
	Matter.Body.applyForce(ball,ball.position,{x:85,y:-85});
	}
}

