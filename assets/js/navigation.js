(function () {
  "use strict";

  var header = document.getElementById("siteHeader");
  var menu = document.getElementById("mainNavigation");
  var toggle = document.querySelector(".menu-toggle");
  var heroSection = document.getElementById("home") || document.getElementById("terms-hero") || document.querySelector(".hero-section, .terms-hero-section");
  var navLinks = document.querySelectorAll(".nav-link");
  var anchorLinks = document.querySelectorAll('a[href^="#"]');
  var isHeroVisible = true;

  function updateHeaderState() {
    if (!header) {
      return;
    }

    header.classList.toggle("header-scrolled", window.scrollY > 30);
  }

  function updateNavigationDock() {
    if (!header) {
      return;
    }

    header.classList.toggle("nav-docked", !isHeroVisible && !header.classList.contains("menu-open"));
  }

  function setToggleLabel(isOpen) {
    if (!toggle || !header) {
      return;
    }

    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    toggle.setAttribute("aria-label", isOpen ? "Close main navigation" : "Open main navigation");
    header.classList.toggle("menu-open", isOpen);
    updateNavigationDock();
  }

  function closeMobileMenu() {
    if (!menu || !menu.classList.contains("show") || !window.bootstrap) {
      return;
    }

    window.bootstrap.Collapse.getOrCreateInstance(menu, { toggle: false }).hide();
  }

  function prefersReducedMotion() {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }

  function syncNavigationDockWithHero() {
    if (!heroSection) {
      return;
    }

    var heroRect = heroSection.getBoundingClientRect();
    isHeroVisible = heroRect.bottom > 0 && heroRect.top < window.innerHeight;
    updateNavigationDock();
  }

  function easeInOutCubic(progress) {
    return progress < 0.5
      ? 4 * progress * progress * progress
      : 1 - Math.pow(-2 * progress + 2, 3) / 2;
  }

  function scrollToSection(target, behavior) {
    var headerOffset = header && target.id !== "home" ? header.offsetHeight + 18 : 0;
    var top = target.offsetTop - headerOffset;
    var start = window.pageYOffset;
    var distance = Math.max(0, top) - start;
    var duration = behavior === "auto" || prefersReducedMotion() ? 0 : 1150;
    var startTime = null;

    if (!duration) {
      window.scrollTo(0, Math.max(0, top));
      return;
    }

    function step(timestamp) {
      if (!startTime) {
        startTime = timestamp;
      }

      var elapsed = timestamp - startTime;
      var progress = Math.min(elapsed / duration, 1);
      var easedProgress = easeInOutCubic(progress);

      window.scrollTo(0, start + distance * easedProgress);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    }

    window.requestAnimationFrame(step);
  }

  function correctInitialHash() {
    if (window.location.hash) {
      var initialTarget = document.querySelector(window.location.hash);

      if (initialTarget) {
        scrollToSection(initialTarget, "auto");
      }
    }
  }

  if (heroSection) {
    if ("IntersectionObserver" in window) {
      var heroDockObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          isHeroVisible = entry.isIntersecting;
          updateNavigationDock();
        });
      }, { threshold: 0.01 });

      heroDockObserver.observe(heroSection);
    }

    window.requestAnimationFrame(syncNavigationDockWithHero);
    window.addEventListener("load", syncNavigationDockWithHero);
  }

  updateHeaderState();
  window.addEventListener("scroll", updateHeaderState, { passive: true });

  if (menu) {
    menu.addEventListener("shown.bs.collapse", function () {
      setToggleLabel(true);
    });

    menu.addEventListener("hidden.bs.collapse", function () {
      setToggleLabel(false);
    });

    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeMobileMenu);
    });
  }

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeMobileMenu();
    }
  });

  anchorLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      var hash = link.getAttribute("href");

      if (!hash || hash === "#") {
        return;
      }

      var target = document.querySelector(hash);

      if (!target) {
        return;
      }

      event.preventDefault();
      scrollToSection(target, "smooth");
      window.history.pushState(null, "", hash);
      closeMobileMenu();
    });
  });

  var sections = document.querySelectorAll("main section[id]");

  if ("IntersectionObserver" in window && sections.length) {
    var sectionObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) {
          return;
        }

        navLinks.forEach(function (link) {
          var isActive = link.getAttribute("href") === "#" + entry.target.id;
          link.classList.toggle("active", isActive);

          if (isActive) {
            link.setAttribute("aria-current", "location");
          } else {
            link.removeAttribute("aria-current");
          }
        });
      });
    }, { rootMargin: "-38% 0px -52% 0px", threshold: 0 });

    sections.forEach(function (section) {
      sectionObserver.observe(section);
    });
  }

  window.addEventListener("load", function () {
    correctInitialHash();
    window.setTimeout(correctInitialHash, 250);
    window.setTimeout(correctInitialHash, 900);
    window.setTimeout(correctInitialHash, 1500);
  });

  if (document.readyState === "complete") {
    correctInitialHash();
  }
})();
