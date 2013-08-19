var APIKEY = 'f256b505c3b676b717e455c54285b08a'
var url = "";


function generateUrl(apiKey, position){
	if(typeof position != "string"){
		position = JSON.stringify(position);
  }
  drawText("Latitude, Longitude: " + position, 100, 650);
	url = "https://api.forecast.io/forecast/"+APIKEY+"/"+position;

}

var map;

function initialize() {
  // Try HTML5 geolocation
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = new google.maps.LatLng(position.coords.latitude,
                                       position.coords.longitude);
      pos = JSON.stringify(pos.mb) + "," + JSON.stringify(pos.nb);
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