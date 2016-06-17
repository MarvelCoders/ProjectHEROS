function getTFLData () {

  var TFLRequest = new XMLHttpRequest();

  //Opens a new request
TFLRequest.open("GET", "https://api.tfl.gov.uk/Line/metropolitan/Arrivals?stopPointId=940GZZLUKSX&app_id=&app_key=", true)

TFLRequest.onload = function (e) {
    if(TFLRequest.status === 200 && TFLRequest.readyState === 4) {
      var response = JSON.parse(TFLRequest.responseText);
//IF RESPONSE IS EQUAL TO A PARTICULAR OBJECT THEN DO A B C Waits for response and once response is received it does something
console.log(response);
    var trainStations = '';

        for(var i = 0; i< response.length; i++) {      //response is what I defined if response of the platform name is equal to a particular name then do something)
          if(response[i].platformName === "Eastbound - Platform 2") {
            trainStations += "<li>" + 'EastBound Trains from Kings Cross' + response[i].timeToStation + "</li>";    // Then add blank string to a list and the response of
          }
        }
var directions = '';
        for(var j = 0; j < response.length; j++) {
console.log(j);
          if(response[j].platformName === "Eastbound - Platform 2") {
            console.log(j)
            directions += "<li>" + '(towards) EastBound Trains from Kings Cross' + response[j].towards + "</li>";
          }
        }

        document.getElementById('trainstation').innerHTML= trainStations; // Get the ID tag trainstation and put it within the HTML for the variable trainStations
        document.getElementById('trainstation2').innerHTML= directions;

    } else {
    console.error(TFLRequest.statusText);
    }


  }

    TFLRequest.send();
    return TFLRequest.response;
  }
