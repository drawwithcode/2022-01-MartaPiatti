let sfondo; //creaete a variable for the photo that will be used as background
let arcColor = "#0A3B5C"; //create a variable that contains the color of the arc

function setup() {
  createCanvas(550, 550);
  background("#201E41"); //it's possible to draw over this background because it's uploaded only at the beginning
  angleMode(DEGREES); //define the unit used for the rotation
  sfondo = loadImage("assets/sfondo.png"); //upload the photo used for the background
  colorButton = createButton("Change color"); //create a button label as "change color"
  colorButton.size(100, 25);
  colorButton.position(225, 510);
  colorButton.mousePressed(changeColorArc); //when the button is clicked the function changeColorArc is called to action
}

function draw() {
  let myColor = lerpColor(color("#ED6E75"), color("#0A3B5C"), frameCount % 10); //create a variable that contains a color created by learping two different colors and choosing the gradient by using the remainder of the division between the frame counts and 10
  let secondColor = lerpColor(color("#ED6E75"), color("#0A3B5C"), random(0, 1)); //create a variable that contains a color created by learping two different colors and choosing the gradient by generating a random number between 0 and 1
  image(sfondo, 0, 0); //show the image that is being used as background. You can't draw over this drawing because a new layer is uploaded 60 times per second
  noStroke(); //remove the stroke from following shapes
  push(); //create a box where the different settings are applied only until "pop()"
  fill("#B89ACC"); //fill the shapes inside push-pop
  circle(mouseX, mouseY, 30); //create a circle that follows the mouse's position
  pop(); //close the box and restore the settings
  fill("#683767");
  push();
  let i = 0; // create a variable name i
  i = sin(frameCount) * 40;
  translate(0, i); //translate the rectangle by i on the y axis
  rect(170, 230, 35, 15);
  pop();
  push();
  fill(arcColor); //fill the triangle qith the color contained in the variable
  translate(200, 80); //translate the center to put it in the center of the arc
  rotate(frameCount); //rotate the arc by the frameCount
  arc(0, 0, 80, 80, 0, 30, PIE); //create a arc usic is position, width, heigh and by specyfing to use a pie mode
  pop();
  stroke("#201E41");
  strokeWeight(5); //define the wheight of the stroke
  rect(50, 487, 87, 20, 0, 10, 10, 0); //create a rectangle and smooth two of its corners
  line(50, 487, 50, 306); //create a line defining starting and ending point
  line(50, 306, 254, 306);
  line(104, 306, 104, 72);
  line(205, 306, 205, 202);
  rect(50, 52, 54, 20, 10, 0, 0, 10);
  noFill(); //remove the fill to following shapes
  bezier(254, 306, 254, 315, 269, 405, 178, 405); //create a line defined by its starting and ending points and its anchor points
  bezier(205, 202, 205, 156, 233, 120, 275, 120);
  stroke("#F0E6DF");
  line(345, 306, 345, 202);
  line(303, 306, 303, 52);
  line(403, 306, 403, 487);
  line(340, 490, 340, 450);
  line(340, 450, 455, 370);
  bezier(345, 202, 345, 156, 317, 120, 277, 120);
  bezier(303, 52, 370, 52, 450, 52, 450, 140);
  stroke(myColor); //define the stroke's color by using the variable created ad the start
  circle(154, 405, 48);
  circle(450, 175, 70);
  fill(secondColor);
  stroke("#F0E6DF");
  circle(340, 490, 30);
  circle(490, 370, 70);
  fill("#ED6E75");
  rect(303, 306, 100, 10);
  rect(403, 487, 87, 20, 0, 10, 10, 0);
}

//create a function to change the color of the arc when the button is pressed
function changeColorArc() {
  if (arcColor == "#0A3B5C") {
    //check what's the current color of the arc to change it
    arcColor = "#ED6E75";
  } else {
    arcColor = "#0A3B5C";
  }
}
