(function () {
  "use strict";

  var sections = document.querySelectorAll("[data-how-we-work]");

  sections.forEach(function (section) {
    var stages = section.querySelectorAll(".process-stage");
    var benefits = section.querySelectorAll(".process-benefit");

    stages.forEach(function (stage, index) {
      stage.style.setProperty("--how-we-work-index", index);
    });

    benefits.forEach(function (benefit, index) {
      benefit.style.setProperty("--how-we-work-index", index);
    });
  });
})();
