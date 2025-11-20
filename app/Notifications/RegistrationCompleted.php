<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class RegistrationCompleted extends Notification implements ShouldQueue
{
    use Queueable;

    /**
     * Create a new notification instance.
     */
    public function __construct()
    {
    }

    /**
     * Get the notification's delivery channels.
     *
     * @return array<int, string>
     */
    public function via(object $notifiable): array
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     */
    public function toMail(object $notifiable): MailMessage
    {
        return (new MailMessage)
            ->subject('Registration Confirmed - Oriki: The Royal Dining Experience')
            ->greeting('Hello ' . $notifiable->first_name . '!')
            ->line('Your registration for Oriki: The Royal Dining Experience has been successfully completed.')
            ->line('We are excited to have you join us for this extraordinary gastronomy event.')
            ->line('Further details about the event, including venue, time, and other important information will be communicated to you shortly.')
            ->line('Please keep an eye on your email for updates.')
            ->line('Thank you for registering, and we look forward to seeing you at the event!');
    }

    /**
     * Get the array representation of the notification.
     *
     * @return array<string, mixed>
     */
    public function toArray(object $notifiable): array
    {
        return [
            //
        ];
    }
}
