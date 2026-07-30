(function () {
  var root = document.querySelector(".fp-showcase");

  if (!root) {
    return;
  }

  var tabs = root.querySelectorAll("[data-fp-filter]");
  var cards = root.querySelectorAll("[data-fp-category]");

  if (!tabs.length || !cards.length) {
    return;
  }

  function setActiveCategory(category) {
    tabs.forEach(function (tab) {
      var isActive = tab.getAttribute("data-fp-filter") === category;
      tab.classList.toggle("fp-showcase__tab--active", isActive);
      tab.setAttribute("aria-selected", isActive ? "true" : "false");
    });

    cards.forEach(function (card) {
      if (!card.hidden) {
        card.classList.add("fp-showcase__card--fading");
      }
    });

    window.setTimeout(function () {
      cards.forEach(function (card) {
        var isMatch = card.getAttribute("data-fp-category") === category;
        card.hidden = !isMatch;

        if (isMatch) {
          card.classList.add("fp-showcase__card--fading");
        }
      });

      window.requestAnimationFrame(function () {
        cards.forEach(function (card) {
          card.classList.remove("fp-showcase__card--fading");
        });
      });
    }, 160);
  }

  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      setActiveCategory(tab.getAttribute("data-fp-filter"));
    });
  });
})();
