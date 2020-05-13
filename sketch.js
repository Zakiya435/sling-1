const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var gamestate = "onsling";
var engine, world;
var sling,ball;
var block1,block2,block3,block4,block5,block11,block12,block13,block14,block15,block22,block23,block24,block25,log1,log2,log3;
function setup() 
{
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground();
  block1 = new Blocks(310, 200);
  block2 = new Blocks(345, 200);
  block3 = new Blocks(380, 200);
  block4 = new Blocks(330, 150);
  block5 = new Blocks(365, 150);
  log1 = new Log(340,220);

  block11 = new Blocks(20, 200);
  block12 = new Blocks(55, 200);
  block13 = new Blocks(90, 200);
  block14 = new Blocks(40, 150);
  block15 = new Blocks(75, 150);
  log2 = new Log(50,220);

  block21 = new Blocks(160, 300);
  block22 = new Blocks(195, 300);
  block23 = new Blocks(230, 300);
  block24 = new Blocks(180, 250);
  block25 = new Blocks(215, 250);
  log3 = new Log(200,320);
  

  //sling = new Sling(ball.body,{x:200, y:80});

}

function draw() 
{
  background(0,0,0); 
  Engine.update(engine); 
  fill(48, 255, 217);
  block1.display();
  block11.display();
  block21.display();
  fill(251, 122, 39);
  block2.display();
  block12.display();
  block22.display();
  fill(210, 58, 244);
  block3.display();
  block13.display();
  block23.display();
  fill(247, 231, 108);
  block4.display();
  block14.display();
  block24.display();
  fill(242, 89, 127);
  block5.display();
  block15.display();
  block25.display();
  
  log1.display();
  log2.display();
  log3.display();
  //sling.display();

  
}
/*function mouseDragged(){
  if(gamestate !== "launched")
  {
  Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
  }
}


function mouseReleased()
{
  sling.fly();
  gamestate = "launched";
}*/