const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var canvas, ground;
var clouds = [];
var clouds_image;

function preload() {
 
}

function setup() {
  canvas = createCanvas(windowWidth,windowHeight-5);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(0, height - 550, width * 2, 1);
}

function draw() {
  background(75, 175, 218);
  Engine.update(engine);
  //ground.display();
  showClouds();
}

function showClouds() {
  if (clouds.length > 0) {
    if (clouds.length < 50 && clouds[clouds.length - 1].body.position.x < width - 300) {
      var positions = [-10, -60, -100, -30];
      var position = random(positions);
      var cloud = new Cloud(width,height - 650,100,100,position);
      clouds.push(cloud);
    }

    for (var i = 0; i < clouds.length; i++) {
      Matter.Body.setVelocity(clouds[i].body, {
        x: -0.9,
        y: 0
      });

      clouds[i].display();
   
    }
  } else {
    var cloud = new Cloud(width, height - 650, 100, 100, -60);
    clouds.push(cloud);
  }
}




