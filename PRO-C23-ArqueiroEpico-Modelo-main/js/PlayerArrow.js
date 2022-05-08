class PlayerArrow{
  constructor(x,y,width,height){
    
    var options={
      isStatic:true,
      density:0.1
    }

    //THIS.
    this.body = Matter.Bodies.rectangle(x,y,width,height,options);
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    //PRELOAD

    this.image = loadImage("./assets/arrow.png");
    World.add(world,this.body);

  }

  shoot(archerAngle){
    var velocity = p5.Vector.fromAngle(archerAngle);

    velocity.mult(20);

    Matter.Body.setStatic(this.body, false);
    Matter.Body.setVelocity(this.body,{x:velocity.x,y:velocity.y});


  }

  display(){
   var pos = this.body.position;
   var angle = this.body.angle;

   push();
    translate(pos.x,pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image,0,0,this.width, this.height);
   pop();
   
  }
}