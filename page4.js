img=""

function preload() {
    img=loadImage('th (3).jpg');
}

function setup() {
    canvas=createCanvas(640,420);
    canvas.center();
}

function draw() {
    image(img,0,0,640,420);
    fill("red");
    text('AC',100,70);
    noFill();
    stroke("red");
    rect(40,0,570,390);
}