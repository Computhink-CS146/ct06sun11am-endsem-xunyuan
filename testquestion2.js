let pokemons = ["Pikachu","Raichu","Bulbasaur","Mewtwo","Charizard"];
let yPos;

function setup(){
    createCanvas(200, 300);
    fill("pink");
    // Task: Align the text to the center using textAlign
    // Task: set font size to 20 using textSize
    textAlign(CENTER,CENTER);
    textSize(20);
    yPos = 100;

}

function draw() {
    background(0);
    yPos =  50;
    for (let i = 0; i < pokemons.length;i++) {
        text(pokemons[i],width/2,yPos);
        yPos = yPos + 50;
    }
}