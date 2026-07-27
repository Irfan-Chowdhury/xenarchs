(function () {
  "use strict";

  var backgroundVideos = [
    document.getElementById("heroBackgroundVideo"),
    document.getElementById("footerBackgroundVideo")
  ].filter(Boolean);
  var reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

  function updateBackgroundVideoPlayback() {
    if (!backgroundVideos.length) {
      return;
    }

    backgroundVideos.forEach(function (backgroundVideo) {
      if (reducedMotionQuery.matches || document.hidden) {
        backgroundVideo.pause();
        return;
      }

      var playPromise = backgroundVideo.play();

      if (playPromise && typeof playPromise.catch === "function") {
        playPromise.catch(function () {
          /* Autoplay can be blocked; the poster remains visible as fallback. */
        });
      }
    });
  }

  if (backgroundVideos.length) {
    updateBackgroundVideoPlayback();
    document.addEventListener("visibilitychange", updateBackgroundVideoPlayback);

    if (typeof reducedMotionQuery.addEventListener === "function") {
      reducedMotionQuery.addEventListener("change", updateBackgroundVideoPlayback);
    } else if (typeof reducedMotionQuery.addListener === "function") {
      reducedMotionQuery.addListener(updateBackgroundVideoPlayback);
    }
  }
})();
