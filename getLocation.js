var APIKEY = 'f256b505c3b676b717e455c54285b08a'
var url = "";


var generateUrl = function(apiKey, position){
	if(typeof position != "string"){
		position = JSON.stringify(position);
  }
  // drawText("Latitude, Longitude: " + position, 100, 650);
  url = "https://api.forecast.io/forecast/f256b505c3b676b717e455c54285b08a"+"/"+position;
  console.log(url);
}

var getLocation = function(){
    navigator.geolocation.getCurrentPosition(function(position){
      var location = JSON.stringify(position.coords.latitude + "," + 
                                      position.coords.longitude); 
      console.log(location);
      return(location);
    })
};
