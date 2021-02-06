class Paper {
    constructor(x,y) {
    var options={
        isStatic:false,
        restitution:0.3,
        friction:0.6,
        density:0.6
  }  
  this.body = Bodies.rectangle(x, y, 50, 50, options);
  this.width = 50;
  this.height = 50;
  this.image = loadImage("paper.png");
  World.add(world, this.body);
 }

display(){
imageMode(CENTER)
image(this.image,this.body.position.x,this.body.position.y,50,50);
}

}
