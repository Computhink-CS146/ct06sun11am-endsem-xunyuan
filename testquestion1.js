let ballXpos = 300;
let speed = 2;

function setup() {
    createCanvas(600,400);


}

function draw() {
    background('lightblue');
    ballXpos += speed;
    if(ballXpos > width - 25) {
        speed = speed *-1;
    }
    if(ballXpos < 0 + 25) {
        speed = speed*-1;
    }
    
    fill('green');
    
    circle(ballXpos,height/2,50);
    

}