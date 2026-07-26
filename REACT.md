Yes. The safest method is to create a **new React project beside the existing HTML project**, then migrate each section gradually. Do not overwrite the working HTML version until the React version is fully tested.

I’ll assume you are using **Ubuntu and VS Code**.

# Migration plan

```text
Existing project
xenarchs-html/
    index.html
    assets/
        css/
        js/
        images/

New project
xenarchs-react/
    public/
    src/
    package.json
    vite.config.js
```

React’s documentation recommends using a modular environment such as Vite when an existing project does not already compile JSX and JavaScript modules. ([React][1])

---

# Step 1 — Back up the current HTML project

Go to the directory containing your website:

```bash
cd /path/to/your/projects
```

Create a backup:

```bash
cp -a xenarchs-html xenarchs-html-backup
```

Or commit the existing project with Git:

```bash
cd xenarchs-html

git add .
git commit -m "Backup before React migration"
```

Do not delete the HTML project.

---

# Step 2 — Check Node.js and npm

Run:

```bash
node -v
npm -v
```

Current Vite requires Node.js `20.19+` or `22.12+`. Node.js 24 is currently an LTS release and is suitable for the project. ([vitejs][2])

A good result would look similar to:

```text
v24.x.x
11.x.x
```

## Install Node.js through NVM

When Node.js is missing or too old, install NVM:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.5/install.sh | bash
```

Load NVM:

```bash
source ~/.bashrc
```

Install Node.js 24:

```bash
nvm install 24
```

Set it as the default:

```bash
nvm use 24
nvm alias default 24
```

Verify:

```bash
node -v
npm -v
```

Do not install React globally.

---

# Step 3 — Create the React project with Vite

Go to the parent folder, not inside your existing HTML project:

```bash
cd /path/to/your/projects
```

Create the React project:

```bash
npm create vite@latest xenarchs-react -- --template react
```

Enter the project:

```bash
cd xenarchs-react
```

Install the generated dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Vite’s official React template is created through `npm create vite@latest ... -- --template react`. The local development server normally opens at `http://localhost:5173`. ([vitejs][2])

Open:

```text
http://localhost:5173
```

You should see the default Vite React page.

Stop the server when necessary with:

```text
Ctrl + C
```

---

# Step 4 — Open the new project in VS Code

From the React project folder:

```bash
code .
```

Your initial project should look approximately like this:

```text
xenarchs-react/
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
└── vite.config.js
```

---

# Step 5 — Install Bootstrap and Bootstrap Icons

Run:

```bash
npm install bootstrap bootstrap-icons
```

Bootstrap officially supports being installed and bundled through Vite. ([getbootstrap.com][3])

Do not keep Bootstrap CDN links after Bootstrap is installed through npm.

---

# Step 6 — Create the professional folder structure

Run:

```bash
mkdir -p src/components/layout
mkdir -p src/components/sections
mkdir -p src/components/ui
mkdir -p src/components/backgrounds
mkdir -p src/data
mkdir -p src/hooks
mkdir -p src/styles
mkdir -p public/assets/images
mkdir -p public/assets/videos
```

The structure should become:

```text
xenarchs-react/
├── public/
│   └── assets/
│       ├── images/
│       └── videos/
├── src/
│   ├── components/
│   │   ├── backgrounds/
│   │   ├── layout/
│   │   ├── sections/
│   │   └── ui/
│   ├── data/
│   ├── hooks/
│   ├── styles/
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

---

# Step 7 — Copy your existing assets

Assuming both projects are beside each other:

```text
projects/
├── xenarchs-html/
└── xenarchs-react/
```

From inside `xenarchs-react`, run:

```bash
cp -a ../xenarchs-html/assets/images/. public/assets/images/
```

For existing videos:

```bash
cp -a ../xenarchs-html/assets/videos/. public/assets/videos/
```

Ignore the second command when the old project has no videos folder.

Files placed in Vite’s `public` directory are served from the site root and copied into the production build without renaming. ([vitejs][4])

Therefore, convert old paths such as:

```html
assets/images/team-1.svg
```

to:

```jsx
/assets/images/team-1.svg
```

Example:

```jsx
<img
  src="/assets/images/team-1.svg"
  alt="Amina Rahman, Creative Director"
