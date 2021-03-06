var helicopterIMG, helicopterSprite; 
var packageSprite, packageIMG;
var packageBody, ground;

var baseright, baseleft, basebottom;

const Engine = Matter.Engine;
const World  = Matter.World;
const Bodies = Matter.Bodies;
const Body   = Matter.Body;

function preload() {
    helicopterIMG = loadImage("helicopter.png")
    packageIMG    = loadImage("package.png")
}

function setup() {

	createCanvas(800, 700);
	rectMode(CENTER);
	
	packageSprite = createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale = 0.2;

	helicopterSprite = createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale = 0.6;

	groundSprite = createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor = color(255);

	baseleft = createSprite(290, 610, 20, 100);
	baseleft.shapeColor = "red";

	baseright = createSprite(490, 610, 20, 100);
	baseright.shapeColor = "red";

	basebottom = createSprite(380, 650, 200, 20); 
	basebottom.shapeColor = "red";

	engine = Engine.create();
	world  = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);
	 
    baseleft = Bodies.rectangle(290, 610, 20, 100 , {isStatic:true} );
	World.add(world, baseleft);
	 
    baseright = Bodies.rectangle(490, 610, 20, 100 , {isStatic:true} );
	World.add(world, baseright);
	
	basebottom = Bodies.rectangle(380, 650, 200, 20 , {isStatic:true} );
 	World.add(world, basebottom);

	Engine.run(engine);

}

function draw() {

    rectMode(CENTER);
    background(0);

    packageSprite.x = packageBody.position.x 
	packageSprite.y = packageBody.position.y 

	drawSprites();
	
	textSize(30);
    stroke("#eb5e28");
	fill("#eb5e28");
	text("MEDICINE DELIVERY", 250,100);
 
}

function keyPressed() {

    if (keyCode === DOWN_ARROW) {
	    Matter.Body.setStatic(packageBody, false);
	}
	
	if (packageBody.x = ground.position.x) {
		textSize(20);
		stroke("pink");
		fill("pink");
		text("MISSION COMPLETE", 150,350);
	}
}