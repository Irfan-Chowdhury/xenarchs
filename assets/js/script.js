(function () {
  "use strict";

  const CONTACT_FORM_ENDPOINT = "";

  var header = document.getElementById("siteHeader");
  var menu = document.getElementById("mainNavigation");
  var toggle = document.querySelector(".menu-toggle");
  var navLinks = document.querySelectorAll(".nav-link");
  var anchorLinks = document.querySelectorAll('a[href^="#"]');
  var year = document.getElementById("currentYear");
  var contactForm = document.getElementById("contactForm");
  var contactStatus = document.getElementById("contactFormStatus");
  var contactSubmit = contactForm ? contactForm.querySelector('button[type="submit"]') : null;
  var isContactSubmitting = false;

  document.documentElement.classList.add("has-scroll-reveal");

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  function updateHeaderState() {
    if (!header) {
      return;
    }

    header.classList.toggle("header-scrolled", window.scrollY > 30);
  }

  function setToggleLabel(isOpen) {
    if (!toggle) {
      return;
    }

    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    toggle.setAttribute("aria-label", isOpen ? "Close main navigation" : "Open main navigation");
    header.classList.toggle("menu-open", isOpen);
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
            link.setAttribute("aria-current", "page");
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

  function correctInitialHash() {
    if (window.location.hash) {
      var initialTarget = document.querySelector(window.location.hash);

      if (initialTarget) {
        scrollToSection(initialTarget, "auto");
      }
    }
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

  function getContactFields() {
    if (!contactForm) {
      return {};
    }

    return {
      name: contactForm.querySelector("#contactName"),
      email: contactForm.querySelector("#contactEmail"),
      phone: contactForm.querySelector("#contactPhone"),
      message: contactForm.querySelector("#contactMessage"),
      honeypot: contactForm.querySelector("#companyWebsite")
    };
  }

  function setStatus(message, type) {
    if (!contactStatus) {
      return;
    }

    contactStatus.textContent = message || "";
    contactStatus.classList.toggle("is-success", type === "success");
    contactStatus.classList.toggle("is-error", type === "error");
  }

  function setFieldValidity(field, isValid) {
    if (!field) {
      return;
    }

    field.classList.toggle("is-invalid", !isValid);
    field.classList.toggle("is-valid", isValid && Boolean(field.value.trim()));
    field.setAttribute("aria-invalid", isValid ? "false" : "true");
  }

  function validatePhoneValue(value) {
    if (!value) {
      return true;
    }

    if (value.length > 30) {
      return false;
    }

    return /^[+()\-\s.\d]{7,30}$/.test(value);
  }

  function validateContactField(field) {
    if (!field) {
      return true;
    }

    var value = field.value.trim();
    var isValid = true;

    if (field.id === "contactName") {
      isValid = value.length >= 2 && value.length <= 100;
    } else if (field.id === "contactEmail") {
      isValid = field.validity.valid && value.length <= 150;
    } else if (field.id === "contactPhone") {
      isValid = validatePhoneValue(value);
    } else if (field.id === "contactMessage") {
      isValid = value.length >= 10 && value.length <= 2000;
    } else {
      isValid = field.validity.valid;
    }

    setFieldValidity(field, isValid);
    return isValid;
  }

  function validateContactForm() {
    var fields = getContactFields();
    var validationFields = [fields.name, fields.email, fields.phone, fields.message];
    var firstInvalid = null;

    validationFields.forEach(function (field) {
      var isValid = validateContactField(field);

      if (!isValid && !firstInvalid) {
        firstInvalid = field;
      }
    });

    return firstInvalid;
  }

  function setSendingState(isSending) {
    isContactSubmitting = isSending;

    if (!contactSubmit) {
      return;
    }

    contactSubmit.disabled = isSending;
    contactSubmit.classList.toggle("is-sending", isSending);
    contactSubmit.setAttribute("aria-busy", isSending ? "true" : "false");
  }

  if (contactForm) {
    var contactFields = getContactFields();

    [contactFields.name, contactFields.email, contactFields.phone, contactFields.message].forEach(function (field) {
      if (!field) {
        return;
      }

      field.setAttribute("aria-invalid", "false");
      field.addEventListener("input", function () {
        validateContactField(field);
        setStatus("", "");
      });

      field.addEventListener("blur", function () {
        validateContactField(field);
      });
    });

    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();

      if (isContactSubmitting) {
        return;
      }

      var fields = getContactFields();

      if (fields.honeypot && fields.honeypot.value.trim()) {
        contactForm.reset();
        setStatus("", "");
        return;
      }

      var firstInvalid = validateContactForm();

      if (firstInvalid) {
        firstInvalid.focus();
        return;
      }

      if (!CONTACT_FORM_ENDPOINT) {
        setStatus("The contact form is ready, but an email endpoint must be configured before messages can be delivered.", "error");
        return;
      }

      setSendingState(true);
      setStatus("", "");

      fetch(CONTACT_FORM_ENDPOINT, {
        method: "POST",
        body: new FormData(contactForm)
      })
        .then(function (response) {
          if (!response.ok) {
            throw new Error("Contact form request failed");
          }

          contactForm.reset();
          [fields.name, fields.email, fields.phone, fields.message].forEach(function (field) {
            if (field) {
              field.classList.remove("is-valid", "is-invalid");
              field.setAttribute("aria-invalid", "false");
            }
          });
          setStatus("Thank you. Your message has been sent successfully.", "success");
        })
        .catch(function () {
          setStatus("We could not send your message. Please try again or email us directly.", "error");
        })
        .finally(function () {
          setSendingState(false);
        });
    });
  }
})();
