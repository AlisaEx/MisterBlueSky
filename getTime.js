// GET TODAY'S DATE & TIME
var today = new Date();
var timeOfDay = null;


// FORCAST.IO API KEY
var apiKey = 'f256b505c3b676b717e455c54285b08a';


function main(date){
	date = formatCurrentTime(date);
	drawDate(date);
	if(timeOfDay === "PM"){
		drawStars();
		drawGround('blue');
		drawCircle('grey');
	}
	else{
		drawBackground('blue');
		drawGround('green');
		drawCircle('yellow');
	}

}


// FORMATS CURRENT DATE & TIME TO READABLE FORM
function formatCurrentTime(date){
	var currentTime = formatDate(formatTime(date.getHours())) + ":" + 
				 	  formatDate(date.getMinutes()) + " " + 
					  determineTimeOfDay(date.getHours());
	date = formatDate(date.getMonth()+1) + "/" + 
			formatDate(date.getDate()) + "/" + 
			formatDate(date.getFullYear());
	return "Date: " + date + " " + "Time: " + currentTime;
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

// CALL THE MAIN FUNCTION
main(today);