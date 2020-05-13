//RESTAURANT VARS
var name;
var cuisineType;
var ifDeliver;
var menuURL;
var mainURL;
var resID;
var times;
var phoneNum;
var Address;

//LOCATION VARS
var lat = 0;
var lon = 0;
var settings;

// BUTTONS
var getCurrent = $(".currentLoc");
var searchBtn = $(".searchbtn");

//INPUT
var searchInput = $("#searchInput").val();

//ON CLICKS
getCurrent.on("click", function(event){
    event.preventDefault();
    
    navigator.geolocation.getCurrentPosition((position) =>{
        console.log(position.coords.latitude);
        console.log(position.coords.longitude);

        lat = position.coords.latitude;
        lon = position.coords.longitude;
        
        getResID(lat,lon);
        getDetails(resID);
      }) 

});

searchBtn.on("click", function(event){
    event.preventDefault();
    var city = searchInput;
    geoLookUp(); // GEO LOOK UP IS IN city-geo-lookup-script.js
    //MAKE SURE TO LINK IN HTML!
    
})



//GEO STUFF // IS IN city-geo-lookup-script.js
// function geoLookUp (){
    
//     settins = {
//         async: true,
//         crossDomain: true,
//         url:"https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=" + city,
//         method: "GET",
//         headers: {
//             "x-rapidapi-host": "devru-latitude-longitude-find-v1.p.rapidapi.com",
//             "x-rapidapi-key": "4f9b629588mshaf3f53eee01ba60p166742jsn4b237a2eb674",
//         }
//     }

//     $.ajax(settings).done(function (response) {
//         console.log(response.Results[0]);
//         lat = response.Results[0].lat;
//         lon = response.Results[0].lon;

//         getResID(lat,lon);
//     })
// };


//This function is able to get an exact city with lat,lon. Also displays nearby restaurants in the area.
function getResID(lat,lon) {

    var queryURL = "https://developers.zomato.com/api/v2.1/geocode?lat="+ lat + "&lon=" + lon;

    $.ajax({
        url: queryURL,
        method: "GET",
        headers: {"user-key": "9676fbee52483b7f84598fb4456e5135"},
        dataType: "json",
    }).then(updatePage);

    function updatePage(locationResults){ 
        // GETS restaraunts  ID for the 9 queries.
        for(let i = 0; i < 9; i++) {    
           resID = locationResults.nearby_restaurants[i].restaurant.id;

          //  GETS rest of info for restaurants.
          getDetails(resID);
         
        }
      }    
};

// Gets in-depth details of restaurant.
function getDetails(res_id) {
  var queryURL = "https://developers.zomato.com/api/v2.1/restaurant?res_id=" + res_id;

    $.ajax({
        url: queryURL,
        method: "GET",
        headers: {"user-key": "9676fbee52483b7f84598fb4456e5135"},
        dataType: "JSON",
    }).then(updatePage);
    function updatePage(resDetails){
       name = resDetails.name;
       cuisineType = resDetails.cuisines;
       phoneNum = resDetails.phone_numbers;
       address = resDetails.location.address;
       times = resDetails.timings;
       ifDeliver = resDetails.highlights[0];
       menuURL = resDetails.menu_url;
       mainURL = resDetails.url;

      if(times === ""){
        times = "Time Not Available.";
      }

      if(ifDeliver === "Delivery"){
        ifDeliver = "Has Delivery";
      }else{
        ifDeliver = "Delivery is unknown. Please Call Establishment.";
      }

      console.log(resDetails);

      console.log("Name : "+ name);
      console.log("Cuisine : "+ cuisineType);
      console.log("Address : "+ address);
      console.log("Phone : "+ phoneNum);
      console.log("Times : "+ times);
      console.log("Delivery : "+ ifDeliver);
      console.log("Menu : "+ menuURL);
      console.log("Zomato Website : "+ mainURL);
      console.log("-------------------------")    
    }
};
