var catSitting1,catWalking1,catWalking2,catSitting2
var mouseGifting,mouseTeasing1,MouseTeasing2,detectiveMouse
var garden,invisiblewall
function preload() {
    backgroundImg=loadImage("images/garden.png");
    catSitting1Img=loadImage("images/cat1.png");
    catWalking1Img=loadAnimation("images/cat2.png","images/cat3.png");
    catSitting2Img=loadImage("images/cat4.png");
    mouseGiftingImg=loadImage("images/mouse1.png");
    mouseTeasing1Img=loadAnimation("images/mouse2.png","images/mouse3.png");
    detectiveMouseImg=loadImage("images/mouse4.png");
   
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
     catSitting1=createSprite(900,600,20,20)
    catSitting1.addImage("catsitting",catSitting1Img);
    catSitting1.scale=0.1;

    mouseGifting=createSprite(225,600,20,20)
    mouseGifting.addImage("gift",mouseGiftingImg);
    mouseGifting.scale=0.1;

     invisiblewall=createSprite(150,600,40,100)
     invisiblewall.visible=false;

}

function draw() {

    background(backgroundImg)
    textSize(20)
    fill("red")
    text(mouseX+","+mouseY,mouseX,mouseY)
    catSitting1.collide(invisiblewall)
    if(catSitting1.isTouching(mouseGifting)){
        catSitting1.addAnimation("sit",catSitting2Img)
        catSitting1.changeAnimation("sit") 
        catSitting1.velocityX=0;
        mouseGifting.addAnimation("detect",detectiveMouseImg)
        mouseGifting.changeAnimation("detect")
    }
    keyPressed()
    //Write condition here to evalute if tom and jerry collide
    //catSitting1.debug=true;
   

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyDown(LEFT_ARROW)){
    catSitting1.velocityX=-5;
    catSitting1.addAnimation("movingcat",catWalking1Img)
    catSitting1.changeAnimation("movingcat")

   
    mouseGifting.addAnimation("movingmouse",mouseTeasing1Img)
        mouseGifting.changeAnimation("movingmouse")
}
    

}
