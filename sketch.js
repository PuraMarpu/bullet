var machine,hill,velocity,mass,thickness;



function setup() {
  createCanvas(1600,400);

  thickness = random(20,80);

  velocity = random(220,270);
  mass = random(30,50);

  machine = createSprite(100,200,30,10);
  machine.velocityX = velocity;

  wall = createSprite(1300,200,thickness,350);
  wall.shapeColor = color(50,50,90);
}

function draw() {
  background(200,200,250);  

  if(collide()){
    var effect =0.5 * mass * velocity * velocity/(thickness*thickness*thickness);
    
    machine.velocityX = 0;

    if(effect > 10){ 
      machine.shapeColor = color(255,0,0);
    }
     if(effect < 10){
      machine.shapeColor = color(0,0,255);
    }
  }
  drawSprites();
}

function collide(){
   var right,left;

   right = machine.x + machine.width/2;
   left = wall.x - wall.width/2;
   
   if(right >= left){
     return true;
   }
   else{
     return false;
  }
}