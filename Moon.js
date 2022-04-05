class Moon{
    constructor(){
        this.x = 400;
        this.y = 400;
        this.image = loadImage("./images/moon.png")
    }

    display(){
        push();
        rectMode(CENTER);
        translate(1400, 450);
        translate(p5.Vector.fromAngle(millis() / 600, 290));
        rect(0, 0, 20, 20);
        image(this.image,-140,-112);
        pop();
    }
}