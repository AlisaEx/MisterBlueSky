var APIKEY = 'f256b505c3b676b717e455c54285b08a'
var url = "";


var generateUrl = function(apiKey, position){
	if(typeof position != "string"){
		position = JSON.stringify(position);
  }
  // drawText("Latitude, Longitude: " + position, 100, 650);
  url = "https://api.forecast.io/forecast/"+APIKEY+"/"+position;
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

var server = function(url){
  var xhr = new XmlHttpRequest();
  xhr.open("GET", "localhost:8000/url="+url, true);
  xhr.send();
}
