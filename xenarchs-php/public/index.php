<?php 

ini_set('display_errors', 1);
error_reporting(E_ALL);

require __DIR__ . '/../vendor/autoload.php';

$router = require __DIR__ . '/../src/Routes/index.php';

$router->dispatch();

