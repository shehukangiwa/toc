<?php

use App\Http\Controllers\RegistrationController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::get('/register', [RegistrationController::class, 'create'])->name('registration.create');
Route::post('/register', [RegistrationController::class, 'store'])->name('registration.store');
Route::get('/email/verify/notice/{id}', [RegistrationController::class, 'verifyNotice'])->name('email.verification.notice');
Route::get('/email/verify/{id}', [RegistrationController::class, 'verify'])->name('registration.verify');
Route::get('/registration/{id}/form', [RegistrationController::class, 'showForm'])->name('registration.form');
Route::post('/registration/{id}/complete', [RegistrationController::class, 'complete'])->name('registration.complete.submit');
Route::get('/registration/{id}/complete', [RegistrationController::class, 'showComplete'])->name('registration.complete');
