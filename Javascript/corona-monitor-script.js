// Coronavirus monitor - from RapidAPI.com
// Note - have cases by state and "some" counties
// https://rapidapi.com/astsiatsko/api/coronavirus-monitor

// Change function call to desired state
// coronaMon("minnesota");

function coronaMon(state) {
  var urlBase =
    "https://coronavirus-monitor.p.rapidapi.com/coronavirus/johns_hopkins_latest_usa_statistic_by_state.php?state=";
  var queryURL = (urlBase += state);

  var settings = {
    async: true,
    crossDomain: true,
    url: urlBase,
    method: "GET",
    headers: {
      "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
      "x-rapidapi-key": "4f9b629588mshaf3f53eee01ba60p166742jsn4b237a2eb674",
    },
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
  });
}