/>
```

---

# Step 8 — Copy your custom CSS

Copy the existing CSS:

```bash
cp ../xenarchs-html/assets/css/style.css src/styles/global.css
```

Delete the Vite starter CSS files:

```bash
rm -f src/App.css
rm -f src/index.css
```

Check `global.css` for old relative image paths.

Change:

```css
background-image: url("../images/background.svg");
```

to:

```css
background-image: url("/assets/images/background.svg");
```

Do not rewrite all CSS immediately. Most Bootstrap classes and custom selectors can remain unchanged.

---

# Step 9 — Configure `src/main.jsx`

Replace the complete contents of `src/main.jsx` with:

```jsx
import React from "react";
import ReactDOM from "react-dom/client";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "./styles/global.css";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

This loads:

* React
* Bootstrap CSS
* Bootstrap Icons
* Bootstrap JavaScript
* Your custom stylesheet
* Your main application

---

# Step 10 — Clean the Vite `index.html`

Open the React project’s root `index.html`.

Use:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">

    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0"
    >

    <meta
      name="description"
      content="Xenarchs is an independent creative studio building brands, digital products and experiences."
    >

    <meta name="theme-color" content="#02090d">

    <link
      rel="icon"
      type="image/svg+xml"
      href="/assets/images/favicon.svg"
    >

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link
      rel="preconnect"
      href="https://fonts.gstatic.com"
      crossorigin
    >

    <link
      href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@1,600;1,700&family=Manrope:wght@400;500;600;700;800&display=swap"
      rel="stylesheet"
    >

    <title>Xenarchs — Independent Creative Studio</title>
  </head>

  <body>
    <div id="root"></div>

    <script
      type="module"
      src="/src/main.jsx"
    ></script>
  </body>
</html>
```

Do not add Bootstrap CDN links here because Bootstrap is imported through npm.

Do not copy the old website’s complete body into this file. React will render the website inside:

```html
<div id="root"></div>
```

---

# Step 11 — Create the first working `App.jsx`

Before converting the complete website, confirm that the project works.

Replace `src/App.jsx` with:

```jsx
function App() {
  return (
    <main>
      <section className="min-vh-100 d-flex align-items-center bg-dark text-white">
        <div className="container text-center">
          <h1>Xenarchs React migration is ready</h1>

          <p className="text-white-50">
            Bootstrap and custom CSS are connected.
          </p>

          <button type="button" className="btn btn-info">
            Test Button
          </button>
        </div>
      </section>
    </main>
  );
}

