// EXAMPLE NOT USING SUPER AGENT LIBRARY
// UNABLE TO ACCESS FORCAST.IO API THROUGH THIS METHOD SO FAR
// CROSS ORIGIN RESOURCE SHARING IS AN ISSUE (CORS)


var http = require("http");

var options = {
	host: "https://api.forecast.io",
	path: "/forecast/f256b505c3b676b717e455c54285b08a/40.7271164,-74.0060906"
}


callback = function(response) {
  var str = '';

  //another chunk of data has been recieved, so append it to `str`
  response.on('data', function (chunk) {
    str += chunk;
  });

  //the whole response has been recieved, so we just print it out here
  response.on('end', function () {
    console.log(str);
  });
}

// http.request("http://www.google.com", callback).end();
http.request(options, callback).end();