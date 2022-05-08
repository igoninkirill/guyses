<?php

namespace App\Http\Controllers;

class SpaController extends Controller
{
    public function index()
    {
        $path = public_path('_nuxt/index.html');

        abort_unless(file_exists($path), 400, 'Make sure to run npm run build!');

        return file_get_contents($path);
    }
}
