// GETTING FORCAST.IO DATA USING THEIR API && THE SUPERAGENT NODE LIBRARY


// URL WE WANT TO TRAVEL TO
var options = {
	host: "https://api.forecast.io",
	path: "/forecast/f256b505c3b676b717e455c54285b08a/40.7271164,-74.0060906"
}

var googleOp = {
  host: "https://www.googleapis.com/geolocation/v1/geolocate?key=",
  path: "AIzaSyBDxA_eCaJd1N-Pyr13i3JCXhu1cP0nfmE"
}

var http    = require("http");
var request = require("superagent");


http.createServer(function(request, response){

}).listen(8000);


request
  .get(googleOp.host+googleOp.path)
  .end(function(err,res){
    if(err){
      console.log(err);
    }
    if(res.error){
      console.log(res.error);
    }
      location    = ("Location: " + res.body.latitude + ", " + res.body.longitude);
      temperature = ("Temperature: " + res.body.currently.temperature);
      feelsLike   = ("Feels Like: " + res.body.currently.apparentTemperature);
      summary     = ("Summary: " + res.body.currently.summary);
  });
