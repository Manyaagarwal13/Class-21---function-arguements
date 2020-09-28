   var FR , MR ;

   function setup() {
  createCanvas(1200,800 );
   FR = createSprite(600, 400, 50, 80);
   FR.debug = true ;
   FR.shapeColor  = "green" ;
   MR= createSprite(400,200,80,30);
   MR.debug = true ;
   MR.shapeColor  = "green" ;
}

function draw() {
  background(0,0,0);  

  MR.x = World.mouseX ;
  MR.y = World.mouseY;
  

 
     
    if(isTouching(MR,FR)){ 
       
      MR.shapeColor = "red" ;
      FR.shapeColor = "red" ;
    }
    else{
      MR.shapeColor = "green" ;
      FR.shapeColor = "green" ;
    }



  drawSprites();
}
 
