let bubblesRise = 500;
let bubblesSize = 20;
let fishSwimRight = 0;
let fishSwimLeft = 1100;
let fishSpeed = 4;
let fishcount = 0;

function setup() {
  createCanvas(800, 500);
}

//makes multiple transparent circles that looks like bubbles that rises in the function draw//
function bubbles(bubblesx, bubblesRise, bubblesSize){
  circle(bubblesx, bubblesRise,bubblesSize);
  circle(bubblesx-20, bubblesRise+20,bubblesSize - 10);
  circle(bubblesx + 20, bubblesRise+ 30, bubblesSize- 5);
  circle(bubblesx-25, bubblesRise-30,bubblesSize);
  circle(bubblesx + 25, bubblesRise -35,bubblesSize+10);
  circle(bubblesx, bubblesRise+50,bubblesSize-15);
}

//Spawns a fish that swims from left to right.
function fishRight(fishSwimRight, fishSwimHeight){
  noStroke();
  fill(200,85,138);
  triangle(fishSwimRight-25, fishSwimHeight, fishSwimRight-60, fishSwimHeight-15, fishSwimRight-60, fishSwimHeight+15);
  triangle(fishSwimRight-20, fishSwimHeight-25, fishSwimRight+10, fishSwimHeight-15, fishSwimRight+5, fishSwimHeight+10);
  fill(194, 34, 44);
  ellipse(fishSwimRight,fishSwimHeight, 70, 35);
  fill(200,85,138);
  triangle(fishSwimRight+10, fishSwimHeight+15, fishSwimRight+5, fishSwimHeight, fishSwimRight, fishSwimHeight+15);
  fill(0);
  circle(fishSwimRight+20, fishSwimHeight-5, 5);
}

//Spawns a fish same as fishRight that moves from right to left.
function fishLeft(fishSwimLeft, fishSwimHeight){
  noStroke();
  fill(37,194,195);
  triangle(fishSwimLeft+25, fishSwimHeight, fishSwimLeft+60, fishSwimHeight-15, fishSwimLeft+60, fishSwimHeight+15);
  triangle(fishSwimLeft+20, fishSwimHeight-25, fishSwimLeft-10, fishSwimHeight-15, fishSwimLeft-5, fishSwimHeight+10);
  fill(6,231,29);
  ellipse(fishSwimLeft, fishSwimHeight, 70, 35);
  fill(37,194,195);
  triangle(fishSwimLeft-10, fishSwimHeight+15, fishSwimLeft-5, fishSwimHeight, fishSwimLeft, fishSwimHeight+15);
  fill(0);
  circle(fishSwimLeft-20, fishSwimHeight-5, 5);
  }

//Counts how many fish have been seen pass through on the screen.
function fishCounter() {
  if (fishSwimRight > 0 && fishSwimRight < 5) {
    fishcount += 1;
  }
  if (fishSwimRight - 900 > 0 && fishSwimRight - 900 < 5) {
    fishcount += 1;
  }
  if (fishSwimRight -1600 > 0 && fishSwimRight -1600 < 5) {
    fishcount += 1;
  }
  if (fishSwimLeft < 800 && fishSwimLeft > 795) {
    fishcount += 1;
  }
  if (fishSwimLeft + 1000 < 800 && fishSwimLeft + 1000 > 795) {
    fishcount += 1;
  }
  return fishcount;
}

//Draws corals out of lines. I suggest using this behind the sand.
function drawCoral(coralXplacement) {
  let coralHeight = 450;
  stroke(181, 107, 97);
  strokeWeight(30);
  line(coralXplacement, coralHeight, coralXplacement, coralHeight - 350);
  line(coralXplacement, coralHeight - 70, coralXplacement - 75, coralHeight - 225);
  line(coralXplacement, coralHeight - 140, coralXplacement + 100, coralHeight - 275);
  line(coralXplacement, coralHeight - 250, coralXplacement - 80, coralHeight - 390);
  line(coralXplacement, coralHeight - 50, coralXplacement - 50, coralHeight - 100);
  line(coralXplacement, coralHeight - 250, coralXplacement + 50, coralHeight - 300);
}

function draw() {
  background(36,152,215);
  fill(77,56,51);
  ellipse(400,450,500,300);
  
  drawCoral(150);
  drawCoral(600);
  
  noStroke(0);
  fill(223,213,195);
  ellipse(250,430,600,50);
  ellipse(700,430,400,40);
  rect(-10,420,850,200);

  noStroke(0);
  fill(161, 107, 147);
  triangle(300,410, 285, 430, 330, 465);
  triangle(265,428,330,428,300,445);
  triangle(270,465,300,445,285,430);
    
  
  if (fishSwimRight>2500){
    fishSwimRight = -120;
  }
  if (fishSwimLeft < -1100){
    fishSwimLeft = 1000;
  }
  fishSwimRight += fishSpeed;
  fishSwimLeft -= fishSpeed;
  fishRight(fishSwimRight, 250);
  fishRight(fishSwimRight - 900, 150);
  fishRight(fishSwimRight-1600, 420);
  fishLeft(fishSwimLeft, 100);
  fishLeft(fishSwimLeft + 1000, 350);

  if (bubblesRise < -1000){
      bubblesRise = 500;}
  bubblesRise -= 8;
  stroke(255);
  strokeWeight(2);
  fill(206,226,232,180);
  bubbles(700,bubblesRise,bubblesSize);
  bubbles(400,bubblesRise + 200,bubblesSize);
  bubbles(50,bubblesRise + 400,bubblesSize);

  circle(mouseX,mouseY, bubblesSize);
  circle(mouseX+10,mouseY-10, bubblesSize-5);
  circle(mouseX,mouseY-25, bubblesSize-10);
  
  noStroke();
  fill(255);
  text("Fish Count: " + fishCounter(),350, 30);

  noStroke();
  fill(245, 245, 250, 50);
  triangle(400, -500, 0, 500, 800, 500);
}