export default App;
```

Start the project:

```bash
npm run dev
```

Confirm that:

* The page loads
* Bootstrap styles work
* No red error appears in the terminal
* No error appears in the browser console

Commit this checkpoint:

```bash
git init
git add .
git commit -m "Create React Vite project with Bootstrap"
```

---

# Step 12 — Convert the HTML into React components

Do not paste the whole HTML page into one large component.

Use this migration order:

```text
1. Header.jsx
2. Hero.jsx
3. Intro.jsx
4. Services.jsx
5. Work.jsx
6. Process.jsx
7. About.jsx
8. Team.jsx
9. Testimonials.jsx
10. Insights.jsx
11. FAQ.jsx
12. Contact.jsx
13. Footer.jsx
```

Place layout components here:

```text
src/components/layout/Header.jsx
src/components/layout/Footer.jsx
```

Place page sections here:

```text
src/components/sections/Hero.jsx
src/components/sections/Intro.jsx
src/components/sections/Services.jsx
...
```

## JSX conversion rules

| HTML           | React JSX         |
| -------------- | ----------------- |
| `class`        | `className`       |
| `for`          | `htmlFor`         |
| `onclick`      | `onClick`         |
| `tabindex`     | `tabIndex`        |
| `readonly`     | `readOnly`        |
| `maxlength`    | `maxLength`       |
| `autocomplete` | `autoComplete`    |
| `stroke-width` | `strokeWidth`     |
| HTML comment   | `{/* comment */}` |

All elements must be closed.

HTML:

```html
<img src="image.svg">
```

JSX:

```jsx
<img src="/assets/images/image.svg" alt="" />
```

HTML:

```html
<input type="text">
```

JSX:

```jsx
<input type="text" />
```

HTML:

```html
<label for="contactName">
```

JSX:

```jsx
<label htmlFor="contactName">
```

HTML inline style:

```html
<div style="--delay: .2s">
```

JSX:

```jsx
<div style={{ "--delay": ".2s" }}>
```

---

# Step 13 — Create your first real component

Create:

```text
src/components/sections/Intro.jsx
```

Example:

```jsx
function Intro() {
  const clients = [
    "Northstar",
    "Arcadia",
    "Vanta",
    "Monocle",
    "Solace",
    "Fieldnote",
  ];

  return (
    <section className="intro-section section-pad" id="intro">
      <div className="container-xl">
        <div className="row align-items-end g-4">
          <div className="col-lg-8">
            <p className="section-kicker">What we believe</p>

            <h2 className="section-title mb-0">
              We create <em>experiences</em> built for modern brands.
            </h2>
          </div>

          <div className="col-lg-4">
            <p className="section-lead mb-0">
              Clear thinking, expressive design and dependable
              execution—brought together as one focused creative
              partnership.
            </p>
          </div>
        </div>

        <div className="logo-strip">
          {clients.map((client) => (
            <span key={client}>{client}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Intro;
```

Then import it into `App.jsx`:

```jsx
import Intro from "./components/sections/Intro.jsx";

function App() {
  return (
    <>
      <main>
        <Intro />
      </main>
    </>
  );
}

export default App;
```

This confirms that JSX and section components work.

---

# Step 14 — Build the final `App.jsx`

After creating all component files, use:

```jsx
import Header from "./components/layout/Header.jsx";
import Footer from "./components/layout/Footer.jsx";

import Hero from "./components/sections/Hero.jsx";
import Intro from "./components/sections/Intro.jsx";
import Services from "./components/sections/Services.jsx";
import Work from "./components/sections/Work.jsx";
import Process from "./components/sections/Process.jsx";
import About from "./components/sections/About.jsx";
import Team from "./components/sections/Team.jsx";
import Testimonials from "./components/sections/Testimonials.jsx";
import Insights from "./components/sections/Insights.jsx";
import FAQ from "./components/sections/FAQ.jsx";
import Contact from "./components/sections/Contact.jsx";

function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <Header />

      <main id="main-content">
        <Hero />
        <Intro />
        <Services />
        <Work />
        <Process />
        <About />
        <Team />
        <Testimonials />
        <Insights />
        <FAQ />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
```

---

# Step 15 — Convert repeated content into data arrays

Do not duplicate six service-card structures manually.

Create:

```text
src/data/services.js
```

Example:

```javascript
export const services = [
  {
    id: 1,
    category: "UI & UX Design",
    title: "Designing interfaces users actually enjoy.",
    description:
      "Research-led product design for websites, platforms and digital services.",
    features: [
      "User research and journey mapping",
      "Wireframes and interactive prototypes",
      "Interface systems and usability testing",
    ],
    tools: ["Figma", "FigJam", "Framer", "Maze"],
    className: "service-cyan",
  },
  {
    id: 2,
    category: "Branding Design",
    title: "Designing visual identities that stand out everywhere.",
    description:
      "Distinct brand systems built around a clear idea.",
    features: [
      "Positioning and visual direction",
      "Identity systems and brand guidelines",
      "Campaign and launch toolkits",
    ],
    tools: ["Illustrator", "InDesign", "Photoshop"],
    className: "service-mint",
  },
];
```

In `Services.jsx`:

```jsx
import { services } from "../../data/services.js";

function Services() {
  return (
    <section className="services-section section-pad" id="services">
      <div className="container-xl">
        <div className="services-stack">
          {services.map((service) => (
            <article
              className={`service-panel ${service.className}`}
              key={service.id}
            >
              <div className="service-copy">
                <p className="service-number">
                  {String(service.id).padStart(2, "0")} /{" "}
                  {service.category}
                </p>

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <ul className="service-list">
                  {service.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>

                <div className="tool-row">
                  {service.tools.map((tool) => (
                    <span key={tool}>{tool}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
```

Use the same approach for:

```text
src/data/projects.js
src/data/team.js
src/data/testimonials.js
src/data/insights.js
src/data/faqs.js
```

---

# Step 16 — Convert old JavaScript behavior to React

Your old `assets/js/script.js` should not simply be copied into React.

Move each behavior into the relevant component.

## Header scrolling

Inside `Header.jsx`:

```jsx
import { useEffect, useState } from "react";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <header
      className={`site-header fixed-top ${
        scrolled ? "header-scrolled" : ""
      } ${menuOpen ? "menu-open" : ""}`}
    >
      {/* Navbar content */}
    </header>
  );
}

export default Header;
```

## Current year

In `Footer.jsx`, replace old JavaScript with:

```jsx
<span>© {new Date().getFullYear()} Xenarchs Studio</span>
```

## Buttons and menu events

HTML:

```html
<button onclick="openMenu()">
```

React:

```jsx
<button onClick={() => setMenuOpen(true)}>
```

## Form submission

Use an `onSubmit` handler in `Contact.jsx`:

```jsx
const handleSubmit = (event) => {
  event.preventDefault();

  // Validate and submit form here.
};
```

```jsx
<form onSubmit={handleSubmit} noValidate>
```

## Scroll reveal

Create a reusable hook rather than adding a separate observer to every component:

```text
src/hooks/useReveal.js
```

```javascript
import { useEffect } from "react";

export function useReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => {
        element.classList.add("is-visible");
      });

      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            currentObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.14,
        rootMargin: "0px 0px -40px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);
}
```

Call it once in `App.jsx`:

```jsx
import { useReveal } from "./hooks/useReveal.js";

function App() {
  useReveal();

  return (
    <>
      {/* Components */}
    </>
  );
}
```

---

# Step 17 — Navbar and FAQ strategy

You have two choices:

### Recommended React approach

Use React state for:

* Mobile navigation
* FAQ accordion
* Active items
* Contact form
* Modal dialogs

This keeps React responsible for the interface state.

### Faster migration approach

Keep Bootstrap JavaScript and Bootstrap attributes such as:

```jsx
data-bs-toggle="collapse"
data-bs-target="#mainNav"
```

This is acceptable during the first migration, but eventually using React state will make those components easier to maintain.

Do not use jQuery.

---

# Step 18 — Add Dark Veil only after migration works

Do not install Dark Veil at the beginning.

First confirm that:

```bash
npm run dev
npm run lint
npm run build
```

all work.

Commit:

```bash
git add .
git commit -m "Migrate Xenarchs website sections to React"
```

Then use the exact JS-CSS installation command shown by React Bits:

```bash
npx shadcn@latest add @react-bits/DarkVeil-JS-CSS
```

React Bits Background Studio supports exporting animated backgrounds as code, images or video. ([React Bits][5])

The generated location may vary depending on the CLI configuration. After installation, search for the component:

```bash
find src -iname "*DarkVeil*"
```

A likely structure will be similar to:

```text
src/components/DarkVeil/
├── DarkVeil.jsx
└── DarkVeil.css
```

Move it to:

```text
src/components/backgrounds/DarkVeil/
```

Then import it in `Hero.jsx`.

Example:

```jsx
import DarkVeil from "../backgrounds/DarkVeil/DarkVeil.jsx";

function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-background" aria-hidden="true">
        <DarkVeil
          hueShift={40}
          noiseIntensity={0}
          scanlineIntensity={0.25}
          speed={0.6}
          scanlineFrequency={0}
          warpAmount={0}
          resolutionScale={1.25}
        />
      </div>

      <div className="hero-overlay" aria-hidden="true" />

      <div className="container-xl hero-container">
        {/* Existing hero content */}
      </div>
    </section>
  );
}

export default Hero;
```

Do not add Dark Veil to multiple sections.

---

# Step 19 — Remove old HTML-specific files

Only after every React component works, remove unused files from the React project.

Do not copy these from the old project:

```text
assets/js/script.js
old index.html body markup
Bootstrap CDN CSS
Bootstrap CDN JavaScript
Bootstrap Icons CDN
```

Keep the original HTML project separately as a backup.

---

# Step 20 — Run quality checks

Start development mode:

```bash
npm run dev
```

Run ESLint:

```bash
npm run lint
```

Create the production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

Vite writes the production files to `dist` by default, and `npm run preview` serves the production build locally, usually at port `4173`. ([vitejs][6])

Test:

* Desktop navigation
* Mobile navigation
* Every anchor link
* Dark Veil performance
* Contact validation
* FAQ
* Responsive layouts
* Keyboard navigation
* Browser console
* Network errors
* Missing images
* Reduced-motion behavior

---

# Step 21 — Production deployment on Apache

Build the website:

```bash
npm run build
```

The deployable files will be inside:

```text
dist/
```

## Deploy to the root of a domain

Example destination:

```text
/var/www/html/xenarchs
```

Run:

```bash
sudo mkdir -p /var/www/html/xenarchs
sudo rsync -av --delete dist/ /var/www/html/xenarchs/
```

Set standard Apache permissions:

```bash
sudo chown -R www-data:www-data /var/www/html/xenarchs

sudo find /var/www/html/xenarchs \
  -type d \
  -exec chmod 755 {} \;

sudo find /var/www/html/xenarchs \
  -type f \
  -exec chmod 644 {} \;
```

Because this is currently a one-page anchor-based website and not a React Router application, no SPA rewrite rule is required.

---

# Step 22 — Deploying inside a subfolder

For a URL such as:

```text
https://example.com/xenarchs/
```

Update `vite.config.js`:

```javascript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/xenarchs/",
});
```

Then rebuild:

```bash
npm run build
```

Vite uses the `base` option to adjust asset URLs when deploying under a nested public path. ([vitejs][7])

For the main domain root:

```javascript
base: "/"
```

or simply omit `base`.

---

# Recommended migration checkpoints

Commit after each stable phase:

```bash
git add .
git commit -m "Set up React Vite and Bootstrap"
```

```bash
git add .
git commit -m "Migrate header and hero"
```

```bash
git add .
git commit -m "Migrate content sections"
```

```bash
git add .
git commit -m "Add contact form and interaction"
```

```bash
git add .
git commit -m "Add Dark Veil background"
```

```bash
git add .
git commit -m "Complete responsive and production checks"
```

# Final checklist

Before replacing the existing website, confirm:

```text
[ ] npm run dev works
[ ] npm run lint works
[ ] npm run build works
[ ] npm run preview works
[ ] No console errors
[ ] No missing images
[ ] Navbar works on mobile
[ ] Every section link works
[ ] Contact validation works
[ ] Dark Veil does not hide hero text
[ ] Reduced-motion mode works
[ ] 360px mobile layout has no horizontal overflow
[ ] dist folder works independently
[ ] Existing HTML project remains backed up
```

Begin with **Steps 1–3** and send the output of:

```bash
node -v
npm -v
npm create vite@latest xenarchs-react -- --template react
```

Then we can perform the migration safely, one section at a time.

[1]: https://react.dev/learn/add-react-to-an-existing-project "Add React to an Existing Project – React"
[2]: https://vite.dev/guide/ "Getting Started | Vite"
[3]: https://getbootstrap.com/docs/5.3/getting-started/vite/ "Bootstrap and Vite · Bootstrap v5.3"
[4]: https://vite.dev/guide/assets.html?utm_source=chatgpt.com "Static Asset Handling | Vite"
[5]: https://reactbits.dev/tools/background-studio?utm_source=chatgpt.com "React Bits - Background Studio"
[6]: https://vite.dev/guide/static-deploy?utm_source=chatgpt.com "Deploying a Static Site | Vite"
[7]: https://vite.dev/guide/build.html?utm_source=chatgpt.com "Building for Production | Vite"
