console.log("work")
let map;  // ,
const coordinates = {  lat: 59.938805, lng: 30.323259};
function initMap() {
  map = new google.maps.Map(document.getElementById("address__map-block-google1"), {
    center: { lat: 59.938635, lng: 30.323118},
    zoom: 18,
  });
  new google.maps.Marker({
    position: coordinates,
    map,
    title: "Мы здесь!",
    // content:"<h1 class="blog-content-link'>mifomen</h1>',
    icon: "img/favicon/16.png",
    draggable: false
  });
}
