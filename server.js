// GETTING FORCAST.IO DATA USING THEIR API && THE SUPERAGENT NODE LIBRARY
var http    = require("http");
var request = require("superagent");
var url     = require("url");

function onRequest(req, res){
  console.log("Request recieved");
  var query = url.parse(req.url, true).query;
  var location = [query.lat, query.long];
  var apiUrl = "https://api.forecast.io/forecast/f256b505c3b676b717e455c54285b08a/"+location[0]+","+location[1];
  request
    .get(apiUrl)
    .end(function(err,response){
      if(err){
        console.log(err);
      }
      if(response.error){
        console.log(response.error);
      }
        location    = ("Latitude: " + response.body.latitude + "<br>Longitude: " + response.body.longitude);
        temperature = ("Temperature: " + response.body.currently.temperature + "&deg;");
        summary     = ("Current weather: " + response.body.currently.summary);
        var info = [location, temperature, summary].join("<br>");
        var headers = {
          "Content-Type": "text/plain",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "X-Requested-With"
        }
        res.writeHead(200, headers);
        res.end(info);
      });
  }
http.createServer(onRequest).listen(8001);
console.log("Server Started.");