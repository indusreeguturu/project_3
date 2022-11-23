function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 17.686815, lng: 83.218483},
    zoom: 15,
	zoomControl: false,
    scaleControl: true,
	mapTypeId: 'hybrid'
  });
  
  var marker = new google.maps.Marker({
    position: { lat: 17.686815, lng: 83.218483},
    map: map,
  });
  
  var infowindow = new google.maps.InfoWindow({
    content:"The place I was born"
  });
  infowindow.open(map, marker);
}
window.initMap = initMap;
