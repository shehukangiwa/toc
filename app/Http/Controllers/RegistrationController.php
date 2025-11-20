<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreRegistrationRequest;
use App\Models\Registration;
use App\Notifications\RegistrationCompleted;
use App\Notifications\VerifyRegistrationEmail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\URL;
use Inertia\Inertia;
use Inertia\Response;

class RegistrationController extends Controller
{
    public function create(): Response
    {
        return Inertia::render('register');
    }

    public function store(StoreRegistrationRequest $request): \Illuminate\Http\RedirectResponse
    {
        $registration = Registration::create($request->validated());

        $verificationUrl = URL::temporarySignedRoute(
            'registration.verify',
            now()->addMinutes(60),
            ['id' => $registration->id]
        );

        $registration->notify(new VerifyRegistrationEmail($verificationUrl));

        session()->flash('message', 'Registration submitted! Please check your email to verify your address.');

        return redirect()->route('email.verification.notice', ['id' => $registration->id]);
    }

    public function verifyNotice(int $id): Response
    {
        $registration = Registration::findOrFail($id);

        if ($registration->hasVerifiedEmail()) {
            return Inertia::render('register');
        }

        return Inertia::render('verify-email', [
            'email' => $registration->email,
            'registrationId' => $registration->id,
        ]);
    }

    public function verify(Request $request, int $id): \Illuminate\Http\RedirectResponse
    {
        if (! $request->hasValidSignature()) {
            abort(403, 'Invalid or expired verification link.');
        }

        $registration = Registration::findOrFail($id);

        if ($registration->hasVerifiedEmail()) {
            return redirect()->route('registration.form', ['id' => $registration->id]);
        }

        $registration->markEmailAsVerified();

        return redirect()->route('registration.form', ['id' => $registration->id]);
    }

    public function showForm(int $id): Response
    {
        $registration = Registration::findOrFail($id);

        if (! $registration->hasVerifiedEmail()) {
            return Inertia::render('verify-email', [
                'email' => $registration->email,
                'registrationId' => $registration->id,
            ]);
        }

        if ($registration->registration_completed) {
            return Inertia::render('registration-complete', [
                'registration' => $registration,
            ]);
        }

        return Inertia::render('register', [
            'registration' => $registration,
        ]);
    }

    public function complete(Request $request, int $id): \Illuminate\Http\RedirectResponse
    {
        $registration = Registration::findOrFail($id);

        if (! $registration->hasVerifiedEmail()) {
            return redirect()->route('email.verification.notice', ['id' => $registration->id]);
        }

        $registration->update(['registration_completed' => true]);

        $registration->notify(new RegistrationCompleted());

        session()->flash('success', 'Registration completed successfully! Further details will be communicated shortly.');

        return redirect()->route('registration.complete', ['id' => $registration->id]);
    }

    public function showComplete(int $id): Response
    {
        $registration = Registration::findOrFail($id);

        return Inertia::render('registration-complete', [
            'registration' => $registration,
        ]);
    }
}
