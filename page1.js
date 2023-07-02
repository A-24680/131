img=""

function preload() {
    img=loadImage('th.jpg');
}

function setup() {
    canvas=createCanvas(640,420);
    canvas.center();
}

function draw() {
    image(img,0,0,640,420);
    fill("red");
    text('TV',100,70);
    noFill();
    stroke("red");
    rect(90,40,500,370);
}