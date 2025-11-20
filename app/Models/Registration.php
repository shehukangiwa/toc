<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Registration extends Model
{
    /** @use HasFactory<\Database\Factories\RegistrationFactory> */
    use HasFactory, Notifiable;

    protected $fillable = [
        'first_name',
        'second_name',
        'last_name',
        'email',
        'phone_number',
        'address',
        'organization',
        'designation',
        'email_verified_at',
        'registration_completed',
    ];

    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'registration_completed' => 'boolean',
        ];
    }

    public function hasVerifiedEmail(): bool
    {
        return $this->email_verified_at !== null;
    }

    public function markEmailAsVerified(): bool
    {
        return $this->forceFill([
            'email_verified_at' => $this->freshTimestamp(),
        ])->save();
    }
}
