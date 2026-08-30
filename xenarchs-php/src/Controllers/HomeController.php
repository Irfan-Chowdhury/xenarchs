<?php

namespace App\Controllers;

class HomeController extends BaseController
{

    public function landingPage()
    {
        $this->render('pages/index', [
            'pageTitle' => 'Xenarchs | Independent Creative Studio',
            'metaDescription' => 'Xenarchs is an independent creative studio building future-ready brands, digital experiences, and technology.',
            'bodyClass' => '',
            'extraCss' => ['/assets/css/blog.css'],
            'extraJs' => [
                '/assets/js/featured-projects.js',
                '/assets/js/people-showcase.js',
                '/assets/js/client-stories.js',
                '/assets/js/how-we-work.js',
                '/assets/js/faq.js',
                '/assets/js/contact-form.js'
            ]
        ]);
    }

    public function index()
    {
        $this->landingPage();
    }

    public function about()
    {
        $this->render('about/index');
    }

    public function privacyPolicy()
    {
        $this->render('pages/privacy-policy', [
            'pageTitle' => 'Privacy Policy | Xenarchs Studio',
            'metaDescription' => 'Read the Privacy Policy for Xenarchs. Learn how we collect, use, protect, and handle your personal information responsibly.',
            'bodyClass' => 'terms-page',
            'extraCss' => ['/assets/css/terms.css']
        ]);
    }

    public function termsOfService()
    {
        $this->render('pages/terms-of-service', [
            'pageTitle' => 'Terms of Service | Xenarchs Studio',
            'metaDescription' => 'Read the Terms of Service for Xenarchs. Learn about our website terms, project agreements, intellectual property, client responsibilities, and service conditions.',
            'bodyClass' => 'terms-page',
            'extraCss' => ['/assets/css/terms.css']
        ]);
    }

    public function blogs()
    {
        $this->render('pages/blogs', [
            'pageTitle' => 'Blogs | Xenarchs Studio',
            'metaDescription' => 'Thoughts, perspectives, and stories on design, technology, branding and digital experiences.',
            'bodyClass' => 'blog-page',
            'activeNav' => 'blogs',
            'extraCss' => ['/assets/css/terms.css', '/assets/css/blogs-page.css'],
            'extraJs' => ['/assets/js/blog.js']
        ]);
    }
}
