document.getElementById('button').addEventListener("click",function(e)
{e.preventDefault();
  document.getElementsByClassName('container2')[0].classList.add('toggle');
      //getNasaImage();
    getTFLData();
});

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

            for(var i = 0; i< response.length; i++) {
                   //response is what I defined if response of the platform name is equal to a particular name then do something)
              if(response[i].platformName === "Westbound - Platform 2") {
                console.log('in if statemernttgt');
                trainStations += "<li>" + 'Westbound Trains from Kings Cross' + response[i].timeToStation + "</li>";    // Then add blank string to a list and the response of
              }
            }
    var directions = '';
            for(var j = 0; j < response.length; j++) {
              if(response[j].platformName === "Westbound - Platform 2") {
                directions += "<li>" + '(towards) Westbound Trains from Kings Cross' + response[j].towards + "</li>";
              }
              if(response[j].platformName === "Eastbound - Platform 2") {
                directions += "<li>" + '(towards) Eastbound Trains from Kings Cross' + response[j].towards + "</li>";
              }
            }
            console.log(trainStations,'train');
            console.log(directions,'dir');

            document.getElementById('trainstation').innerHTML= trainStations; // Get the ID tag trainstation and put it within the HTML for the variable trainStations
            document.getElementById('trainstation2').innerHTML= directions;

        } else {
        console.error(TFLRequest.statusText);
        }


      }

        TFLRequest.send();
        return TFLRequest.response;
      }
