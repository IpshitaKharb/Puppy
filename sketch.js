var dog,sadDog,happyDog;
var addFood,feed;
var foodObj;

// DATABASE RELATED
var database;
var foodS;

function preload(){

  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
  
}

function setup() {
  createCanvas(1000,400);

  database = firebase.database();
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  feed=createButton("FEED THE DOG");
  feed.position(600,95);
  feed.mousePressed(feedDog);

  addFood=createButton("ADD FOOD");
  addFood.position(800,95);
  addFood.mousePressed(addMilk);

  foodObj=new Food();
  

}

function draw() {
  background(46,139,87);

  foodObj.display();
  
  drawSprites();
}

function feedDog(){

  dog.addImage(happyDog);

  foodObj.foodStock-=1;

  foodObj.updateFoodStock();
  
  if(foodObj.foodStock <=0){
    foodObj.foodStock=0;
  }

}

function addMilk(){
  
  foodObj.foodStock+=1;
  foodObj.updateFoodStock();

}