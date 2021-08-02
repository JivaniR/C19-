var scene, sceneImg
var player, playerImg;
var titan,titanImg,titanGroup;
var invisibleBlock, invisibleBlock2;
var gameOver, gameOver_Img
var gameState= "play"


function preload(){
    sceneImg= loadImage("bg.png");
    playerImg= loadImage("character.png");
    titanImg= loadImage("titan.png");
    gameOver_Img= loadImage("gameOver.png");

}

function setup() {
    createCanvas(400,400);
    scene= createSprite(300,100);
    scene.addImage("abc",sceneImg);
   
 
player= createSprite(100,300);
player.addImage("abc",playerImg);
player.scale= 0.45

gameOver= createSprite(200,200)
game

invisibleBlock= createSprite(50,50,300,10)
 invisibleBlock2= createSprite(50,390,300,10)
    
titanGroup= new Group()
}

function draw() {


    if(keyDown("Space")){
        player.velocityY = -5;
    }

if(player.isTouching(invisibleBlock)){

    player.velocityY= 5
}

    if(player.isTouching(titan)){

        titan.destroyEach();
        player.destroy();
        gameOver

    }
    player.collide(invisibleBlock2)

    spawnTitans()

 drawSprites()
}

function spawnTitans(){

    if(frameCount%150===0){
        titan= createSprite(400,310,10,10)
        titan.addImage("abc",titanImg)
        titan.scale= 0.2
        titan.velocityX= -3
        titanGroup.add(titan)
    }
}
