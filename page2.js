img=""

function preload() {
    img=loadImage('th (1).jpg');
}

function setup() {
    canvas=createCanvas(640,420);
    canvas.center();
}

function draw() {
    image(img,0,0,640,420);
    fill("red");
    text('SOFA',100,70);
    noFill();
    stroke("red");
    rect(30,40,600,370);
}