// covid19-data - from RapidAPI.com
// Note - paid subscription
// https://rapidapi.com/ShubhGupta/api/covid19-data?endpoint=apiendpoint_d5275d2a-ffe4-4a12-8a76-6c9d932e234d

var storeCity = "";
var covidAPIExit = localStorage.getItem("coronaAPIResponse");

// The covid19-data API object is stored and retrieve locally and
// onnly updated once a day with fresh data to save on cost
// and to speed up retrieval times.
if (accessedToday() === false || covidAPIExit === null) {
  getCovidStats("minnesota");
} else {
  getCoronaObjectLocalStore();
}

$(document).ready(function () {
  $(document).ready(function () {
    $("#search-btn").on("click", function () {
      var searchCity = $("#city-input").val().trim();
      $("#city-input").val("");
      storeCity = searchCity;
      getCovidStats(storeCity);
    });
  });
});

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

      $("#restuaurantInfo").empty();
      $("#restuaurantInfo").append(
        titleCase(storeCity) +
          "  - Covid-19 Statistics: &nbsp; Cases = " +
          confirmed +
          "  &nbsp; Deaths = " +
          deaths
      );

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
  for (i = 0; i < 52; i++) {
    state = covidAPIRetrieved.features[i].properties.name;
  }
}

// Test of accessedToday
// console.log("Inital access today call = " + accessedToday());

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
