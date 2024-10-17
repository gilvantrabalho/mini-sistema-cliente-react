<?php

use App\Http\Controllers\Api\CityController;
use App\Http\Controllers\Api\ClientController;
use App\Http\Controllers\Api\RepresentativeController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::prefix('city')->controller(CityController::class)->group(function () {
    Route::get('/', 'read');
});

Route::prefix('client')->controller(ClientController::class)->group(function () {
    Route::get('/', 'read');
    Route::post('/', 'store');
    Route::delete('{client}', 'destroy');
    Route::get('{client}', 'show');
    Route::put('{client}', 'update');
});

Route::prefix('representative')->controller(RepresentativeController::class)->group(function() {
    Route::get('/', 'read');
    Route::post('/', 'store');
});