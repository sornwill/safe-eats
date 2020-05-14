// Function return current latitude longitude of the calling application
var latitude = 0;
var longitude = 0;

navigator.geolocation.getCurrentPosition((position) => {
  // console.log(position.coords.latitude);
  // console.log(position.coords.longitude);
});

// IP Geo Location API
// geoLocation();
function geoLocation() {
  var settings = {
    async: true,
    crossDomain: true,
    url: "https://ip-geo-location.p.rapidapi.com/ip/23.123.12.11?format=json",
    method: "GET",
    headers: {
      "x-rapidapi-host": "ip-geo-location.p.rapidapi.com",
      "x-rapidapi-key": "4f9b629588mshaf3f53eee01ba60p166742jsn4b237a2eb674",
    },
  };

  $.ajax(settings).done(function (response) {
    console.log("ip-geo locations");
    console.log(response);
  });
}
