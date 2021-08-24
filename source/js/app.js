console.log("work")
let map;
const coordinates = {  lat: 59.938673, lng: 30.323155};
function initMap() {
  map = new google.maps.Map(document.querySelector("#js-google-map"), {
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

  if (document.querySelector('.js-hide-map')) {
    document.querySelector('.js-hide-map').classList.add("visually-hidden")
  }
}


window.addEventListener('scroll', function() {
  // document.querySelector('.desk-about-us__title').innerHTML = pageYOffset + 'px';
  let header = document.querySelector('.header');
  let headerBtn = document.querySelector('.header__button');
  // console.log(pageYOffset);
  if(pageYOffset >= 60){
    header.classList.add('header--white-theme');
    headerBtn.classList.add('header__button--white-theme');

  } else {
    header.classList.remove('header--white-theme');
    headerBtn.classList.remove('header__button--white-theme');

  }
});

if (document.querySelector(".js-business-tariffs-open"))  {
  document.querySelector(".js-business-tariffs-open").addEventListener("click", function (evt) {
    evt.preventDefault();
    document.querySelector(".js-modal-window__business-tariffs").classList.toggle("business-tariffs--open")
  })
}

if (document.querySelector(".js-business-tariffs-close"))  {
  document.querySelector(".js-business-tariffs-close").addEventListener("click", function (evt) {
    evt.preventDefault();
    document.querySelector(".js-modal-window__business-tariffs").classList.toggle("business-tariffs--open")
  })
}




if (document.querySelector(".js-open-alphabet")) {

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
}
