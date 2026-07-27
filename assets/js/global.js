(function () {
  "use strict";

  var year = document.getElementById("currentYear");

  document.documentElement.classList.add("has-scroll-reveal");

  if (year) {
    year.textContent = new Date().getFullYear();
  }
})();
