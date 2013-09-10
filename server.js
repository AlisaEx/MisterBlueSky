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
        icon        = ("<span><img src='Icons/" + response.body.currently.icon + ".png'></span>");
        summary     = ("<span>" + response.body.currently.summary+ "</span>");
        temperature = ("<span>Temperature " + response.body.currently.temperature + "&deg;</span>")
        feelsLike   = ("<span>Feels Like " + response.body.currently.apparentTemperature + "&deg</span>");
        location    = (Math.round(response.body.latitude) + ", " + Math.round(response.body.longitude)+"</span>");
        var info = [icon, summary, temperature, feelsLike, location].join("<br>");
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