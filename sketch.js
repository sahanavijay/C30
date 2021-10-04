const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var rope,fruit,ground;
var fruit_con;

//create Variables for bgimg,food,rabbit,button
var bgimg,fruit,rabbit,button;
var rabbitImg;

//Load images in function preload
function preaload(){
  bgimg = loadImage("background.png");
  fruit = loadImage("melon.png");
  rabbitImg = loadImage("Rabbit-01.png");
}

function setup() 
{
  createCanvas(500,700);
  frameRate(80);

  engine = Engine.create();
  world = engine.world;

  //Create button
 button=createImg("cut_btn.png");
 button.position(200,30);
 button.size(50,50);
 button.mouseClicked(drop)
  
  rope = new Rope(8,{x:220,y:30});
  ground = new Ground(200,690,600,20);
  

  fruit = Bodies.circle(300,300,20);
  Matter.Composite.add(rope.body,fruit);

  fruit_con = new Link(rope,fruit);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)

  //write code to center the image
  imageMode(CENTER);
}

function draw() 
{
  background(51);
  image(bgimg,0,0,displayWidth+80,displayHeight);
  rope.show();
  ground.show();
  rabbit= createSprite(200,620,100,100);
  rabbit.addImage(rabbitImg);
  rabbit.scale=0.2;
  //Add fruit Image
  image(fruit,fruit.position.x,fruit.position.y,70,70);

  Engine.update(engine);
  
  //Write code to display the sprite
 drawSprites();
}

//Decalre the drop function
function drop(){
  rope.break();
  fruit_con.detach();
  fruit_con= null
}





