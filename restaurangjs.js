function initMap() {
  var crafoord = {lat: 59.337617, lng: 18.046414}
  var annexet = {lat:59.341682, lng:18.049278}
  var sats = {lat:59.342942, lng:18.052031}
  //The location of crafoord, annexet and sats respectively

  var map = new google.maps.MAP(
    document.getElementById('map'), {zoom: 4, center: crafoord});
    //The map centered at crafoord
    var marker = new google.maps.Marker({position: crafoord, map: map});
}
