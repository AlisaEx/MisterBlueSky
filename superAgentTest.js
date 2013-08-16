// GETTING FORCAST.IO DATA USING THEIR API && THE SUPERAGENT NODE LIBRARY


// URL WE WANT TO TRAVEL TO
var options = {
	host: "https://api.forecast.io",
	path: "/forecast/f256b505c3b676b717e455c54285b08a/40.7271164,-74.0060906"
}


var request = require("superagent");
// var time = require("/getTime.js");
// var drawing = require("/draw.js");
// var location = require("/getLocation.js");

request
  .get(options.host+options.path)
  .end(function(err,res){
    if(err){
      console.log("Error: " + err);
    }
    if(res.error){
      console.log("Error: " + res.error);
    }
      console.log("Location: " + res.body.latitude + ", " + res.body.longitude);
      console.log("Temperature: " + res.body.currently.temperature);
      console.log("Feels Like: " + res.body.currently.apparentTemperature);
      console.log("Summary: " + res.body.currently.summary);
  });