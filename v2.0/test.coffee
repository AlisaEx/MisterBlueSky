request = require 'request'

testLocation = '33.4213,-111.9427'
apiUrl = 'https://api.forecast.io/forecast/f256b505c3b676b717e455c54285b08a/'



request.get { url: apiUrl + testLocation }, (err, res, body) ->
  if err
    console.log err
  else
    body = JSON.parse body
    console.log body.currently.icon