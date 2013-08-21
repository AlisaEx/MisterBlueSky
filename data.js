// GETTING FORCAST.IO DATA USING THEIR API && THE SUPERAGENT NODE LIBRARY
var http    = require("http");
var request  = require("superagent");
var url     = require("url");

function onRequest(req, res){
  console.log("Request recieved");
  var path = req.url;
  console.log(path);
  var url = "https://api.forecast.io/forecast/f256b505c3b676b717e455c54285b08a"+path.toString();
  request
    .get(url)
    .end(function(err,res){
      if(err){
        console.log(err);
      }
      if(res.error){
        console.log(res.error);
      }
        location    = ("Location: " + res.body.latitude + ", " + res.body.longitude);
        temperature = ("Temperature: " + res.body.currently.temperature);
        summary     = ("Summary: " + res.body.currently.summary);
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.write(temperature);
      })
  }

http.createServer(onRequest).listen(8001);
console.log("Server Started.");


