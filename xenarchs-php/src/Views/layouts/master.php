<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title><?= htmlspecialchars($pageTitle ?? 'Xenarchs | Independent Creative Studio') ?></title>
  <meta name="description" content="<?= htmlspecialchars($metaDescription ?? 'Xenarchs is an independent creative studio building future-ready brands, digital experiences, and technology.') ?>">

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@1,600;1,700&family=Inter:wght@400;500;600;700;800&family=Manrope:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@1,600;1,700&display=swap" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9Oer+RhuJUd2nbJdkxV5J18uuM9t8h2n8U8Q+0D4y5l5" crossorigin="anonymous">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
  <link rel="stylesheet" href="/assets/css/style.css">
  <?php if (!empty($extraCss)): ?>
    <?php foreach ($extraCss as $css): ?>
      <link rel="stylesheet" href="<?= htmlspecialchars($css) ?>">
    <?php endforeach; ?>
  <?php endif; ?>
</head>

<body class="<?= htmlspecialchars($bodyClass ?? '') ?>">

  <?php include __DIR__ . '/partials/navbar.php'; ?>

  <?php 
    if (isset($viewPath) && file_exists($viewPath)) {
        include $viewPath;
    } elseif (isset($view) && file_exists(__DIR__ . '/../' . $view . '.php')) {
        include __DIR__ . '/../' . $view . '.php';
    }
  ?>

  <?php include __DIR__ . '/partials/footer.php'; ?>

  <!-- Vendor Scripts -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
  <!-- Site Scripts -->
  <script src="/assets/js/config.js"></script>
  <script src="/assets/js/global.js"></script>
  <script src="/assets/js/navigation.js"></script>
  <script src="/assets/js/background-video.js"></script>
  <script src="/assets/js/reveal.js"></script>
  <script src="/assets/js/newsletter-form.js"></script>
  <?php if (!empty($extraJs)): ?>
    <?php foreach ($extraJs as $js): ?>
      <script src="<?= htmlspecialchars($js) ?>"></script>
    <?php endforeach; ?>
  <?php endif; ?>

</body>

</html>
