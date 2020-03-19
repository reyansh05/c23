const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2;
var g1
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(220,100,50,150);
    box2 = new Box(200,200,50,50);
    g1 = new ground(200,390,400,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
   box2.display();
    g1.display();
}