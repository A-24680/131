img=""

function preload() {
    img=loadImage('download.jpg');
}

function setup() {
    canvas=createCanvas(640,420);
    canvas.center();
}

function draw() {
    image(img,0,0,640,420);
    fill("red");
    text('DESK',100,70);
    noFill();
    stroke("red");
    rect(30,0,600,370);
}