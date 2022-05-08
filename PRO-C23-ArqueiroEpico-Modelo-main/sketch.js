const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, canvas, world;
var backgroundImg, playerImg, baseImg;
var player, base;
var playerArcher,playerArrow;


function preload(){
  backgroundImg = loadImage("./assets/background.png");
  playerImg = loadImage("./assets/player.png")
  baseImg = loadImage("./assets/base.png")


}

function setup(){
  angleMode(DEGREES);
  canvas = createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;

  var options = {
    isStatic: true
  }

  base = Bodies.rectangle(200, 350,180,150,options);
  World.add(world,base);

  player = Bodies.rectangle(250,base.position.y-159, 50, 180,options);
  World.add(world,player);
  
  playerArcher = new PlayerArcher(340,base.position.y-112,120,120);
  playerArrow = new PlayerArrow(playerArcher.body.position.x, playerArcher.body.position.y,100,10);
  
}

function draw(){
  background(backgroundImg);

  image(baseImg,base.position.x,base.position.y,180,150);
  image(playerImg,player.position.x, player.position.y, 50,180);

  playerArcher.display();
  playerArrow.display();

  if(keyCode===32){
    playerArrow.shoot(playerArcher.body.angle);
  }

  Engine.update(engine);
} 