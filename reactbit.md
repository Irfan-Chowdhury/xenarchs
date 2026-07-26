You **cannot directly use** the displayed `npx shadcn...` command or `<DarkVeil />` code in your existing project because React Bits provides React components, while your website uses plain HTML, Bootstrap, CSS and JavaScript. ([GitHub][1])

For your project, the cleanest approach is to export the Dark Veil effect as a short looping video and place it behind the hero content. Background Studio officially supports video, image and code export. ([React Bits][2])

## Recommended implementation

### Step 1: Export from React Bits

Keep your current settings:

* Background: Dark Veil
* Hue shift: `40`
* Scanline intensity: `0.25`
* Speed: `0.6`
* Resolution scale: `1.25`

Then:

1. Click **Export**.
2. Choose **10s Video**.
3. Prefer a wide `16:9` resolution such as `1920 × 1080`, where available.
4. Export WebM and MP4 if both options are available.
5. Rename the files:

```text
dark-veil.webm
dark-veil.mp4
```

Place them in:

```text
assets/videos/dark-veil.webm
assets/videos/dark-veil.mp4
```

Also export one still image as:

```text
assets/images/dark-veil.png
```

Using WebM first and MP4 as a fallback gives the browser a choice of supported formats. A background video should use `muted`, `loop`, `autoplay` and `playsinline`; muted inline video is also much more likely to autoplay successfully. ([MDN Web Docs][3])

---

## Step 2: Update the hero HTML

Place this immediately after the opening hero `<section>` tag and before the hero content:

```html
<section class="hero-section" id="home">

    <!-- Dark Veil animated background -->
    <div class="hero-video-background" aria-hidden="true">
        <video
            class="hero-background-video"
            id="heroBackgroundVideo"
            autoplay
            muted
            loop
            playsinline
            preload="metadata"
            poster="assets/images/dark-veil.png"
            tabindex="-1"
        >
            <source
                src="assets/videos/dark-veil.webm"
                type="video/webm"
            >

            <source
                src="assets/videos/dark-veil.mp4"
                type="video/mp4"
            >
        </video>

        <div class="hero-video-overlay"></div>
    </div>

    <!-- Keep your existing hero container and content here -->
    <div class="container hero-container">
        <!-- Existing hero content -->
    </div>

</section>
```

Do not add video controls. The animation is decorative rather than user-controlled media.

---

## Step 3: Add the CSS

Add this to `assets/css/style.css`:

```css
/* ========================================
   DARK VEIL HERO VIDEO BACKGROUND
======================================== */

.hero-section {
    position: relative;
    min-height: max(760px, 100svh);
    overflow: hidden;
    isolation: isolate;
    background-color: #02090d;
}

/* Video background container */
.hero-video-background {
    position: absolute;
    inset: 0;
    z-index: 0;
    overflow: hidden;
    pointer-events: none;
}

/* Background video */
.hero-background-video {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    min-width: 100%;
    min-height: 100%;
    object-fit: cover;
    object-position: center;
    transform: translate(-50%, -50%) scale(1.04);

    /* Keep the background dark enough for readable text */
    filter:
        brightness(0.58)
        contrast(1.08)
        saturate(0.9);
}

/* Improves text readability and connects it with the design */
.hero-video-overlay {
    position: absolute;
    inset: 0;
    background:
        radial-gradient(
            circle at 50% 42%,
            rgba(2, 9, 13, 0.05) 0%,
            rgba(2, 9, 13, 0.2) 46%,
            rgba(2, 9, 13, 0.78) 100%
        ),
        linear-gradient(
            180deg,
            rgba(2, 9, 13, 0.35) 0%,
            rgba(2, 9, 13, 0.08) 45%,
            rgba(2, 9, 13, 0.68) 100%
        );
}

/* Keep hero content above the video */
.hero-container,
.hero-section .scroll-cue {
    position: relative;
    z-index: 2;
}

/* Mobile optimization */
@media (max-width: 767.98px) {
    .hero-background-video {
        object-position: center center;
        transform: translate(-50%, -50%) scale(1.08);
        filter:
            brightness(0.5)
            contrast(1.08)
            saturate(0.86);
    }

    .hero-video-overlay {
        background:
            linear-gradient(
                180deg,
                rgba(2, 9, 13, 0.5) 0%,
                rgba(2, 9, 13, 0.15) 42%,
                rgba(2, 9, 13, 0.78) 100%
            );
    }
}

/* Poster remains visible when reduced motion is requested */
@media (prefers-reduced-motion: reduce) {
    .hero-background-video {
        visibility: hidden;
    }

    .hero-video-background {
        background:
            linear-gradient(
                rgba(2, 9, 13, 0.45),
                rgba(2, 9, 13, 0.7)
            ),
            url("../images/dark-veil.png") center / cover no-repeat;
    }
}
```

The reduced-motion fallback respects users who have requested less non-essential animation. ([MDN Web Docs][4])

---

## Step 4: Add professional video control JavaScript

Add this inside your existing initialization code in `assets/js/script.js`:

```javascript
const heroBackgroundVideo = document.getElementById(
    "heroBackgroundVideo"
);

if (heroBackgroundVideo) {
    const reducedMotionQuery = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    );

    const updateHeroVideoPlayback = () => {
        if (
            reducedMotionQuery.matches ||
            document.hidden
        ) {
            heroBackgroundVideo.pause();
            return;
        }

        const playPromise = heroBackgroundVideo.play();

        if (playPromise !== undefined) {
            playPromise.catch(() => {
                /*
                 * Autoplay may be blocked by the browser.
                 * The poster image will remain as the fallback.
                 */
            });
        }
    };

    updateHeroVideoPlayback();

    document.addEventListener(
        "visibilitychange",
        updateHeroVideoPlayback
    );

    reducedMotionQuery.addEventListener(
        "change",
        updateHeroVideoPlayback
    );
}
```

This pauses the animation while the browser tab is hidden and when reduced motion is enabled.

---

## Remove the existing hero effects

Your current hero probably contains elements such as:

```html
<div class="hero-grid"></div>
<div class="hero-orb hero-orb-one"></div>
<div class="hero-orb hero-orb-two"></div>
<div class="hero-curve hero-curve-one"></div>
<div class="hero-curve hero-curve-two"></div>
```

Remove these from the hero after adding Dark Veil. Otherwise, the video, glowing circles and curves will compete with one another and make the background too busy.

You may keep only the dark overlay and perhaps one very subtle grid.

---

[1]: https://github.com/DavidHDev/react-bits?utm_source=chatgpt.com "GitHub - DavidHDev/react-bits: An open source collection of animated, interactive & fully customizable React components for building memorable websites. · GitHub"
[2]: https://reactbits.dev/tools/background-studio?utm_source=chatgpt.com "React Bits - Background Studio"
[3]: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/video?utm_source=chatgpt.com "<video> HTML video embed element - HTML | MDN"
[4]: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/%40media/prefers-reduced-motion?utm_source=chatgpt.com "prefers-reduced-motion CSS media feature - CSS | MDN"
