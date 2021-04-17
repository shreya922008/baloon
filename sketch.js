var balloon,balloonImage1,balloonImage2;
var position,database ;
function setup(){
    createCanvas(500,500);
    database=firebase.database()
    var balloonlposition= database.ref("balloon/position")
    balloonposition.on("value",readposition)

}


function preload(){
   bg =loadImage("cityImage.png");
   balloonImage1=loadAnimation("hotairballoon1.png");
   balloonImage2=loadAnimation("hotairballoon1.png","hotairballoon1.png",
   "hotairballoon1.png","hotairballoon2.png","hotairballoon2.png",
   "hotairballoon2.png","hotairballoon3.png","hotairballoon3.png","hotairballoon3.png");
  }


function draw(){
  
    if(keyDown(LEFT_ARROW)){
        writeposition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writeposition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writeposition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writeposition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    balloon.x = balloon.x + x;
    balloon.y = balloon.y + y;
}
function readposition(data){
position=data.val()
balloon.x=position.x
balloon.y=position.y
}
function writeposition(x,y){
    database.ref("balloon/position").set({
        x:position.x+x,
        y:position.y+y
    })
}