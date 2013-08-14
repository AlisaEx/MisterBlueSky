myCanvas = document.getElementById("sky");
context = myCanvas.getContext("2d");

var APIKEY = 'f256b505c3b676b717e455c54285b08a'
var url = "";


function generateUrl(apiKey, position){
	if(typeof position != "string"){
		position = JSON.stringify(position);
	}
	url = "https://api.forecast.io/forecast/"+APIKEY+"/"+position;
	console.log(url);
}

function writeText(text){
	console.log(text);
	context.font = "24pt Helvetica";
	context.fillStyle = "black";
	context.fillText(text, myCanvas.width/3, myCanvas.height/2);
}

var map;

function initialize() {
  // Try HTML5 geolocation
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = new google.maps.LatLng(position.coords.latitude,
                                       position.coords.longitude);
      pos = JSON.stringify(pos.mb) + "," + JSON.stringify(pos.nb);
      console.log(pos);
      generateUrl(APIKEY, pos);
    }, function() {
      handleNoGeolocation(true);
    });
  } else {
    // Browser doesn't support Geolocation
    handleNoGeolocation(false);
  }
}

function handleNoGeolocation(errorFlag) {
  if (errorFlag) {
    var content = 'Error: The Geolocation service failed.';
  } else {
    var content = 'Error: Your browser doesn\'t support geolocation.';
  }
}

google.maps.event.addDomListener(window, 'load', initialize);