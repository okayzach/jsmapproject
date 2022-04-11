let userLong = 1;
let userLat = 1;
var mapDiv = document.querySelector(".map")
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(userCoords);
    } else {
        mapDiv.innerHTML = "Geolocation is not supported by this browser.";
    }
  }

async function userCoords(position){
    userLong = await position.coords.longitude
    userLat = await position.coords.latitude
}

getLocation()

var myMap = L.map('map').setView([userLong, userLat], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);
