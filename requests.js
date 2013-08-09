var skyCanvas = document.getElementById('sky');
var context = skyCanvas.getContext("2d");
var background = 'blue';
var sunOrMoon = 'yellow';

function getCurrentTime(){
	var today = new Date();
	var currentTime = formatDate(today.getHours()) + ":" + formatDate(today.getMinutes());
	today = formatDate(today.getMonth()+1) + "/" + 
			formatDate(today.getDate()) + "/" + 
			formatDate(today.getFullYear());
	return "Date: " + today + " " + "Time: " + currentTime + " " + formatTime(currentTime);
}

function formatDate(date){
	if(date<10){
		date = "0" + date;
	}
	return date;
}

function formatTime(time){
	if(time > 11){
		return "PM";
		background = 'black';
		sunOrMoon = 'blue';
	}
	else{
		return "AM";
	}
}



function drawContext(){
	context.beginPath();
	context.rect(0,0,skyCanvas.width,skyCanvas.height);
	context.fillStyle = background;
	context.fill();
	context.stroke();
	context.closePath();
	context.beginPath();
	context.arc((skyCanvas.width/2)-200,(skyCanvas.height/2)-200, 50, 0, 2*Math.PI, true);
	context.fillStyle = sunOrMoon;
	context.fill();
	context.stroke();
	context.closePath();
	context.font = "24pt Helvetica";
	context.fillStyle = 'black';
	context.fillText(getCurrentTime(), skyCanvas.width/2-300, skyCanvas.height-100);
}

drawContext();