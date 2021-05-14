const engine = Matter.Engine;
const world = Matter.World;
const bodies = Matter.Bodies;
const body = Matter.Body;
const Constraint = Matter.Constraint;

var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10;
var block11,block12,block13,block14,block15,block16,block17,block18,block19,block20;
var ground,miniG,miniG2;
var hexa,hexaImage;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  block1=new Block(240,425,30,30);
}

function draw() {
  background(255,255,255); 

  engine = Engine.create();
  world = engine.world;
  Engine.update(engine);


  block1.display();
  drawSprites();
}