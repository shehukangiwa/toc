<?php

namespace App\Filament\Resources\Registrations\Schemas;

use Filament\Forms\Components\Checkbox;
use Filament\Forms\Components\Grid;
use Filament\Forms\Components\Section;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Schema;

class RegistrationForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make('Personal Information')
                    ->schema([
                        Grid::make(3)
                            ->schema([
                                TextInput::make('first_name')
                                    ->label('First Name')
                                    ->required()
                                    ->maxLength(255),
                                TextInput::make('second_name')
                                    ->label('Second Name')
                                    ->required()
                                    ->maxLength(255),
                                TextInput::make('last_name')
                                    ->label('Last Name')
                                    ->required()
                                    ->maxLength(255),
                            ]),
                        Grid::make(2)
                            ->schema([
                                TextInput::make('email')
                                    ->label('Email Address')
                                    ->email()
                                    ->required()
                                    ->maxLength(255)
                                    ->unique(ignoreRecord: true),
                                TextInput::make('phone_number')
                                    ->label('Phone Number')
                                    ->tel()
                                    ->required()
                                    ->maxLength(255),
                            ]),
                        Textarea::make('address')
                            ->label('Address')
                            ->required()
                            ->rows(3),
                    ]),

                Section::make('Professional Information')
                    ->schema([
                        Grid::make(2)
                            ->schema([
                                TextInput::make('organization')
                                    ->label('Organization')
                                    ->maxLength(255),
                                TextInput::make('designation')
                                    ->label('Designation')
                                    ->maxLength(255),
                            ]),
                    ]),

                Section::make('Registration Status')
                    ->schema([
                        Grid::make(2)
                            ->schema([
                                Checkbox::make('email_verified_at')
                                    ->label('Email Verified')
                                    ->disabled()
                                    ->dehydrated(false)
                                    ->formatStateUsing(fn ($state) => $state !== null),
                                Checkbox::make('registration_completed')
                                    ->label('Registration Completed'),
                            ]),
                    ]),
            ]);
    }
}
