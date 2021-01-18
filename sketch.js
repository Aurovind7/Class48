const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var player, playerImage, NPC, NPCImage, backgroundImage;
var score=0;
var ground1,ground2,ground3,ground4;
var h1,h2,h3,h4,h5,h6,h7,h8,h9,h10,h11,h12,h13;
var H1,H1_Image;
var gameState="play"
var H1_Group
var rhino,rhinoImg,rhino2Img
var ground
var backGround
var gunshot
var gameOver_sound
var rhinoDead_sound
var gameOverImage,gameOverSprite

function preload(){
  H1_Image=loadImage("Human2.png")
  rhinoImg=loadImage("rhino2.png")
  rhino2Img=loadImage("rhino3.png")
  backGround=loadImage("background3.jpg")
  gunshot=loadSound("gunshot.mp3")
  gameOver_sound=loadSound("bulletfall.mp3")
  rhinoDead_sound=loadSound("rhinos2.mp3")
  gameOverImage=loadImage("gameOverImage.jpg")
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  engine = Engine.create();
  world = engine.world;

  H1_Group=new Group();
  

  ground=createSprite(windowWidth/2,windowHeight-60,windowWidth,20)
  ground.visible=false

  ground1= new Ground(windowWidth/8,windowHeight-50,windowWidth/4, 100)
  ground2= new Ground(windowWidth/2.72,windowHeight-50,windowWidth/4, 100)
  ground3= new Ground(windowWidth/1.65,windowHeight-50,windowWidth/4, 100)
  ground4= new Ground(windowWidth/1.16,windowHeight-50,windowWidth/3.5, 100)
  //player= new Player(windowWidth/2,200,120,100)
  h1= new HumanBottom(100,windowHeight-150);
  h2= new HumanBottom(250,windowHeight-150)
  h3= new HumanBottom(400,windowHeight-150)
  h4= new HumanBottom(550,windowHeight-150)
  h5= new HumanBottom(700,windowHeight-150)
  h6= new HumanBottom(850,windowHeight-150)
  h7= new HumanBottom(1000,windowHeight-150)
  h8= new HumanBottom(1150,windowHeight-150)
  h9= new HumanBottom(1300,windowHeight-150)
  h10= new HumanBottom(1450,windowHeight-150)
  h11= new HumanBottom(1600,windowHeight-150)
  h12= new HumanBottom(1750,windowHeight-150)
  h13= new HumanBottom(1900,windowHeight-150)
  
  rhino=createSprite(windowWidth/2,windowHeight/2,100,100);
  rhino.addImage(rhinoImg);
  rhino.scale=0.4

  gameOverSprite=createSprite(windowWidth/2+11,windowHeight/2+60,200,200)
  gameOverSprite.addImage(gameOverImage)
  
}

function draw() {
  background(backGround);

  if(keyDown(UP_ARROW)){
    rhino.velocityY=-12
  }
  if(keyDown(LEFT_ARROW)){
    rhino.velocityX=-5
  }
  if(keyDown(RIGHT_ARROW)){
    rhino.velocityX=5
  }
  rhino.velocityY+=0.8
  if(gameState==="play"){
    Engine.update(engine);
    spawnHumans();
    fill("red")
    score = score + Math.round(getFrameRate()/(60));
    gameOverSprite.visible=false
  }
     if(H1_Group.isTouching(rhino)||rhino.isTouching(ground)) {
      gameState="end"
      rhinoDead_sound.play();
      gameOver_sound.play();
  }
 textSize(30)
  text("SCORE: "+score,1600,100)

   if(gameState==="end"){
   //rhino.visible=false;
   rhino.addImage(rhino2Img)
   console.log(rhino.y)
   rhino.scale=0.2
   rhino.x=960
   rhino.y=832.5
   rhino.depth=gameOverSprite.depth
   gameOverSprite.depth+=1
   textSize(100);
   stroke("gold")
   strokeWeight(5)
   fill("red")
   //text("GAME OVER",windowWidth/2-300,windowHeight/2-20)
   textSize(40)
   stroke("lightblue")
   fill("Blue")
   //text("This game was made to spread awareness about endangered animals and how people hunt them.",windowWidth/2-850,windowHeight/2+90)
   textSize(30)
   fill("red")
   stroke("gold")
   strokeWeight(4)
  // text("Animals deserve just as many rights as humans do, since they too are living creatures.",windowWidth/2-550,windowHeight/2+150)
   
   //text("Animals rights is a very important since they have feelings and can feel pain, they deserve a long and happy life.",windowWidth/2-720,windowHeight/2+180)
   
   //text("I hope that this game has changed your opinion about animals in a good way and I hope that you understand this message.",windowWidth/2-800,windowHeight/2+220)
   rhino.velocityX=0
   rhino.velocityY=0
   H1_Group.setVelocityYEach(0);

   gameOverSprite.visible=true
 }

  ground1.display();
  ground2.display();
  ground3.display();
  ground4.display();

  //player.display();
  h1.display();
  //h2.display();
  h3.display();
  //h4.display();
  h5.display();
  //h6.display();
  //h7.display();
  //h8.display();
  h9.display();
  //h10.display();
  h11.display();
  //h12.display();
  h13.display();
  
  
  drawSprites();
}

function spawnHumans(){
  if(frameCount%50===0){
    H1=createSprite(100,20,20,20)
    H1.addImage(H1_Image)
    H1.x=Math.round(random(20,windowWidth-20))
    gunshot.play();
    H1.velocityY=5
    H1.scale=0.2
    H1_Group.add(H1)
    H1.setCollider("rectangle",200,0,300,900)
    //H1.debug=true;
  }
}