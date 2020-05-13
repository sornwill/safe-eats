// Function return current latitude longitude of the calling application
var latitude = 0;
var longitude = 0;

// getCurrentLocation();

// function getCurrentLocation() {
//   function onPositionReceived(position) {
//     console.log(position);
//     latitude = position.coords.latitude;
//     longitude = position.coords.longitude;
//     console.log("lat = " + latitude);
//     console.log("lon = " + longitude);
//   }

//   function locationNotReceived(postionError) {
//     console.log(postionError);
//   }

//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(
//       onPositionReceived,
//       locationNotReceived,
//       { timeout: 3 }
//     );
//   }
// }

navigator.geolocation.getCurrentPosition((position) => {
  console.log(position.coords.latitude);
  console.log(position.coords.longitude);
});
