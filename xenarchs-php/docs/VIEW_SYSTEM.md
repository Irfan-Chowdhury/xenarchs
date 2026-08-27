# View System & Layout Architecture

This document provides technical documentation for developers working on the `xenarchs-php` application, detailing the view file organization, master layout system, and controller rendering workflow.

---

## 1. Overview

The application utilizes a lightweight, modular view architecture built on top of `BaseController`. Instead of duplicating `<head>`, navigation, and `<footer>` elements across every template, all pages are composed dynamically inside a **Master Layout** (`layouts/master.php`) using reusable partials.

---

## 2. Directory Structure

```
xenarchs-php/src/Views/
├── layouts/
│   ├── master.php               # Master layout wrapper (head, body shell, script imports)
│   └── partials/
│       ├── navbar.php           # Header navigation bar component
│       └── footer.php           # Footer component (newsletter, social, legal & explore links)
└── pages/
    ├── index.php                # Landing page main component (<main>...</main>)
    ├── privacy-policy.php       # Privacy Policy page main component
    └── terms-of-service.php     # Terms of Service page main component
```

---

## 3. Core Architecture & Workflow

### A. BaseController (`src/Controllers/BaseController.php`)
The `render($view, $data)` method acts as the entry point for rendering pages. It resolves the absolute file path of the target page view and exposes variables to `master.php`.

```php
protected function render($view, $data = [])
{
    $viewPath = __DIR__ . '/../Views/' . $view . '.php';
    $data['viewPath'] = $viewPath;
    $data['view'] = $view;
    extract($data);

    include __DIR__ . '/../Views/layouts/master.php';
}
```

### B. Controller Actions (`src/Controllers/HomeController.php`)
Controllers specify the target view inside `src/Views/` and pass page metadata:

- `pageTitle` (string): Title tag content.
- `metaDescription` (string): Meta description for SEO.
- `bodyClass` (string): Optional body class (e.g. `'terms-page'`).
- `extraCss` (array): Page-specific CSS files (e.g. `['/assets/css/terms.css']`).
- `extraJs` (array): Page-specific JS files.

Example:
```php
public function privacyPolicy()
{
    $this->render('pages/privacy-policy', [
        'pageTitle' => 'Privacy Policy | Xenarchs Studio',
        'metaDescription' => 'Read the Privacy Policy for Xenarchs...',
        'bodyClass' => 'terms-page',
        'extraCss' => ['/assets/css/terms.css']
    ]);
}
```

### C. Master Layout (`src/Views/layouts/master.php`)
The master template renders the HTML document skeleton and includes components in sequence:

1. **HTML `<head>`**: Renders metadata, fonts, Bootstrap CSS, `style.css`, and `$extraCss`.
2. **Navbar**: Injects `partials/navbar.php`.
3. **Main Content View**: Safely includes the targeted page view via `$viewPath`.
4. **Footer**: Injects `partials/footer.php`.
5. **Scripts**: Injects core vendor scripts, site scripts, and `$extraJs`.

---

## 4. Summary of Recent Changes & Rationale

| Change | Rationale |
| :--- | :--- |
| **Created `master.php` & `partials/`** | DRY (Don't Repeat Yourself) principle. Avoids repeating navigation, footer, fonts, and meta tags across multiple files. |
| **Migrated Legal & Landing Pages to `pages/`** | Standardized view file location inside `src/Views/pages/` for cleaner MVC separation. |
| **Extracted Boilerplate from Views** | `pages/index.php`, `privacy-policy.php`, and `terms-of-service.php` now contain only `<main>` content, making templates simpler to maintain. |
| **Added Safe `$viewPath` Resolution** | Fixed `Undefined variable '$viewPath'` by explicitly defining `$data['viewPath']` in `BaseController` and adding `isset()` guards in `master.php`. |

---

## 5. Developer Guide: Adding a New Page

To add a new page to the application:

1. Create a clean page view component in `src/Views/pages/your-page.php` containing `<main>...</main>` content.
2. Add a controller method in `src/Controllers/HomeController.php`:
   ```php
   public function yourPage()
   {
       $this->render('pages/your-page', [
           'pageTitle' => 'Your Page | Xenarchs',
           'metaDescription' => 'Description here...'
       ]);
   }
   ```
3. Register the route in `src/Routes/index.php`:
   ```php
   $router->get('/your-page', HomeController::class, 'yourPage');
   ```
