(function () {
  var root = document.querySelector(".client-stories");

  if (!root) {
    return;
  }

  var cards = Array.prototype.slice.call(root.querySelectorAll(".client-stories__card"));
  var canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  root.classList.toggle("client-stories--can-hover", canHover);

  function getVideo(card) {
    return card.querySelector(".client-stories__video");
  }

  function getPlayIcon(card) {
    return card.querySelector(".client-stories__play i");
  }

  function getMuteIcon(card) {
    return card.querySelector(".client-stories__mute i");
  }

  function syncControls(card) {
    var video = getVideo(card);
    var playIcon = getPlayIcon(card);
    var muteIcon = getMuteIcon(card);
    var muteButton = card.querySelector(".client-stories__mute");

    if (playIcon) {
      playIcon.className = card.classList.contains("is-playing") ? "bi bi-pause-fill" : "bi bi-play-fill";
    }

    if (muteIcon && video) {
      muteIcon.className = video.muted ? "bi bi-volume-mute-fill" : "bi bi-volume-up-fill";
    }

    if (muteButton && video) {
      muteButton.setAttribute("aria-label", video.muted ? "Unmute client story" : "Mute client story");
      muteButton.setAttribute("aria-pressed", video.muted ? "true" : "false");
    }
  }

  function pauseCard(card, reset) {
    var video = getVideo(card);

    if (!video) {
      return;
    }

    video.pause();

    if (reset) {
      video.currentTime = 0;
    }

    card.classList.remove("is-playing", "needs-audio-click");
    syncControls(card);
  }

  function pauseOthers(activeCard) {
    cards.forEach(function (card) {
      if (card !== activeCard) {
        pauseCard(card, true);
      }
    });
  }

  function playCard(card) {
    var video = getVideo(card);
    var userMuted = card.getAttribute("data-client-muted") === "true";

    if (!video) {
      return;
    }

    pauseOthers(card);
    video.muted = userMuted;

    var playPromise = video.play();

    if (playPromise && typeof playPromise.then === "function") {
      playPromise.then(function () {
        card.classList.add("is-playing");
        card.classList.remove("needs-audio-click");
        syncControls(card);
      }).catch(function () {
        card.classList.add("needs-audio-click");
        pauseCard(card, false);
      });

      return;
    }

    card.classList.add("is-playing");
    syncControls(card);
  }

  cards.forEach(function (card) {
    var playButton = card.querySelector(".client-stories__play");
    var muteButton = card.querySelector(".client-stories__mute");
    var video = getVideo(card);

    if (video) {
      video.muted = false;
      card.setAttribute("data-client-muted", "false");
    }

    if (canHover) {
      card.addEventListener("mouseenter", function () {
        playCard(card);
      });

      card.addEventListener("mouseleave", function () {
        pauseCard(card, true);
      });
    }

    if (playButton) {
      playButton.addEventListener("click", function (event) {
        event.stopPropagation();

        if (card.classList.contains("is-playing")) {
          pauseCard(card, false);
          return;
        }

        playCard(card);
      });
    }

    if (!canHover) {
      card.addEventListener("click", function () {
        if (card.classList.contains("is-playing")) {
          pauseCard(card, false);
          return;
        }

        playCard(card);
      });
    }

    if (muteButton) {
      muteButton.addEventListener("click", function (event) {
        var targetVideo = getVideo(card);

        event.stopPropagation();

        if (!targetVideo) {
          return;
        }

        targetVideo.muted = !targetVideo.muted;
        card.setAttribute("data-client-muted", targetVideo.muted ? "true" : "false");
        syncControls(card);
      });
    }

    syncControls(card);
  });

  var writtenTrack = root.querySelector(".client-written__track");
  var writtenControls = Array.prototype.slice.call(root.querySelectorAll("[data-written-scroll]"));

  function getWrittenStep() {
    var firstCard = writtenTrack ? writtenTrack.querySelector(".client-written__card") : null;
    var gap = 0;

    if (!writtenTrack || !firstCard) {
      return 0;
    }

    if (window.getComputedStyle) {
      gap = parseFloat(window.getComputedStyle(writtenTrack).columnGap) || 0;
    }

    return firstCard.getBoundingClientRect().width + gap;
  }

  function syncWrittenControls() {
    var maxScroll;
    var currentScroll;

    if (!writtenTrack || !writtenControls.length) {
      return;
    }

    maxScroll = writtenTrack.scrollWidth - writtenTrack.clientWidth;
    currentScroll = writtenTrack.scrollLeft;

    writtenControls.forEach(function (button) {
      var direction = button.getAttribute("data-written-scroll");

      if (direction === "prev") {
        button.disabled = currentScroll <= 2;
      }

      if (direction === "next") {
        button.disabled = currentScroll >= maxScroll - 2;
      }
    });
  }

  if (writtenTrack && writtenControls.length) {
    writtenControls.forEach(function (button) {
      button.addEventListener("click", function () {
        var direction = button.getAttribute("data-written-scroll") === "prev" ? -1 : 1;
        var step = getWrittenStep();

        writtenTrack.scrollBy({
          left: step * direction,
          behavior: "smooth"
        });
      });
    });

    writtenTrack.addEventListener("scroll", syncWrittenControls);
    window.addEventListener("resize", syncWrittenControls);
    syncWrittenControls();
  }
})();
