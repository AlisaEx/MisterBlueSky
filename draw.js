// INSTANTIATE THE CANVAS ELEMENT
skyCanvas = document.getElementById("sky");
context = skyCanvas.getContext("2d");


// CREATE RANDOMLY GENERATED STARS FOR NIGHTTIME
function drawStars(){
	context.beginPath();
	context.fillStyle = 'black';
	context.rect(0,0,skyCanvas.width,skyCanvas.height);
	context.fill();
	context.beginPath();
	for(var i=0;i<100;i++){
	    var x=parseInt(Math.random()*skyCanvas.width);
	    var y=parseInt(Math.random()*skyCanvas.height);
	    var radius=Math.random()*3;
	    context.arc(x,y,radius,0,Math.PI*2,false);
	    context.closePath();
	}
	context.fillStyle="white";
	context.fill();
}

// DRAWS THE DATE & TIME TO THE CANVAS
function drawText(text, x, y){
	context.font = "24pt Helvetica";
	context.fillStyle = 'black';
	context.fillText(text, x, y);
}

// DRAWS THE BACKGROUND OF THE CANVAS
function drawBackground(color){
	context.beginPath();
	context.rect(0,0,skyCanvas.width, skyCanvas.height);
	context.fillStyle = color;
	context.fill();
	context.stroke();
	context.closePath();
}
// DRAWS THE GROUND ON THE CANVAS
function drawGround(color){
	context.beginPath();
	context.rect(0,300,skyCanvas.width, skyCanvas.height);
	context.fillStyle = color;
	context.fill();
	context.stroke();
	context.closePath();
}

// DRAWS A CIRCLE REPRESENTING A SUN OR MOON DEPENDING ON TIME OF DAY
function drawCircle(color){
	context.beginPath();
	context.arc((skyCanvas.width/2)-300,(skyCanvas.height/2)-100, 50, 0, 2*Math.PI, true);
	context.fillStyle = color;
	context.fill();
	context.stroke();
	context.closePath();
}