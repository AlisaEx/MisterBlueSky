var getLocation = function(){
    navigator.geolocation.getCurrentPosition(function(position){
      var location = ("lat=" + position.coords.latitude + "&long=" + 
                                      position.coords.longitude); 
      makeRequest(location);
    })
};

function makeRequest(location){
  var serverUrl = 'http://localhost:8001?'+location;
  $.ajax({
    url: serverUrl,
    xhrField:{
      withCredentials: true
    },
    success: function(res){
      $('#weather').text(res);
    },
    error: function(err){
      console.log(err);
    }
    });
}