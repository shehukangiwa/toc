<?php

namespace App\Filament\Resources\Registrations;

use App\Filament\Resources\Registrations\Pages;
use App\Filament\Resources\Registrations\Pages\CreateRegistration;
use App\Filament\Resources\Registrations\Pages\EditRegistration;
use App\Filament\Resources\Registrations\Pages\ListRegistrations;
use App\Models\Registration;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables\Table;

class RegistrationResource extends Resource
{
    protected static ?string $model = Registration::class;

    protected static ?string $navigationIcon = 'heroicon-o-users';

    protected static ?string $navigationLabel = 'Event Registrations';

    protected static ?string $modelLabel = 'Registration';

    protected static ?string $pluralModelLabel = 'Registrations';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                \Filament\Forms\Components\Section::make('Personal Information')
                    ->schema([
                        \Filament\Forms\Components\Grid::make(3)
                            ->schema([
                                \Filament\Forms\Components\TextInput::make('first_name')
                                    ->label('First Name')
                                    ->required()
                                    ->maxLength(255),
                                \Filament\Forms\Components\TextInput::make('second_name')
                                    ->label('Second Name')
                                    ->required()
                                    ->maxLength(255),
                                \Filament\Forms\Components\TextInput::make('last_name')
                                    ->label('Last Name')
                                    ->required()
                                    ->maxLength(255),
                            ]),
                        \Filament\Forms\Components\Grid::make(2)
                            ->schema([
                                \Filament\Forms\Components\TextInput::make('email')
                                    ->label('Email Address')
                                    ->email()
                                    ->required()
                                    ->maxLength(255)
                                    ->unique(ignoreRecord: true),
                                \Filament\Forms\Components\TextInput::make('phone_number')
                                    ->label('Phone Number')
                                    ->tel()
                                    ->required()
                                    ->maxLength(255),
                            ]),
                        \Filament\Forms\Components\Textarea::make('address')
                            ->label('Address')
                            ->required()
                            ->rows(3),
                    ]),

                \Filament\Forms\Components\Section::make('Professional Information')
                    ->schema([
                        \Filament\Forms\Components\Grid::make(2)
                            ->schema([
                                \Filament\Forms\Components\TextInput::make('organization')
                                    ->label('Organization')
                                    ->maxLength(255),
                                \Filament\Forms\Components\TextInput::make('designation')
                                    ->label('Designation')
                                    ->maxLength(255),
                            ]),
                    ]),

                \Filament\Forms\Components\Section::make('Registration Status')
                    ->schema([
                        \Filament\Forms\Components\Grid::make(2)
                            ->schema([
                                \Filament\Forms\Components\Checkbox::make('email_verified_at')
                                    ->label('Email Verified')
                                    ->disabled()
                                    ->dehydrated(false)
                                    ->formatStateUsing(fn ($state) => $state !== null),
                                \Filament\Forms\Components\Checkbox::make('registration_completed')
                                    ->label('Registration Completed'),
                            ]),
                    ]),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                \Filament\Tables\Columns\TextColumn::make('first_name')
                    ->label('First Name')
                    ->searchable()
                    ->sortable(),
                \Filament\Tables\Columns\TextColumn::make('second_name')
                    ->label('Second Name')
                    ->searchable()
                    ->sortable(),
                \Filament\Tables\Columns\TextColumn::make('last_name')
                    ->label('Last Name')
                    ->searchable()
                    ->sortable(),
                \Filament\Tables\Columns\TextColumn::make('email')
                    ->label('Email')
                    ->searchable()
                    ->sortable()
                    ->copyable(),
                \Filament\Tables\Columns\TextColumn::make('phone_number')
                    ->label('Phone')
                    ->searchable()
                    ->copyable(),
                \Filament\Tables\Columns\TextColumn::make('organization')
                    ->label('Organization')
                    ->searchable()
                    ->sortable()
                    ->toggleable(),
                \Filament\Tables\Columns\TextColumn::make('designation')
                    ->label('Designation')
                    ->searchable()
                    ->toggleable(),
                \Filament\Tables\Columns\IconColumn::make('email_verified_at')
                    ->label('Email Verified')
                    ->boolean()
                    ->sortable(),
                \Filament\Tables\Columns\IconColumn::make('registration_completed')
                    ->label('Completed')
                    ->boolean()
                    ->sortable(),
                \Filament\Tables\Columns\TextColumn::make('created_at')
                    ->label('Registered At')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(),
            ])
            ->filters([
                \Filament\Tables\Filters\TernaryFilter::make('email_verified_at')
                    ->label('Email Verified')
                    ->nullable(),
                \Filament\Tables\Filters\TernaryFilter::make('registration_completed')
                    ->label('Registration Completed'),
            ])
            ->actions([
                \Filament\Tables\Actions\ViewAction::make(),
                \Filament\Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                \Filament\Tables\Actions\BulkActionGroup::make([
                    \Filament\Tables\Actions\DeleteBulkAction::make(),
                ]),
            ])
            ->defaultSort('created_at', 'desc');
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => ListRegistrations::route('/'),
            'create' => CreateRegistration::route('/create'),
            'view' => Pages\ViewRegistration::route('/{record}'),
            'edit' => EditRegistration::route('/{record}/edit'),
        ];
    }
}
