var btn = document.querySelector(".search-hotel-button");
var popup = document.querySelector(".search-hotel-popup-wrapper")

btn.addEventListener("click",function (){popup.classList.toggle("show")});

document.addEventListener("DOMContentLoaded", function() {
    popup.classList.remove("show");
  });