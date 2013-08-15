var options = {
	host: "https://api.forecast.io",
	path: "/forecast/f256b505c3b676b717e455c54285b08a/40.7271164,-74.0060906"
}

var request = require("superagent");


request
  .get(options.host+options.path)
  // .withCredentials();
  .end(function(err,res){
    if(err){
      console.log(err);
    }
    if(res.error){
      console.log(res.error);
    }
      console.log(res);
  });