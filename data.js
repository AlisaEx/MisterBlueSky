// GETTING FORCAST.IO DATA USING THEIR API && THE SUPERAGENT NODE LIBRARY


// URL WE WANT TO TRAVEL TO
var options = {
	host: "https://api.forecast.io",
	path: "/forecast/f256b505c3b676b717e455c54285b08a/40,-70",
}

// var http    = require("http");
var request = require("superagent");

// http.createServer(function(request, response){
// console.log("Request recieved");
request
  .get(options.host+options.path)
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
      console.log(location, temperature, feelsLike, summary);
  });
// }).listen(8000);
