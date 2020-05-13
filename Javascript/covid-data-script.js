// covid19-data - from RapidAPI.com
// Note - paid subscription
// https://rapidapi.com/ShubhGupta/api/covid19-data?endpoint=apiendpoint_d5275d2a-ffe4-4a12-8a76-6c9d932e234d

// Capitalizes first letter of each word.
// var titleCase = titleCase("new york");
// console.log("tiltel case = " + titleCase);

// Get the state index number that corresponds to the API request.

var covidAPIExit = localStorage.getItem("coronaAPIResponse");

if (accessedToday() === false || covidAPIExit === null) {
  getCovidStats("minnesota");
} else {
  getCoronaObjectLocalStore();
}

function getCovidStats(state) {
  var titleCase01 = titleCase(state);
  var stateIndexCall = lookUpStateIndex02(titleCase01);

  getStats(stateIndexCall);

  var confirmed = "";
  var deaths;
  var geo_id;
  var latitude;
  var longitude;
  var state;

  function getStats(stateIndex) {
    var settings = {
      async: true,
      crossDomain: true,
      url: "https://covid19-data.p.rapidapi.com/geojson-us",
      method: "GET",
      headers: {
        "x-rapidapi-host": "covid19-data.p.rapidapi.com",
        "x-rapidapi-key": "4f9b629588mshaf3f53eee01ba60p166742jsn4b237a2eb674",
      },
    };

    $.ajax(settings).done(function (response) {
      var stateIdexNum = 0;
      stateIdexNum = stateIndex;
      confirmed = response.features[stateIdexNum].properties.confirmed;
      deaths = response.features[stateIdexNum].properties.deaths;
      geo_id = response.features[stateIdexNum].properties.geo_id;
      latitude = response.features[stateIdexNum].properties.latitude;
      longitude = response.features[stateIdexNum].properties.longitude;
      state = response.features[stateIdexNum].properties.name;
      console.log("Confirmed cases = " + confirmed);
      console.log("Confirmed deaths = " + deaths);
      console.log(geo_id);
      console.log(latitude);
      console.log(longitude);
      console.log(state);
      console.log(response);
      setLocalStore();

      // function setLocalStore() saves the corona API response to local storage
      function setLocalStore() {
        localStorage.setItem("coronaAPIResponse", JSON.stringify(response));
      }
    });
  }
}

//  getCoronaObjectLocalStore();
// console.log("getObjArray = " + getObjArray);

function getCoronaObjectLocalStore() {
  var covidAPIRetrieval = localStorage.getItem("coronaAPIResponse");
  var covidAPIRetrieved = JSON.parse(covidAPIRetrieval);
  console.log(covidAPIRetrieved);
  // var state = covidAPIRetrieved.features[1].properties.name;
  // console.log("state = " + state);

  for (i = 0; i < 52; i++) {
    state = covidAPIRetrieved.features[i].properties.name;
    console.log("for loop state = " + state);
  }

  //return covidAPIRetrieval;
}

// Test of accessedToday
console.log("Inital access today call = " + accessedToday());

// fucntion is used to see if an API request has been made today.
function accessedToday() {
  var accessedToday = false;
  var todayString = getNumDay().toString();
  var lastAccess = localStorage.getItem("lastAccess");
  if (lastAccess === null) {
    localStorage.setItem("lastAccess", JSON.stringify(todayString));
    getCovidStats("minnesota");
  } else {
    if (lastAccess === todayString) {
      accessedToday = true;
    } else {
      localStorage.setItem("lastAccess", JSON.stringify(getNumDay()));
      accessedToday = false;
    }
  }

  return accessedToday;
}
