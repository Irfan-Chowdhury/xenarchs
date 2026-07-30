(function () {
  var root = document.querySelector(".people-showcase");

  if (!root) {
    return;
  }

  var cards = Array.prototype.slice.call(root.querySelectorAll(".people-showcase__card"));
  var controls = root.querySelectorAll("[data-people-scroll]");
  var currentIndex = 0;
  var animationTimer = null;

  if (!cards.length || !controls.length) {
    return;
  }

  function getVisibleCount() {
    if (window.matchMedia("(max-width: 767.98px)").matches) {
      return 1;
    }

    if (window.matchMedia("(max-width: 991.98px)").matches) {
      return 2;
    }

    return 4;
  }

  function renderCarousel() {
    var visibleCount = getVisibleCount();
    var maxIndex = Math.max(cards.length - visibleCount, 0);

    currentIndex = Math.min(Math.max(currentIndex, 0), maxIndex);

    cards.forEach(function (card, index) {
      var isVisible = index >= currentIndex && index < currentIndex + visibleCount;
      card.classList.toggle("people-showcase__card--visible", isVisible);
      card.setAttribute("aria-hidden", isVisible ? "false" : "true");
    });

    controls.forEach(function (control) {
      var direction = control.getAttribute("data-people-scroll");

      if (direction === "prev") {
        control.disabled = currentIndex === 0;
      }

      if (direction === "next") {
        control.disabled = currentIndex === maxIndex;
      }
    });
  }

  controls.forEach(function (control) {
    control.addEventListener("click", function () {
      var direction = control.getAttribute("data-people-scroll") === "prev" ? -1 : 1;
      var directionClass = direction > 0 ? "people-showcase--moving-next" : "people-showcase--moving-prev";

      window.clearTimeout(animationTimer);
      root.classList.remove("people-showcase--moving-next", "people-showcase--moving-prev");
      currentIndex += direction;
      root.classList.add(directionClass);
      renderCarousel();

      animationTimer = window.setTimeout(function () {
        root.classList.remove(directionClass);
      }, 680);
    });
  });

  window.addEventListener("resize", renderCarousel);
  renderCarousel();
})();
