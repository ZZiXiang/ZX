function draw() {

  

var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
  
ctx.beginPath();
  
  //draw grass 
ctx.fillStyle = '#66FF66';
ctx.rect(0, 300, 500, 300 );
ctx.fill();
  
  for(var j=500; j>300; j-=30){
    for(var i=15; i<500; i+=30){
        drawGrassAt (ctx,i,j);
    }   
  }
  
//draw mountain:
    ctx.fillStyle='green';
    ctx.beginPath();
    ctx.moveTo(0,300);
    ctx.lineTo(100,200);
    ctx.lineTo(200,300);
    ctx.lineTo(0,300);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
  
    ctx.beginPath();
    ctx.moveTo(100,300);
    ctx.lineTo(180,230);
    ctx.lineTo(250,300);
    ctx.lineTo(0,300);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
  
    ctx.beginPath();
    ctx.moveTo(230,300);
    ctx.lineTo(330,230);
    ctx.lineTo(400,300);
    ctx.lineTo(0,300);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
    
//draw sun:
  ctx.fillStyle='orange';
  ctx.beginPath();
  ctx.arc(100, 75, 50, 0, 2 * Math.PI);
  ctx.fill();
  
//draw cloud:
  
  ctx.fillStyle='white';
  ctx.beginPath();
  ctx.arc(100, 150, 30, 0, 2 * Math.PI);
  ctx.arc(130, 150, 30, 0, 2 * Math.PI);
  ctx.arc(160, 150, 30, 0, 2 * Math.PI);
  ctx.fill();

 //draw house:
  ctx.fillStyle='gray';
  ctx.strokeStyle='gray';
  ctx.beginPath();
    ctx.moveTo(350,450);
    ctx.lineTo(350,350);
    ctx.lineTo(380,320);
    ctx.lineTo(410,350);
    ctx.lineTo(410,450);
    ctx.lineTo(350,450);
    // ctx.closePath();
    ctx.stroke();
    ctx.fill();
  
  ctx.fillStyle='yellow';
  ctx.beginPath();
  ctx.arc(380, 370, 20, 0, 2 * Math.PI);
  ctx.fill();
  
  ctx.fillStyle='red';
  ctx.beginPath();
  ctx.fillRect(365, 400, 30,50);
  ctx.fill();
  
  //femce
    ctx.fillStyle='brown';
  ctx.beginPath();
  ctx.fillRect(320, 433, 120 ,5);
  ctx.fill();
  
  for(var q = 0; q< 13; q++){
  drawFenceAt(ctx, 320+q*10 ,430);
  }
}

function drawFenceAt (ctx,x,y){
  ctx.fillStyle ='brown';
  ctx.beginPath();
  ctx.fillRect(x,y,5,30);
  ctx.fill();
}
function drawGrassAt (ctx,x,y){
ctx.lineWidth = "5";
ctx.strokeStyle = "green"; // Green path

ctx.beginPath();
ctx.moveTo(x,y);
ctx.lineTo(x,y-20);
ctx.stroke(); // Draw it

ctx.beginPath();
ctx.moveTo(x,y);
ctx.lineTo(x-10,y-15);
ctx.stroke(); // Draw it
  
ctx.beginPath();
ctx.moveTo(x,y);
ctx.lineTo(x+10,y-15);
ctx.stroke(); // Draw it
}