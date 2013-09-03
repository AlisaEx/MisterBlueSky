function main(){
	// getLocation();
	var date = getTime();
	$('.span3 #time').html(date[0]);
	$('.span3 #date').html(date[1]);
};


function getTime(){
	var today = new Date();
	var timeEnd = today.getHours > 11 ? "PM" : "AM";
	var time = formatDate(formatHour(today.getHours())) + ":" + 
				formatDate(today.getMinutes()) + timeEnd;
	var day = formatDate((today.getMonth() + 1)) + "/" + 
				formatDate(today.getDate()) + "/" +
				formatDate(today.getFullYear());
	return [time, day];
}


// ADD ZEROS WHERE NECESSARY TO DATES & TIMES
function formatDate(date){
	if(date<10){
		date = "0" + date;
	}
	return date;
}

// MAKES TIME 12 HOUR BASED INSTEAD OF 24 HOUR BASED
function formatHour(time){
	if (time > 12){
		time -= 12;
	}
	return time;
}

// CALL THE MAIN FUNCTION
main();