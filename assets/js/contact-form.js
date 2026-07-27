(function () {
  "use strict";

  var config = window.XENARCHS_CONFIG || {};
  var contactForm = document.getElementById("contactForm");
  var contactStatus = document.getElementById("contactFormStatus");
  var contactSubmit = contactForm ? contactForm.querySelector('button[type="submit"]') : null;
  var isContactSubmitting = false;

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

      if (!config.CONTACT_FORM_ENDPOINT) {
        setStatus("The contact form is ready, but an email endpoint must be configured before messages can be delivered.", "error");
        return;
      }

      setSendingState(true);
      setStatus("", "");

      fetch(config.CONTACT_FORM_ENDPOINT, {
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
