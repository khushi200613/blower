class Ball{
    constructor(x,y,r){
     var option = {
          restitution:1

    }
    this.body=Bodies.circle(x,y,r,option)
    this.r=r
    World .add(world,this.body)
    }
show(){
    var pos=this.body.position
    var angle =this.body.angle
    push ()
    translate (pos.x,pos.y)
    rotate (angle)
    ellipseMode (RADIUS)
ellipse(0,0,this.r,this.r)
pop ()

}
}