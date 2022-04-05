
/*const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;*/

function preload()
{
	bgImage = loadImage("./images/bg.png");
	spacecraftImage = loadImage ("./images/spacecraft.png");
	earthImage = loadImage ("./images/earth.png");
	bulletImage = loadImage("./images/bullet.png");
	asteroidImage = loadImage("./images/asteroid.png");
	bullet2Image = loadImage("./images/bullet2.jpg");
}

function setup() {
	createCanvas(1800, 800);

	//engine = Engine.create();
	//world = engine.world;

	backg = createSprite (0,0)
	backg.scale = 4;
	backg.addImage("bgImg", bgImage);

	spaceCraft = createSprite(150,200);
	spaceCraft.addImage("spcImg", spacecraftImage);
	spaceCraft.scale = 2.2;

	earth = createSprite(1380, 458);
	earth.addImage("earthImg", earthImage);
	earth.scale = 0.7;

	moon1 = new Moon ();
	bullet = new Bullet (spaceCraft.x,spaceCraft.y,0.1,0.1);
	bullet.scale = 0.01;

	bullet2Group = new Group();
	enemyGroup = new Group();
		//Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

   edges=createEdgeSprites();

   //making the background infinite
   backg.velocityX = -1;
   if (backg.x <= -150){
	 backg.x =230;
   }

   spaceCraft.collide(edges);
   spaceCraft.y = World.mouseY;
   spaceCraft.setCollider("circle", 0,0,40);
   spaceCraft.debug = true;

   spawnEnemies();
   drawSprites();

   textSize(35);
   fill("White");
   text("Press Space to shoot!",100,30);

   moon1.display();
   bullet.display();

}

function mouseClicked (){
bullet.speed();

}


function spawnEnemies(){
	enemy = createSprite(1820,random(50,650),0.1,0.1);
	if (frameCount % 80=== 0){
	  enemyGroup.add(enemy)
	  enemy.velocityX = random(-4,-6);
	  enemy.velocityY = random(-2,3);
	  enemy.addImage("astImg", asteroidImage);
	  enemy.scale = random(0.1,0.16);
	  enemy.lifetime =400;
	  
	}
	if(spaceCraft.overlap(enemyGroup,function (spaceCraft,enemy){
		enemy.remove();
		console.log("HI");
	})){
	}

	bullet2 = createSprite (1820,random(50,650),1,1);
	if(frameCount%120 === 0){
		bullet2Group.add(bullet2);
		bullet2.velocityX = -17;
		bullet2.addImage("bullet2Img", bullet2Image);
		bullet2.scale = 0.07;
		//bullet2.lifetime = 150;
	}
	if(bullet2Group.collide(spaceCraft)){
		console.log(bullet2.y);
		bullet2Group.destroyEach();
	}
  }


function scCollision(){
	
}
