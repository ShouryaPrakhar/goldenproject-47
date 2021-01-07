var ground,groundImage,invisibleg

var runner,runnerAnimation

var obstacle,enemy1img,enemy2img,enemy3img,enemy4img

var enemy1,enemy2,enemy3,enemy4

var play = 1

var end = 0

 var gamestate=play

 var score=0

 var sun,sunImage

 var cloud,cloudImage
 
 var deathsound,jumpsound

 var bg1

 var bullet,bulletimg

 var health

  var reset,r1,r2



function preload(){
groundImage=loadImage("images/main ground.png")
  runnerAnimation= loadAnimation("images/sprite1.png","images/sprite2.png","images/sprite3.png","images/sprite4.png","images/sprite5.png","images/sprite6.png")
  runnerstanding = loadAnimation("images/sprite1.png")
  r1 = loadImage("images/reset1.png")
  r2 = loadImage("images/reset2.png")
 bg = loadImage("images/Main bg.jpg")
 bulletimg = loadImage("images/bullet-png-images-9.png")
 enemy1img=loadImage("images/Enemy 1.png")
  enemy2img=loadImage("images/Enemy2.png")
   enemy3img=loadImage("images/Enemy3.png")
  enemy4img=loadImage("images/Enemy 4.png")

  
  
  
  
}

function setup() {
  createCanvas(windowWidth,windowHeight)
bg1 =createSprite(550,300,windowWidth,windowHeight)
bg1.addImage(bg)
bg1.scale=3
reset = createSprite(550,450,50,50)
reset.addImage(r2)
reset.scale = 0.4
  ground = createSprite(300,670,600,15)
 ground.addImage(groundImage)
  runner = createSprite(80,620,50,50)
  runner.addAnimation("runner",runnerAnimation)
runner.scale=1.5


 
  enemy1g= new Group();
  enemy2g= new Group();
  enemy3g= new Group();
  enemy4g= new Group();
  bulletg= new Group();
}

function draw() {



if(gamestate === play){
  background("white")

    bg1.velocityX=-7
    ground.velocityX=-9

    if(bg1.x<600){
      bg1.x=813
      bg1.width=bg1.width/2
    }
  if(ground.x<600){
    ground.x=ground.width/2
  }
console.log(windowWidth)
    
  if(keyDown("space")&& runner.y >= 360) {
        bullet = createSprite(80,620,50,50)
        bullet.addImage(bulletimg)
        bullet.velocityX=40
        bullet.scale=0.03
        bullet.lifetime = 500
        bulletg.add(bullet)
    }
   

 var select_enemy = Math.round(random(1,4))

 if(World.frameCount % 50 === 0 ){
 if(select_enemy === 1 ){
  Enemy1()
 } else if(select_enemy === 2 ){
  Enemy2()
 } else if (select_enemy === 3){
  Enemy3()
 } else if (select_enemy ===4  )  {
  Enemy4()
 }}
 

 drawSprites();
 if(enemy1g.isTouching(bulletg)){
  enemy1g.destroyEach();
  bulletg.destroyEach();
  score=score +1;  
}
if(enemy2g.isTouching(bulletg)){
  enemy2g.destroyEach();
  bulletg.destroyEach();
  score=score +4;  
}
if(enemy3g.isTouching(bulletg)){
  enemy3g.destroyEach();
  bulletg.destroyEach();
  score=score +15;  
}
if(enemy4g.isTouching(bulletg)){
  enemy4g.destroyEach();
  bulletg.destroyEach();
  score=score +25;  
}
if(enemy1g.isTouching(runner) ||enemy2g.isTouching(runner) || enemy3g.isTouching(runner) || enemy4g.isTouching(runner)  ){
  gamestate = end

}

textSize(20)
fill("darkblue")
text("Score: "+ score,270,30);
}
if(gamestate === end){
  background("black")
  ground.velocityX=0
  runner.changeAnimation("standing",runnerstanding)
  enemy1g.setVelocityEach(0)
  enemy2g.setVelocityEach(0)
  enemy3g.setVelocityEach(0)
  enemy4g.setVelocityEach(0)

  
textSize(50)
fill("red")
  text("Game Over!!!!",550,350);
  
}
  }


  






function Enemy1(){
  enemy1 = createSprite(Math.round(random(500,1100)),600,50,50)
  enemy1.addImage(enemy1img)
  enemy1.velocityX=-10
  enemy1.scale=0.9
  enemy1.depth=ground.depth+1
   enemy1.lifetime=90
 enemy1g.add(enemy1);

}

function Enemy2(){
  enemy2 = createSprite(Math.round(random(500,1100)),600,50,50)
  enemy2.addImage(enemy2img)
  enemy2.velocityX=-15
  enemy2.scale=0.9
  enemy2.depth=ground.depth+1
   enemy2.lifetime=90
 enemy2g.add(enemy2);
}

function Enemy3(){
  enemy3 = createSprite(Math.round(random(500,1100)),600,50,50)
  enemy3.addImage(enemy3img)
  enemy3.velocityX=-20
  enemy3.scale=0.9
  enemy3.depth=ground.depth+1
   enemy3.lifetime=90
 enemy3g.add(enemy3);
}

function Enemy4(){
  enemy4 = createSprite(Math.round(random(500,1100)),600,50,50)
  enemy4.addImage(enemy4img)
  enemy4.velocityX=-24
  enemy4.scale=0.9
  enemy4.depth=ground.depth+1
   enemy4.lifetime=90
 enemy4g.add(enemy4);
}












