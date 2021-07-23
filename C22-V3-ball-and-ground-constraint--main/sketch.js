const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine, myWorld;
var ball, ground,ball1;

var rope1;

function setup() {
  createCanvas(400,400);

  myEngine = Engine.create();

  myWorld = myEngine.world;

  var ball_options = {

    isStatic: true
  };

  ball = Bodies.circle(200, 50, 10, ball_options);
  ball1=Bodies.circle(150,50,10,ball_options);
  World.add(myWorld, ball);

  ground = new Ground(200, 380, 400, 20);

 /* rope1 = Matter.Constraint.create({

    pointA: {x: 200, y:20},
    bodyB: ball,
    pointB: {x:0, y:0},
    length: 100,
    stiffness: 0.1
  });
*/

//can we build constraint between 2 bodies ?
  // rope1 =  Matter.Constraint.create({

  //   pintA: {x:200,y:100},
  //   bodyB: ball,
  //   length: 330,
  //   stiffness: 0.1
  // })

  rope1 = Matter.Constraint.create({
    pointA:{x:0,y:5},
    bodyB:ball,
    pointB:{x:0,y:5},
    pontA:{x:20,b:20},
    bodyB:ball1,
    pointB:{x:0,y:5},
   length:20,
    stiffness:0.1
  });

  World.add(myWorld, rope1);

  ellipseMode(RADIUS);
  rectMode(CENTER);
  
}

function draw() 
{
  background(51);

  Engine.update(myEngine);

  ellipse(ball.position.x, ball.position.y, 10);

  ellipse(ball1.position.x, ball1.position.y, 10);
  ground.display();


  push();
  stroke("White");
  strokeWeight(3)
 // line(rope1.pointA.x, rope1.pointA.y, ball.position.x, ball.position.y);
   line(ball.position.x, ball.position.y,ball1.position.x, ball1.position.y);
  pop();
}