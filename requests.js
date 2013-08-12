var skyCanvas = document.getElementById('sky');
var context = skyCanvas.getContext("2d");
var today = new Date();
var timeOfDay = null;

function main(date){
	date = formatCurrentTime(date);
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

// FORMATS CURRENT DATE & TIME TO READABLE FORM
function formatCurrentTime(){
	var currentTime = formatDate(formatTime(today.getHours())) + ":" + 
				 	  formatDate(today.getMinutes()) + " " + 
					  determineTimeOfDay(today.getHours());
	today = formatDate(today.getMonth()+1) + "/" + 
			formatDate(today.getDate()) + "/" + 
			formatDate(today.getFullYear());
	return "Date: " + today + " " + "Time: " + currentTime;
}

// ADD ZEROS WHERE NECESSARY TO DATES & TIMES
function formatDate(date){
	if(date<10){
		date = "0" + date;
	}
	return date;
}

// MAKES TIME 12 HOUR BASED INSTEAD OF 24 HOUR BASED
function formatTime(time){
	if (time > 12){
		time -= 12;
		return time;
	}
}

// SETS THE TIMEOFDAY VARIABLE TO AM OR PM
function determineTimeOfDay(hours){
	if(hours > 11){
		timeOfDay = "PM";
		return timeOfDay;
	}
	else{
		timeOfDay = "AM";
		return timeOfDay;
	}
}

// DRAWS THE NIGHT SKY IF TIMEOFDAY === PM
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

// DRAWS THE DAY SKY IF TIMEOFDAY === AM
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


// CALL THE MAIN FUNCTION
main(today);