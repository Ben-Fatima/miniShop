<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    $data = [
        'message' => 'Welcome to the API',
        'status' => 'success',
        'code' => 200
    ];

    return response()->json($data);
});
