function httpGet(theUrl){
	xmlHttp = new XMLHttpRequest();
	xmlHttp.open( "GET", theUrl, false );
	if(xmlHttp.withCredentials === false){
		console.log("shit");
	}
	xmlHttp.send();
	return xmlHttp.status;
}

httpGet("http://www.google.com");