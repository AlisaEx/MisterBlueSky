$(document).ready(function(){

$.ajax({
	url: 'https://api.forecast.io/forecast/f256b505c3b676b717e455c54285b08a/40,-70',
	xhrFields: {
		withCredentials: true
	},
	success: function(res){
		console.log(res);
	},
	error: function(err){
		console.log(err);
	}
	});
});

