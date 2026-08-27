<?php 

namespace App\Controllers;

class ContactController extends BaseController
{
    public function contact()
    {
        $this->render('contact/index');
    }

    // public function submitForm()
    // {
    //     // Get POST data
    //     $name = $_POST['name'] ?? '';
    //     $message = $_POST['message'] ?? '';

    //     // Pass data to view
    //     $this->render('contact/index', [
    //         'name' => $name,
    //         'message' => $message
    //     ]);
    // }


    public function submitForm()
    {
        $name = trim($_POST['name'] ?? '');
        $message = trim($_POST['message'] ?? '');

        $errors = [];

        // Validation
        if ($name === '' || strlen($name) < 3) {
            $errors['name'] = 'Name must be at least 3 characters long.';
        }

        if ($message === '' || strlen($message) < 5) {
            $errors['message'] = 'Message must be at least 5 characters long.';
        }

        // If errors exist, show form with errors
        if (!empty($errors)) {
            $this->render('contact/index', [
                'errors' => $errors,
                'old' => [
                    'name' => $name,
                    'message' => $message
                ]
            ]);
            return;
        }

        // If validation passed
        $this->render('contact/index', [
            'success' => true,
            'name' => $name,
            'message' => $message
        ]);
    }
}



