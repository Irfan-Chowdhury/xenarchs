<?php

namespace App\Controllers;

class BaseController
{
    // protected function render($view, $data = [])
    // {
    //     extract($data);

    //     include __DIR__ . "/../Views/$view.php";


    // }

    protected function render($view, $data = [])
    {
        extract($data);

        $viewPath = __DIR__ . '/../Views/' . $view . '.php';
        include __DIR__ . '/../Views/layouts/master.php';
    }


    // public function sendResponse(array|string $result, string|null $message)
    // {
    //     header('Content-Type: application/json');

    // 	$response = [
    //         'success' => true,
    //         'result'  => $result,
    //         'message' => $message,
    //     ];

    //     echo json_encode($response);
    //     exit;
    // }

    // public function sendError(string $error, array $errorMessages = [], int $code = 404)
    // public function sendError(string $error, int $code = 500)
    // {
    //     header('Content-Type: application/json');
    //     http_response_code($code); // Set the HTTP status code

    // 	$response = [
    //         'success' => false,
    //         'statusCode' => $code,
    //         'message' => $error,
    //     ];

    //     // if(!empty($errorMessages)){
    //     //     $response['errors'] = $errorMessages;
    //     // }

    //     echo json_encode($response);
    //     exit;
    // }
}