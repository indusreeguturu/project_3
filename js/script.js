function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 41.879064, lng: -87.635936 },
    zoom: 15,
	zoomControl: false,
    scaleControl: true,
	mapTypeId: 'hybrid'
  });
  
  var marker = new google.maps.Marker({
    position: { lat: 41.879064, lng: -87.635936},
    map: map,
  });
  
  var infowindow = new google.maps.InfoWindow({
    content:"The Famous Willis Tower in Chicago"
  });
  infowindow.open(map, marker);
}
window.initMap = initMap;
