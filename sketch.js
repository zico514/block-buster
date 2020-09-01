const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var slingshot;


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
b1=new Box(200,200,40,40)

q1=new Bo(600,245,30,40);
q2=new Bo(615,245,30,40);
q3=new Bo(585,245,30,40);
q4=new Bo(570,245,30,40);
q5=new Bo(630,245,30,40);

q6=new Bo(600,220,30,40);
q7=new Bo(585,220,30,40);
q8=new Bo(615,220,30,40);

q9=new Bo(600,200,30,40);

q10=new Bo(900,90,30,40);
q11=new Bo(915,90,30,40);
q12=new Bo(885,90,30,40);

q13=new Bo(900,70,30,40);


    ground = new Ground(600,height,1200,20);
    g1=new Ground(900,100,150,10)
 g2=new Ground(600,250,200,10);
   
    
    slingshot = new Slingshot(b1.body,{x:200, y:200});
}

function draw(){
    background(50);
    Engine.update(engine);
    strokeWeight(4);
    text(mouseX+","+mouseY,mouseX,mouseY);
    //log6.display();
    slingshot.display();   
b1.display();
ground.display();
g1.display();
g2.display();
q1.display();
q2.display();
q3.display();
q4.display();
q5.display();
q6.display();
q7.display();
q8.display();
q9.display();
q10.display();
q11.display();
q12.display();
q13.display();





}

function mouseDragged(){
    Matter.Body.setPosition(b1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}