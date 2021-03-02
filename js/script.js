document.addEventListener("DOMContentLoaded", function () {
  var btn = document.querySelector(".hotels__search-btn");
  var popup = document.querySelector(".hotels__popup")

  btn.addEventListener("click", function () {
    popup.classList.toggle("hide")
  });
});
