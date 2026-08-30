<?php

use App\Controllers\ContactController;
use App\Controllers\FormController;
use App\Controllers\HomeController;
use App\Router;

$router = new Router();

$router->get('/', HomeController::class, 'landingPage');

$router->get('/blogs', HomeController::class, 'blogs');

$router->get('/privacy-policy', HomeController::class, 'privacyPolicy');

$router->get('/terms-of-service', HomeController::class, 'termsOfService');

$router->get('/about', HomeController::class, 'about');


$router->get('/contact', ContactController::class, 'contact');

$router->post('/contact', ContactController::class, 'submitForm');

return $router;
