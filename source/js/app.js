console.log("work")
let map;
const coordinates = {  lat: 59.938673, lng: 30.323155};
function initMap() {
  map = new google.maps.Map(document.getElementById("address__map-block-google"), {
    center: { lat: 59.938635, lng: 30.323118 },
    zoom: 20,
  });
  new google.maps.Marker({
    position: coordinates,
    map,
    title: "Мы здесь!",
    // content:"<h1 class="blog-content-link">mifomen</h1>",
    icon: "img/favicon/16.png",
    draggable: false
  });
}


let BtnOpenAlphabet = document.querySelector(".js-open-alphabet")

BtnOpenAlphabet.addEventListener('click', function () {
  let CountryList = document.querySelector(".country-list__all")
  let CountryLabel = document.querySelector(".country-list__label")

  BtnOpenAlphabet.classList.toggle('close-alphabet-list')
  CountryList.classList.toggle('visually-hidden')
  CountryLabel.classList.toggle("country-list__opened")
})

let BtnCloseAlphabet = document.querySelector(".btn-close-alphabet")


BtnCloseAlphabet.addEventListener('click', function () {
  let CountryList = document.querySelector(".country-list__all")
  let CountryLabel = document.querySelector(".country-list__label")

  BtnOpenAlphabet.classList.toggle('close-alphabet-list')
  CountryList.classList.toggle('visually-hidden')
  CountryLabel.classList.toggle("country-list__opened")
})
