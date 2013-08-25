var url = 'localhost:8001/'+currentLoc;

$(document).ready(function(){
	console.log("jquery set");
$.get({
	url: 'localhost:8001/',
	xhrFields: {
		withCredentials: true
	},
	success: function(res){
		$('div').text(res);
	},
	error: function(err){
		console.log(err);
	}
	});
});

