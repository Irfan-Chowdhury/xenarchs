(function () {
  "use strict";

  var accordions = document.querySelectorAll("[data-xenarchs-faq]");

  accordions.forEach(function (accordion) {
    var items = Array.prototype.slice.call(accordion.querySelectorAll(".faq-item"));

    function setItemState(item, shouldOpen) {
      var trigger = item.querySelector(".faq-trigger");
      var answer = item.querySelector(".faq-answer");

      if (!trigger || !answer) {
        return;
      }

      item.classList.toggle("is-active", shouldOpen);
      trigger.setAttribute("aria-expanded", shouldOpen ? "true" : "false");
      answer.setAttribute("aria-hidden", shouldOpen ? "false" : "true");
    }

    items.forEach(function (item) {
      var trigger = item.querySelector(".faq-trigger");

      if (!trigger) {
        return;
      }

      trigger.addEventListener("click", function () {
        var isOpen = trigger.getAttribute("aria-expanded") === "true";

        items.forEach(function (otherItem) {
          setItemState(otherItem, false);
        });

        if (!isOpen) {
          setItemState(item, true);
        }
      });
    });
  });
})();
