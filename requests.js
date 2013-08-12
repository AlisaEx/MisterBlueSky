var skyCanvas = document.getElementById('sky');
var context = skyCanvas.getContext("2d");
var timeOfDay = null;
var today = new Date();


function main(date){
	date = getCurrentTime(date);
	if(timeOfDay === "PM"){
		drawNightTime(date);
	}
	else{
		drawDayTime(date);
	}

}




// CREATE RANDOMLY GENERATED STARS FOR NIGHTTIME
function drawStars(){
	context.beginPath();
	context.fillStyle = 'black';
	context.rect(0,0,skyCanvas.width,skyCanvas.height-300);
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


function getCurrentTime(){
	var currentTime = formatDate(today.getHours()) + ":" + formatDate(today.getMinutes()) + " " + formatTime(today.getHours());
	today = formatDate(today.getMonth()+1) + "/" + 
			formatDate(today.getDate()) + "/" + 
			formatDate(today.getFullYear());
	return "Date: " + today + " " + "Time: " + currentTime;
}

function formatDate(date){
	if(date<10){
		date = "0" + date;
	}
	return date;
}

function formatTime(hours){
	if(hours > 11){
		timeOfDay = "PM";
		return timeOfDay;
	}
	else{
		timeOfDay = "AM";
		return timeOfDay;
	}
}

function drawNightTime(date){
	context.font = "24pt Helvetica";
	context.fillStyle = 'black';
	context.fillText(date, skyCanvas.width/2-300, skyCanvas.height-100);
	drawStars();
	context.beginPath();
	context.arc((skyCanvas.width/2)-300,(skyCanvas.height/2)-200, 50, 0, 2*Math.PI, true);
	context.fillStyle = timeOfDay.circle;
	context.fill();
	context.stroke();
	context.closePath();
}

function drawDayTime(date){
	context.font = "24pt Helvetica";
	context.fillStyle = 'black';
	context.fillText(date, skyCanvas.width/2-300, skyCanvas.height-100);
	context.beginPath();
	context.rect(0,0,skyCanvas.width,skyCanvas.height-300);
	context.fillStyle = 'blue';
	context.fill();
	context.stroke();
	context.closePath();
	context.beginPath();
	context.arc((skyCanvas.width/2)-300,(skyCanvas.height/2)-200, 50, 0, 2*Math.PI, true);
	context.fillStyle = 'yellow';
	context.fill();
	context.stroke();
	context.closePath();
}
main(today);