class Bullet{
    constructor(x,y,w,h){
        this.x = x;
        this.y = y;
        this.width = w;
        this.height =h;
        this.image = loadImage("./images/bullet.png");
    }

    display() {
        rect(this.x, this.y, 0.1,0.1);
        image(this.image,this.x,this.y);
      }

    speed(){
        this.x = this.x+10
        //this.velocityX = 10;
    }
}