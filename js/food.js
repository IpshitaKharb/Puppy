class Food {
  constructor() {
    this.image = loadImage("Images/Milk.png");
    this.foodStock = 30;
  }

  getFoodStock(){
    var foodRef = database.ref('foodStock');
    foodRef.on("value",(data) => {
      foodS = data.val();
    })
  }
  
  updateFoodStock(){
    database.ref('/').update({
      foodStock : this.foodStock
    });
  }
  
  detectFood(){
    if(this.foodStock>0){
      this.foodStock-=1;
    }
  }
  
  display(){

    var x = 80;
    var y = 50;

    imageMode (CENTER);
    image(this.image,720,220,70,70);
  
     if(this.foodStock!=0){
       for(var i = 0; i < this.foodStock  ; i++){
         if( i % 10 == 0){
           x = 80;
           y = y + 80;
         }
         image(this.image,x,y,80,80);
         x += 40;
       }
     }
  }
}