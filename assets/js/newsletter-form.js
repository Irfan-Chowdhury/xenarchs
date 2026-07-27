(function () {
  "use strict";

  var config = window.XENARCHS_CONFIG || {};
  var newsletterForm = document.getElementById("newsletterForm");
  var newsletterEmail = document.getElementById("newsletterEmail");
  var newsletterStatus = document.getElementById("newsletterStatus");
  var newsletterSubmit = newsletterForm ? newsletterForm.querySelector('button[type="submit"]') : null;
  var isNewsletterSubmitting = false;

  function setNewsletterStatus(message, type) {
    if (!newsletterStatus) {
      return;
    }

    newsletterStatus.textContent = message || "";
    newsletterStatus.classList.toggle("is-success", type === "success");
    newsletterStatus.classList.toggle("is-error", type === "error");
  }

  function setNewsletterSendingState(isSending) {
    isNewsletterSubmitting = isSending;

    if (!newsletterSubmit) {
      return;
    }

    newsletterSubmit.disabled = isSending;
    newsletterSubmit.setAttribute("aria-busy", isSending ? "true" : "false");
  }

  if (newsletterForm && newsletterEmail) {
    newsletterEmail.setAttribute("aria-invalid", "false");

    newsletterEmail.addEventListener("input", function () {
      newsletterEmail.setAttribute("aria-invalid", "false");
      setNewsletterStatus("", "");
    });

    newsletterForm.addEventListener("submit", function (event) {
      event.preventDefault();

      if (isNewsletterSubmitting) {
        return;
      }

      if (!newsletterEmail.validity.valid) {
        newsletterEmail.setAttribute("aria-invalid", "true");
        setNewsletterStatus("Please enter a valid email address.", "error");
        newsletterEmail.focus();
        return;
      }

      if (!config.NEWSLETTER_ENDPOINT) {
        setNewsletterStatus("Newsletter signup is ready, but an endpoint must be configured before subscriptions can be saved.", "error");
        return;
      }

      setNewsletterSendingState(true);
      setNewsletterStatus("", "");

      fetch(config.NEWSLETTER_ENDPOINT, {
        method: "POST",
        body: new FormData(newsletterForm)
      })
        .then(function (response) {
          if (!response.ok) {
            throw new Error("Newsletter request failed");
          }

          newsletterForm.reset();
          newsletterEmail.setAttribute("aria-invalid", "false");
          setNewsletterStatus("Thank you. You are subscribed.", "success");
        })
        .catch(function () {
          setNewsletterStatus("We could not subscribe you right now. Please try again later.", "error");
        })
        .finally(function () {
          setNewsletterSendingState(false);
        });
    });
  }
})();
