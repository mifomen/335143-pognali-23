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

    icon: "img/pin-on-map.svg",
    //   url:
    //   scaledSize: (window.isMobile)
    //           ? new google.maps.Size(20, 34)
    //           : new google.maps.Size(40, 68)
    // }
    draggable: false
  });

  if (document.querySelector('.js-hide-map')) {
    document.querySelector('.js-hide-map').classList.add("visually-hidden")
  }
}


window.addEventListener('scroll', function() {
  // document.querySelector('.desk-about-us__title').innerHTML = pageYOffset + 'px';
  let header = document.querySelector('.header');
  // console.log(pageYOffset);
  if(pageYOffset >= 80){
    header.classList.add('header__nav-menu--scrolled');

  } else {
    header.classList.remove('header__nav-menu--scrolled');

  }
});

if (document.querySelector(".js-business-tariffs-open"))  {
  document.querySelector(".js-business-tariffs-open").addEventListener("click", function (evt) {
    evt.preventDefault();
    document.querySelector(".js-modal-window").classList.toggle("business-tariffs--open")
  })
}

if (document.querySelector(".js-business-tariffs-close"))  {
  document.querySelector(".js-business-tariffs-close").addEventListener("click", function (evt) {
    evt.preventDefault();
    document.querySelector(".js-modal-window").classList.toggle("business-tariffs--open")
  })
}




if (document.querySelector(".js-open-alphabet")) {

  let BtnOpenAlphabet = document.querySelector(".js-open-alphabet")
  BtnOpenAlphabet.addEventListener('click', function () {
    let CountryList = document.querySelector(".alphabet")
    let MainlandsTitle = document.querySelector(".country-list__title")
    let Mainlands = document.querySelector(".mainlands")
    let CloseBtn = document.querySelector(".alphabet__btn")

    BtnOpenAlphabet.classList.toggle("close-alphabet-list")
    CountryList.classList.toggle("visually-hidden")
    MainlandsTitle.classList.toggle("country-list__title--opened")
    Mainlands.classList.toggle("visually-hidden")
    CloseBtn.classList.toggle("country-list__btn--close")
  })

  let BtnCloseAlphabet = document.querySelector(".alphabet__btn")
  BtnCloseAlphabet.addEventListener('click', function () {
let CountryList = document.querySelector(".alphabet")
    let MainlandsTitle = document.querySelector(".country-list__title")
    let Mainlands = document.querySelector(".mainlands")
    let CloseBtn = document.querySelector(".alphabet__btn")

    BtnOpenAlphabet.classList.toggle("close-alphabet-list")
    CountryList.classList.toggle("visually-hidden")
    MainlandsTitle.classList.toggle("country-list__title--opened")
    Mainlands.classList.toggle("visually-hidden")
    CloseBtn.classList.toggle("country-list__btn--close")
  })
}


if (document.querySelector(".subscribe__form-button")) {
  document.querySelector(".subscribe__form-button"). addEventListener("click", function () {
    if  (document.querySelector(".subscribe__form-email").value==="") {
      document.querySelector(".subscribe__form-email").placeholder="Введите e-mail"
    }
  })
}


if (document.querySelector(".js-close-menu")) {
  let CloseBtn = document.querySelector(".js-close-menu");
  CloseBtn.addEventListener("click", function () {
    document.querySelector(".header").classList.toggle("header__nav-menu--opened")
  })

}



if (document.querySelector(".js-open-menu")) {

  let OpenBtn = document.querySelector(".js-open-menu");
  OpenBtn.addEventListener("click", function () {
  document.querySelector(".header__menu").classList.toggle("header__menu--closed")
  })
}
