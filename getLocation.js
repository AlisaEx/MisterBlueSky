// var APIKEY = 'f256b505c3b676b717e455c54285b08a'
// var url = "";

// var generateUrl = function(apiKey, position){
// 	if(typeof position != "string"){
// 		position = JSON.stringify(position);
//   }
//   // drawText("Latitude, Longitude: " + position, 100, 650);
//   url = "https://api.forecast.io/forecast/f256b505c3b676b717e455c54285b08a"+"/"+position;
//   console.log(url);
// }

var getLocation = function(){
    navigator.geolocation.getCurrentPosition(function(position){
      var location = ("lat=" + position.coords.latitude + "&long=" + 
                                      position.coords.longitude); 
      console.log(location);
      makeRequest(location);
    })
};

function makeRequest(location){
  var params = ('localhost:8001/?'+location)
  $.ajax({
    url: params,
    xhrField:{
      withCredentials: true
    },
    success: function(res){
      console.log(res);
    },
    error: function(err){
      console.log(err);
    }
    });
}

getLocation();