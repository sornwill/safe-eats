
// MAIN
var name;
var cuisineType;
var ifDeliver;
var menuURL;
var mainURL;
var resID;
var times;
var phoneNum;
var Address;

navigator.geolocation.getCurrentPosition((position) =>{
  console.log(position.coords.latitude);
  console.log(position.coords.longitude);
}) 

getResID(44.770918400000006,-93.47072);

getDetails(resID);



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





