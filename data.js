// GETTING FORCAST.IO DATA USING THEIR API && THE SUPERAGENT NODE LIBRARY

var http    = require("http");
var superA  = require("superagent");
var url     = require("url");
var fs      = require("fs");

http.createServer(function(request, response){
console.log("Request recieved");
var path = url.parse(request.url).pathname;
var location = url.parse(request);
console.log(path);
console.log(location);
console.log(request, response);
if(location === "/getLocation.js"){
  superA
    .get("https://api.forecast.io/forecast/f256b505c3b676b717e455c54285b08a/"+location)
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
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.end(location, temperature, feelsLike, summary);
    })
  }
else{
  fs.readFile('./index.html', function(error, file) {  
      if(error) {  
        console.log(error);
          return;  
      }
      response.writeHead(200, { 'Content-Type': 'text/html' });  
      response.end(file, "utf-8");  
  });
}
}).listen(8001);

console.log("Server Started.");
