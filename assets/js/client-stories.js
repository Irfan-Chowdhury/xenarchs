(function () {
  var root = document.querySelector(".client-stories");

  if (!root) {
    return;
  }

  var cards = Array.prototype.slice.call(root.querySelectorAll(".client-stories__card"));
  var canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var storyGrid = root.querySelector(".client-stories__grid");
  var storyControls = Array.prototype.slice.call(root.querySelectorAll("[data-story-scroll]"));
  var storySliding = false;
  var writtenTrack = root.querySelector(".client-written__track");
  var writtenCards = Array.prototype.slice.call(root.querySelectorAll(".client-written__card"));
  var slideDuration = 850;

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

  function pauseAllStoryVideos(reset) {
    cards.forEach(function (card) {
      pauseCard(card, reset);
    });
  }

  function getSlideDistance(track, selector) {
    var firstCard = track ? track.querySelector(selector) : null;
    var gap = 0;

    if (!track || !firstCard) {
      return 0;
    }

    if (window.getComputedStyle) {
      gap = parseFloat(window.getComputedStyle(track).columnGap) || 0;
    }

    return firstCard.getBoundingClientRect().width + gap;
  }

  function pauseCloneMedia(clone) {
    clone.querySelectorAll("video").forEach(function (video) {
      video.pause();
      video.currentTime = 0;
    });
  }

  function slideStoryCards(direction) {
    var firstCard;
    var lastCard;
    var cloneCard;
    var distance;

    if (!storyGrid || storySliding || cards.length < 2) {
      return;
    }

    firstCard = storyGrid.querySelector(".client-stories__card");
    lastCard = storyGrid.querySelector(".client-stories__card:last-child");

    if (!firstCard || !lastCard) {
      return;
    }

    distance = getSlideDistance(storyGrid, ".client-stories__card");

    if (!distance) {
      return;
    }

    pauseAllStoryVideos(true);
    storySliding = true;

    storyGrid.style.setProperty("--client-story-slide-distance", distance + "px");

    if (direction === "prev") {
      cloneCard = lastCard.cloneNode(true);
      cloneCard.setAttribute("aria-hidden", "true");
      pauseCloneMedia(cloneCard);
      storyGrid.insertBefore(cloneCard, firstCard);
      storyGrid.style.transition = "none";
      storyGrid.style.transform = "translate3d(" + (distance * -1) + "px, 0, 0)";
      storyGrid.offsetHeight;

      window.requestAnimationFrame(function () {
        storyGrid.style.transition = "transform " + slideDuration + "ms cubic-bezier(0.22, 1, 0.36, 1)";
        storyGrid.style.transform = "translate3d(0, 0, 0)";
      });

      window.setTimeout(function () {
        if (cloneCard.parentNode === storyGrid) {
          storyGrid.removeChild(cloneCard);
        }

        if (lastCard.parentNode === storyGrid) {
          storyGrid.insertBefore(lastCard, firstCard);
        }

        storyGrid.style.transition = "";
        storyGrid.style.transform = "";
        storyGrid.style.setProperty("--client-story-slide-distance", "0px");
        storySliding = false;
      }, slideDuration + 30);

      return;
    }

    cloneCard = firstCard.cloneNode(true);
    cloneCard.setAttribute("aria-hidden", "true");
    pauseCloneMedia(cloneCard);
    storyGrid.appendChild(cloneCard);
    storyGrid.classList.add("is-sliding-next");

    window.setTimeout(function () {
      storyGrid.classList.remove("is-sliding-next");
      storyGrid.style.setProperty("--client-story-slide-distance", "0px");

      if (cloneCard.parentNode === storyGrid) {
        storyGrid.removeChild(cloneCard);
      }

      if (firstCard.parentNode === storyGrid) {
        storyGrid.appendChild(firstCard);
      }

      storySliding = false;
    }, slideDuration + 30);
  }

  function updateWrittenLoopDistance() {
    var firstOriginal = writtenCards[0];
    var firstClone = writtenTrack ? writtenTrack.querySelector(".client-written__card[data-marquee-clone='true']") : null;
    var distance = 0;

    if (!writtenTrack || !firstOriginal || !firstClone) {
      return;
    }

    distance = firstClone.offsetLeft - firstOriginal.offsetLeft;

    if (distance > 0) {
      writtenTrack.style.setProperty("--client-written-loop-distance", distance + "px");
    }
  }

  function setupWrittenMarquee() {
    if (!writtenTrack || writtenCards.length < 2) {
      return;
    }

    writtenCards.forEach(function (card) {
      var clone = card.cloneNode(true);

      clone.setAttribute("aria-hidden", "true");
      clone.setAttribute("data-marquee-clone", "true");
      clone.querySelectorAll("a, button, input, select, textarea, [tabindex]").forEach(function (focusable) {
        focusable.setAttribute("tabindex", "-1");
      });
      writtenTrack.appendChild(clone);
    });

    updateWrittenLoopDistance();

    if (!reduceMotion) {
      writtenTrack.classList.add("is-marquee-ready");
    }

    window.addEventListener("resize", function () {
      writtenTrack.classList.remove("is-marquee-ready");
      window.requestAnimationFrame(function () {
        updateWrittenLoopDistance();

        if (!reduceMotion) {
          writtenTrack.classList.add("is-marquee-ready");
        }
      });
    });

    window.addEventListener("load", updateWrittenLoopDistance);
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

  if (storyGrid && storyControls.length) {
    storyControls.forEach(function (button) {
      button.addEventListener("click", function () {
        var direction = button.getAttribute("data-story-scroll") === "prev" ? "prev" : "next";

        slideStoryCards(direction);
      });
    });
  }

  setupWrittenMarquee();
})();
