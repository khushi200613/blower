class Pipe{
    constructor(x,y,w,h){
     var option = {
          isStatic:true

    }
    this.body=Bodies.rectangle(x,y,w,h,option)
    this.w=w
    this.h=h
    World .add(world,this.body)
    }
show(){
    var pos=this.body.position
    var angle =this.body.angle
    push ()
    translate (pos.x,pos.y)
    rotate (angle)
    rectMode (CENTER)
    fill('brown')
rect(0,0,this.w,this.h)
pop ()

}
}