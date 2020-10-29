class base {
    constructor(x, y, width, height) {
      var base_options = {isStatic : true}
    
      this.body   = bodies.rectangle(x, y, widht, height, base_options);
      this.width  = width;
      this.height = height;
    
    World.add(world, this.body);
    }
    
    display () {
        var pos = this.body.position;
        rectMode(CENTER);
        rect(pos.x, pos.y, this.width, this.height)
    }
}