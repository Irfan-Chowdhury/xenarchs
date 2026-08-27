(function () {
  var root = document.querySelector(".fp-showcase");

  if (!root) {
    return;
  }

  var tabs = root.querySelectorAll("[data-fp-filter]");
  var cards = root.querySelectorAll("[data-fp-category]");
  var track = root.querySelector(".fp-showcase__grid");
  var stickyPanel = root.querySelector(".fp-showcase__inner");
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var maxTranslate = 0;
  var sectionTop = 0;
  var pinStart = 0;
  var ticking = false;

  if (!tabs.length || !cards.length) {
    return;
  }

  function getVisibleCards() {
    return Array.prototype.slice.call(cards).filter(function (card) {
      return !card.hidden;
    });
  }

  function measureHorizontalScroll() {
    var rootStyles;
    var panelStyles;
    var topPadding;
    var horizontalPadding;
    var viewportWidth;
    var scrollHeight;

    if (!track || !stickyPanel || reduceMotion) {
      return;
    }

    root.style.setProperty("--fp-track-x", "0px");
    rootStyles = window.getComputedStyle(root);
    panelStyles = window.getComputedStyle(stickyPanel);
    topPadding = parseFloat(rootStyles.paddingTop) || 0;
    horizontalPadding = (parseFloat(panelStyles.paddingLeft) || 0) + (parseFloat(panelStyles.paddingRight) || 0);
    sectionTop = root.getBoundingClientRect().top + window.pageYOffset;
    pinStart = sectionTop + topPadding;
    viewportWidth = stickyPanel.clientWidth - horizontalPadding;
    maxTranslate = Math.max(0, track.scrollWidth - viewportWidth);
    scrollHeight = topPadding + stickyPanel.offsetHeight + maxTranslate;

    root.style.setProperty("--fp-scroll-height", scrollHeight + "px");
    updateHorizontalScroll();
  }

  function updateHorizontalScroll() {
    var scrollableDistance;
    var progress;
    var translateX;

    if (!track || !stickyPanel || reduceMotion || maxTranslate <= 0) {
      root.style.setProperty("--fp-track-x", "0px");
      ticking = false;
      return;
    }

    scrollableDistance = Math.max(1, maxTranslate);
    progress = Math.min(1, Math.max(0, (window.pageYOffset - pinStart) / scrollableDistance));
    translateX = maxTranslate * -1 * progress;

    root.style.setProperty("--fp-track-x", translateX.toFixed(2) + "px");
    ticking = false;
  }

  function requestHorizontalUpdate() {
    if (ticking) {
      return;
    }

    ticking = true;
    window.requestAnimationFrame(updateHorizontalScroll);
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

        measureHorizontalScroll();
      });
    }, 160);
  }

  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      setActiveCategory(tab.getAttribute("data-fp-filter"));
    });
  });

  window.addEventListener("scroll", requestHorizontalUpdate, { passive: true });
  window.addEventListener("resize", measureHorizontalScroll);
  window.addEventListener("load", measureHorizontalScroll);

  getVisibleCards().forEach(function (card) {
    var image = card.querySelector("img");

    if (image && !image.complete) {
      image.addEventListener("load", measureHorizontalScroll, { once: true });
    }
  });

  measureHorizontalScroll();
})();
