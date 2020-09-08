class Paper {
    constructor(x,y,r){
        var options= {
            isStatic:false,
            restitution :0.3,
            friction:0.5,
            density: 1.2

        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(x,y,r,options);
        this.r=r;

    }
    display(){
        var paperPosition=this.body.position;
push();
translate(paperpos.x,paperpos.y);
strokeWeight(4);
fill("green");
ellipse(0,0,this.r,this.r);
    }
    
}