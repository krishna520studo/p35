//Create variables here
var dog;
var happyDog;
var database;
var foodS;
var foodStock;

function preload()
{
	//load images here
  dogIMG = loadImage("images/dogImg.png");
  dogIMG2 = loadImage("images/dogImg.png");
}

function setup() {
	createCanvas(500, 500);

  dogSprite=createSprite(width/2, 300, 10,10);
	dogSprite.addImage(dogIMG);
	dogSprite.scale=0.2
  
}


function draw() {  
background(46,139,87);
  drawSprites();
  //add styles here
dogSprite.display();

if(keyWentDown(UP_ARROW)) {
  writeStock(foodS);
  dogSprite.addImage(dogIMG2);
}
foodStock=database.ref('Food');
foodStock.on("value",readStock);

function readStock(data){
  foodS=data.val();
}

function writeStock(x) {

  database.ref('/').update({
    Food:x
  })
}
}



