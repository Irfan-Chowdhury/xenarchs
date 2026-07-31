(function () {
  "use strict";

  var revealItems = document.querySelectorAll(".scroll-reveal");

  if ("IntersectionObserver" in window) {
    var revealObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.14, rootMargin: "0px 0px -40px" });

    revealItems.forEach(function (item) {
      revealObserver.observe(item);
    });
  } else {
    revealItems.forEach(function (item) {
      item.classList.add("is-visible");
    });
  }

  /* ---------------------------------------------------------
     Sticky Stacking Cards helper (Design Monks "Industry Wins").
     - Each service panel is `position: sticky` with an incremental
       `top` value per card (set in services.css). As the user
       scrolls, the next card slides up over the previous one,
       leaving a small "peek" strip of the previous card's title
       visible at the top.
     - Cards live in their natural flow positions; we don't pull
       them up with negative margin. This way the user visibly
       watches each card stack onto the previous as they scroll,
       in both directions.
     - The mobile / reduced-motion overrides live entirely in CSS
       (the `@media` blocks in services.css reset `position: sticky`
       to `position: static`).
     --------------------------------------------------------- */
  var servicesStack = document.querySelector(".services-stack");

  if (servicesStack && window.console && console.debug) {
    console.debug("[services-stack] sticky stack enabled, panels:",
      servicesStack.querySelectorAll(".service-panel").length);
  }
})();
