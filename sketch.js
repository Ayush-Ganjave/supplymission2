

var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,line1,line2,line3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	var options={
	    restitution:0.4,
		isStatic:true
	}

	packageBody = Bodies.circle(width/2 , 200 , 5 , options);
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	line1=createSprite(400,650,200,20)
	line1.shapeColor=("red")
	line2=createSprite(510,610,20,100)
	line2.shapeColor=("red")
	line3=createSprite(310,610,20,100)
	line3.shapeColor=("red")

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  if(keyDown("DOWN_ARROW")){
	Matter.Body.setStatic(packageBody,false);  
  }
 

   drawSprites();
    
  
}



