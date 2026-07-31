(function () {
  var root = document.querySelector(".client-stories");

  if (!root) {
    return;
  }

  var cards = Array.prototype.slice.call(root.querySelectorAll(".client-stories__card"));
  var canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var storyGrid = root.querySelector(".client-stories__grid");
  var storyAutoTimer = null;
  var storyAutoRequestedPlay = false;
  var storyAutoSliding = false;

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
    resumeStoryAutoSlide();
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

    storyAutoRequestedPlay = true;
    pauseStoryAutoSlide();
    pauseOthers(card);
    video.muted = userMuted;

    var playPromise = video.play();

    if (playPromise && typeof playPromise.then === "function") {
      playPromise.then(function () {
        storyAutoRequestedPlay = false;
        card.classList.add("is-playing");
        card.classList.remove("needs-audio-click");
        pauseStoryAutoSlide();
        syncControls(card);
      }).catch(function () {
        storyAutoRequestedPlay = false;
        card.classList.add("needs-audio-click");
        pauseCard(card, false);
      });

      return;
    }

    storyAutoRequestedPlay = false;
    card.classList.add("is-playing");
    pauseStoryAutoSlide();
    syncControls(card);
  }

  function hasPlayingStoryVideo() {
    return cards.some(function (card) {
      return card.classList.contains("is-playing");
    });
  }

  function pauseStoryAutoSlide() {
    if (storyAutoTimer) {
      window.clearInterval(storyAutoTimer);
      storyAutoTimer = null;
    }

    root.classList.add("client-stories--auto-paused");
  }

  function resumeStoryAutoSlide() {
    if (storyAutoRequestedPlay || hasPlayingStoryVideo()) {
      return;
    }

    startStoryAutoSlide();
  }

  function getStorySlideDistance() {
    var firstCard = storyGrid ? storyGrid.querySelector(".client-stories__card") : null;
    var gap = 0;

    if (!storyGrid || !firstCard) {
      return 0;
    }

    if (window.getComputedStyle) {
      gap = parseFloat(window.getComputedStyle(storyGrid).columnGap) || 0;
    }

    return firstCard.getBoundingClientRect().width + gap;
  }

  function slideStoryCardsLeft() {
    var firstCard;
    var cloneCard;
    var distance;

    if (!storyGrid || storyAutoSliding || hasPlayingStoryVideo()) {
      return;
    }

    firstCard = storyGrid.querySelector(".client-stories__card");

    if (!firstCard || cards.length < 2) {
      return;
    }

    distance = getStorySlideDistance();

    if (!distance) {
      return;
    }

    cloneCard = firstCard.cloneNode(true);
    cloneCard.setAttribute("aria-hidden", "true");
    cloneCard.querySelectorAll("video").forEach(function (video) {
      video.pause();
      video.currentTime = 0;
    });

    storyAutoSliding = true;
    storyGrid.appendChild(cloneCard);
    storyGrid.style.setProperty("--client-story-slide-distance", distance + "px");
    storyGrid.classList.add("is-auto-sliding");

    window.setTimeout(function () {
      storyGrid.classList.remove("is-auto-sliding");
      storyGrid.style.setProperty("--client-story-slide-distance", "0px");

      if (cloneCard.parentNode === storyGrid) {
        storyGrid.removeChild(cloneCard);
      }

      if (firstCard.parentNode === storyGrid) {
        storyGrid.appendChild(firstCard);
      }

      storyAutoSliding = false;
    }, 880);
  }

  function startStoryAutoSlide() {
    if (!storyGrid || storyAutoTimer || reduceMotion || hasPlayingStoryVideo() || cards.length < 2) {
      return;
    }

    root.classList.remove("client-stories--auto-paused");
    storyAutoTimer = window.setInterval(slideStoryCardsLeft, 3000);
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

  startStoryAutoSlide();
})();
