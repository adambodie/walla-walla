$("#error").hide();
$("#hud").show();

navigator.geolocation.getCurrentPosition(gotLocation);

function gotLocation(currentPosition) {
  $("#hud").hide();

  var $distance = $("li span");
  
  $distance.each(function(){
    var distanceLatitude = $(this).data("lat");
    var distanceLongitude = $(this).data("lon");
    
    var distanceInMiles = Math.round(calculateDistance(currentPosition.coords.latitude, currentPosition.coords.longitude, distanceLatitude, distanceLongitude));
    
    $(this).text(distanceInMiles + " miles");
  });
}

function displayError(message) {
  $("#error").text(message).slideDown("slow");
}