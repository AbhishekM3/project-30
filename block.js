class Block {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false

      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height; 
      this.visibility = 255;

      World.add(world,this.body);
    }
    display(){
      if(this.body.speed<3){
    
      rect(this.body.position.x,this.body.position.y, this.width,this.height);
      
    }
    else {
      push();
      World.remove(world,this.body);
      this.visibility = this.visibility-5;
      tint(255,this.visibility);
      rect(this.body.position.x,this.body.position.y, this.width,this.height);
      pop();
    }
  }
};
     



             