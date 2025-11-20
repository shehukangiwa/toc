# Oriki: The Royal Dining Experience - Registration System

## Overview
This application provides a complete event registration system for the Oriki gastronomy event with email verification and admin management.

## Features Implemented

### Public-Facing Features
1. **Welcome Page** (`/`)
   - Beautiful landing page introducing the Oriki event
   - "Register Now" buttons to start registration

2. **Registration Flow**
   - Step 1: Fill in registration form with all required fields
   - Step 2: Email verification (mandatory before completing registration)
   - Step 3: Complete registration after email is verified
   - Step 4: Confirmation page with success message

3. **Email Verification System**
   - Verification email sent automatically after initial registration
   - Signed URLs that expire in 60 minutes
   - User cannot proceed until email is verified

4. **Form Fields**
   - First Name, Second Name, Last Name (required)
   - Email Address (required, unique)
   - Phone Number (required)
   - Address (required)
   - Organization (optional)
   - Designation (optional)
   - Disclaimer acceptance checkbox (required)

5. **Email Notifications**
   - Verification email with clickable link
   - Registration completion confirmation email

### Admin Panel Features
1. **Filament Admin Panel** (`/admin`)
   - View all registrations in a searchable, sortable table
   - Filter by verification status and completion status
   - View detailed information for each registration
   - Edit registration details if needed
   - Export capabilities

## Getting Started

### 1. Start the Development Server
```bash
composer run dev
```
This will start:
- Laravel server at `http://localhost:8000`
- Vite dev server for hot module reloading
- Queue worker for email processing
- Log viewer (Pail)

### 2. Access the Application

**Public Website:**
- Homepage: `http://localhost:8000`
- Registration: `http://localhost:8000/register`

**Admin Panel:**
- URL: `http://localhost:8000/admin`
- Email: `admin@example.com`
- Password: `password`

### 3. Testing the Registration Flow

1. Visit `http://localhost:8000`
2. Click "Register Now"
3. Fill in the registration form
4. Accept the disclaimer
5. Submit the form
6. Check your email logs (or mailbox if configured)
7. Click the verification link in the email
8. You'll be redirected to complete your registration
9. After completion, you'll receive a confirmation email

### 4. Email Configuration

By default, emails are logged to the console (via Pail). To use real email:

1. Update your `.env` file:
```env
MAIL_MAILER=smtp
MAIL_HOST=your-smtp-host
MAIL_PORT=587
MAIL_USERNAME=your-email
MAIL_PASSWORD=your-password
MAIL_ENCRYPTION=tls
MAIL_FROM_ADDRESS=noreply@yourdomain.com
MAIL_FROM_NAME="${APP_NAME}"
```

## Routes

### Public Routes
- `GET /` - Welcome page
- `GET /register` - Registration form
- `POST /register` - Submit registration
- `GET /email/verify/notice/{id}` - Email verification notice page
- `GET /email/verify/{id}` - Verify email (signed URL)
- `GET /registration/{id}/form` - Access registration form after verification
- `POST /registration/{id}/complete` - Complete registration
- `GET /registration/{id}/complete` - Registration completion page

### Admin Routes
- `GET /admin` - Admin dashboard
- `GET /admin/registrations` - View all registrations
- `GET /admin/registrations/{id}` - View individual registration
- `GET /admin/registrations/{id}/edit` - Edit registration

## Database Schema

The `registrations` table includes:
- `id` - Primary key
- `first_name`, `second_name`, `last_name` - User's full name
- `email` - Unique email address
- `phone_number` - Contact number
- `address` - Full address
- `organization` - Optional organization name
- `designation` - Optional job title
- `email_verified_at` - Timestamp of email verification
- `registration_completed` - Boolean flag for completion status
- `created_at`, `updated_at` - Timestamps

## Important Notes

### Email Verification
- Users MUST verify their email before they can complete registration
- The verification page will keep showing until email is verified
- Verification links expire after 60 minutes

### Disclaimer
- Users must accept the disclaimer checkbox to submit the form
- The disclaimer explains how their data will be used

### Completion Confirmation
- After completing registration, users receive:
  1. An in-app success message
  2. A confirmation email stating details will be sent later

## Customization

### Updating Event Details
Edit the welcome page: `resources/js/pages/welcome.tsx`

### Changing Email Content
- Verification email: `app/Notifications/VerifyRegistrationEmail.php`
- Completion email: `app/Notifications/RegistrationCompleted.php`

### Modifying Form Fields
- Validation rules: `app/Http/Requests/StoreRegistrationRequest.php`
- Frontend form: `resources/js/pages/register.tsx`
- Database: Create a new migration to add/modify fields

### Admin Panel Customization
- Table columns: `app/Filament/Resources/Registrations/Tables/RegistrationsTable.php`
- Form fields: `app/Filament/Resources/Registrations/Schemas/RegistrationForm.php`

## Testing

To test with fake data:
```bash
php artisan tinker
>>> \App\Models\Registration::factory()->count(10)->create()
```

To create verified registrations:
```bash
php artisan tinker
>>> \App\Models\Registration::factory()->verified()->count(5)->create()
```

To create completed registrations:
```bash
php artisan tinker
>>> \App\Models\Registration::factory()->verified()->completed()->count(3)->create()
```

## Support

For any issues or questions about the registration system, please refer to:
- Laravel documentation: https://laravel.com/docs
- Inertia.js documentation: https://inertiajs.com
- Filament documentation: https://filamentphp.com

## Production Checklist

Before deploying to production:

1. ✓ Change `APP_ENV` to `production` in `.env`
2. ✓ Set `APP_DEBUG` to `false`
3. ✓ Configure real SMTP email settings
4. ✓ Update `APP_URL` to your production domain
5. ✓ Change admin password
6. ✓ Run `php artisan config:cache`
7. ✓ Run `php artisan route:cache`
8. ✓ Run `npm run build` for production assets
9. ✓ Set up proper queue worker (supervisor)
10. ✓ Configure SSL certificate for HTTPS
