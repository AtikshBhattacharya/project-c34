var canvas, backgroundImage;
var dog, happyDog, database, foodS, foodStock;

function preload()
{
dog = loadImage("images/dogImg.png");
happyDog = loadImage("images/dogImg1.png");
}

function setup() {
canvas= createCanvas(500, 500);
database = firebase.database();
 dog = createSprite(550,250,10,10);
 dog.addImage("dog",dog);
foodStock = database.ref('Food')
foodStock.on("value", readStock);
}


function draw() {  
background(46,139,87);
if(keyWentDown(UP_ARROW)){
	writeStock(foodS); 
	dog.addImage("dog",happyDog);
}
  drawSprites();
  textSize(10);
  fill("green");
  stroke("black");
  text("print foodStock from database",200,200);
}
function readStock(data){
	foodS = data.val();
}
function writeStock(x){
	database.ref('/').update({
		Food:x
	})
}



