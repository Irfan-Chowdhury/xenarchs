<?php 

namespace App\Controllers;

class HomeController extends BaseController
{

    public function landingPage()
    {
        $this->render('index');
    }

    public function index()
    {

        $this->render('home/index');
    }

    public function about()
    {

        $this->render('about/index');
    }


}



