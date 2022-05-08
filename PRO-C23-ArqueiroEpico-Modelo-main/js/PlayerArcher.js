class PlayerArcher{

  constructor(x,y,width,heigth){

    const options = {
      isStatic: true
    }
    
    //THIS.

   this.body = Matter.Bodies.rectangle(x,y,width,heigth,options);
  
   this.collapse = false;
   this.width = width;
   this.heigth = heigth;
   this.x = x;
   this.y = y;

   //PRELOAD

   this.image = loadImage("./assets/playerArcher.png");


   World.add(world, this.body);

   Matter.Body.setAngle(this.body,-90);
  }

  display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    
    if(keyIsDown(DOWN_ARROW) && angle<-73){
      angle+=1;
      Matter.Body.setAngle(this.body,angle);

    }

    if(keyIsDown(UP_ARROW) && angle>-103){
      angle-=1;
      Matter.Body.setAngle(this.body,angle);
    }
    
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image,0,0,this.width,this.heigth);
    pop();

    

  }
}



