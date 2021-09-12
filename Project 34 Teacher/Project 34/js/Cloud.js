class Cloud {
  constructor(x, y, width, height, cloudPos) {
    var options = {
      restitution: 0.8,
      friction: 1.0,
      density: 1.0,
      label: "cld"
    };
   
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;

    this.cloudPosition = cloudPos;
    this.image = loadImage("assets/cloud.png");
    World.add(world, this.body);
  }
  

  display() {
    var angle = this.body.angle;
    var pos = this.body.position;
    
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, this.cloudPosition, this.width, this.height);
    pop();
  }
}
