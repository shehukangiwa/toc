import { Head, Link, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';
import Layout from '@/components/Layout';
import { LogoBadge, BotanicalOverlay } from '@/components/BotanicalPatterns';

interface Registration {
    id: number;
    first_name: string;
    second_name: string;
    last_name: string;
    email: string;
    phone_number: string;
    address: string;
    organization?: string;
    designation?: string;
    email_verified_at?: string;
    registration_completed: boolean;
}

export default function Register({ registration }: { registration?: Registration }) {
    const { data, setData, post, processing, errors } = useForm({
        first_name: registration?.first_name || '',
        second_name: registration?.second_name || '',
        last_name: registration?.last_name || '',
        email: registration?.email || '',
        phone_number: registration?.phone_number || '',
        address: registration?.address || '',
        organization: registration?.organization || '',
        designation: registration?.designation || '',
        disclaimer_accepted: false,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        if (registration) {
            post(`/registration/${registration.id}/complete`);
        } else {
            post('/register');
        }
    };

    return (
        <>
            <Head title="Register - ÒRÌKÌ" />
            <Layout>
                <div className="relative w-full px-4 py-12 sm:px-6 lg:px-8">
                    {/* Pattern overlay */}
                    <BotanicalOverlay pattern="tropical" opacity={0.05} className="absolute inset-0" />

                    <div className="relative mx-auto max-w-4xl">
                        {/* Header */}
                        <div className="mb-12 animate-slide-up text-center">
                            <div className="mb-6 flex justify-center">
                                <LogoBadge size="lg" />
                            </div>
                            <h1 className="mb-4 text-5xl font-black text-gray-900">
                                Event Registration
                            </h1>
                            <p className="text-xl text-gray-700">
                                {registration ? 'Complete your registration for ÒRÌKÌ' : 'Reserve your seat for the royal dining experience'}
                            </p>
                        </div>

                        {/* Form Card - Glassmorphism */}
                        <div className="glass-card animate-slide-up rounded-3xl border-2 border-white/40 p-8 shadow-2xl sm:p-12" style={{ animationDelay: '0.1s' }}>
                            <form onSubmit={submit} className="space-y-10">
                                {/* Personal Information Section */}
                                <div>
                                    <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold text-gray-900">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#E65C2E] to-[#C62828] shadow-lg">
                                            <span className="text-lg font-bold text-white">1</span>
                                        </div>
                                        Personal Information
                                    </h2>

                                    <div className="grid gap-6 sm:grid-cols-3">
                                        <div>
                                            <label
                                                htmlFor="first_name"
                                                className="block text-sm font-semibold text-gray-800"
                                            >
                                                First Name <span className="text-[#E65C2E]">*</span>
                                            </label>
                                            <input
                                                id="first_name"
                                                type="text"
                                                value={data.first_name}
                                                onChange={(e) => setData('first_name', e.target.value)}
                                                className="mt-2 block w-full rounded-xl border-2 border-gray-200 bg-white/60 px-4 py-3 text-gray-900 placeholder-gray-500 backdrop-blur-sm transition-all focus:border-[#E65C2E] focus:bg-white focus:ring-2 focus:ring-[#E65C2E]/20 focus:outline-none"
                                                placeholder="Enter first name"
                                                required
                                            />
                                            {errors.first_name && (
                                                <p className="mt-2 flex items-center gap-1 text-sm text-[#C62828]">
                                                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                                    </svg>
                                                    {errors.first_name}
                                                </p>
                                            )}
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="second_name"
                                                className="block text-sm font-semibold text-gray-800"
                                            >
                                                Second Name <span className="text-[#E65C2E]">*</span>
                                            </label>
                                            <input
                                                id="second_name"
                                                type="text"
                                                value={data.second_name}
                                                onChange={(e) => setData('second_name', e.target.value)}
                                                className="mt-2 block w-full rounded-xl border-2 border-gray-200 bg-white/60 px-4 py-3 text-gray-900 placeholder-gray-500 backdrop-blur-sm transition-all focus:border-[#E65C2E] focus:bg-white focus:ring-2 focus:ring-[#E65C2E]/20 focus:outline-none"
                                                placeholder="Enter second name"
                                                required
                                            />
                                            {errors.second_name && (
                                                <p className="mt-2 flex items-center gap-1 text-sm text-[#C62828]">
                                                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                                    </svg>
                                                    {errors.second_name}
                                                </p>
                                            )}
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="last_name"
                                                className="block text-sm font-semibold text-gray-800"
                                            >
                                                Last Name <span className="text-[#E65C2E]">*</span>
                                            </label>
                                            <input
                                                id="last_name"
                                                type="text"
                                                value={data.last_name}
                                                onChange={(e) => setData('last_name', e.target.value)}
                                                className="mt-2 block w-full rounded-xl border-2 border-gray-200 bg-white/60 px-4 py-3 text-gray-900 placeholder-gray-500 backdrop-blur-sm transition-all focus:border-[#E65C2E] focus:bg-white focus:ring-2 focus:ring-[#E65C2E]/20 focus:outline-none"
                                                placeholder="Enter last name"
                                                required
                                            />
                                            {errors.last_name && (
                                                <p className="mt-2 flex items-center gap-1 text-sm text-[#C62828]">
                                                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                                    </svg>
                                                    {errors.last_name}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Contact Information Section */}
                                <div>
                                    <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold text-gray-900">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#2D9B9B] to-[#1B5E20] shadow-lg">
                                            <span className="text-lg font-bold text-white">2</span>
                                        </div>
                                        Contact Information
                                    </h2>

                                    <div className="grid gap-6 sm:grid-cols-2">
                                        <div>
                                            <label
                                                htmlFor="email"
                                                className="block text-sm font-semibold text-gray-800"
                                            >
                                                Email Address <span className="text-[#E65C2E]">*</span>
                                            </label>
                                            <input
                                                id="email"
                                                type="email"
                                                value={data.email}
                                                onChange={(e) => setData('email', e.target.value)}
                                                className="mt-2 block w-full rounded-xl border-2 border-gray-200 bg-white/60 px-4 py-3 text-gray-900 placeholder-gray-500 backdrop-blur-sm transition-all focus:border-[#2D9B9B] focus:bg-white focus:ring-2 focus:ring-[#2D9B9B]/20 focus:outline-none"
                                                placeholder="your.email@example.com"
                                                required
                                            />
                                            {errors.email && (
                                                <p className="mt-2 flex items-center gap-1 text-sm text-[#C62828]">
                                                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                                    </svg>
                                                    {errors.email}
                                                </p>
                                            )}
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="phone_number"
                                                className="block text-sm font-semibold text-gray-800"
                                            >
                                                Phone Number <span className="text-[#E65C2E]">*</span>
                                            </label>
                                            <input
                                                id="phone_number"
                                                type="tel"
                                                value={data.phone_number}
                                                onChange={(e) => setData('phone_number', e.target.value)}
                                                className="mt-2 block w-full rounded-xl border-2 border-gray-200 bg-white/60 px-4 py-3 text-gray-900 placeholder-gray-500 backdrop-blur-sm transition-all focus:border-[#2D9B9B] focus:bg-white focus:ring-2 focus:ring-[#2D9B9B]/20 focus:outline-none"
                                                placeholder="+234 801 234 5678"
                                                required
                                            />
                                            {errors.phone_number && (
                                                <p className="mt-2 flex items-center gap-1 text-sm text-[#C62828]">
                                                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                                    </svg>
                                                    {errors.phone_number}
                                                </p>
                                            )}
                                        </div>

                                        <div className="sm:col-span-2">
                                            <label
                                                htmlFor="address"
                                                className="block text-sm font-semibold text-gray-800"
                                            >
                                                Address <span className="text-[#E65C2E]">*</span>
                                            </label>
                                            <textarea
                                                id="address"
                                                value={data.address}
                                                onChange={(e) => setData('address', e.target.value)}
                                                rows={3}
                                                className="mt-2 block w-full rounded-xl border-2 border-gray-200 bg-white/60 px-4 py-3 text-gray-900 placeholder-gray-500 backdrop-blur-sm transition-all focus:border-[#2D9B9B] focus:bg-white focus:ring-2 focus:ring-[#2D9B9B]/20 focus:outline-none"
                                                placeholder="Enter your full address"
                                                required
                                            />
                                            {errors.address && (
                                                <p className="mt-2 flex items-center gap-1 text-sm text-[#C62828]">
                                                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                                    </svg>
                                                    {errors.address}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Professional Information Section */}
                                <div>
                                    <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold text-gray-900">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#E65C2E] shadow-lg">
                                            <span className="text-lg font-bold text-white">3</span>
                                        </div>
                                        Professional Information
                                        <span className="text-sm font-normal text-gray-600">(Optional)</span>
                                    </h2>

                                    <div className="grid gap-6 sm:grid-cols-2">
                                        <div>
                                            <label
                                                htmlFor="organization"
                                                className="block text-sm font-semibold text-gray-800"
                                            >
                                                Organization
                                            </label>
                                            <input
                                                id="organization"
                                                type="text"
                                                value={data.organization}
                                                onChange={(e) => setData('organization', e.target.value)}
                                                className="mt-2 block w-full rounded-xl border-2 border-gray-200 bg-white/60 px-4 py-3 text-gray-900 placeholder-gray-500 backdrop-blur-sm transition-all focus:border-[#D4AF37] focus:bg-white focus:ring-2 focus:ring-[#D4AF37]/20 focus:outline-none"
                                                placeholder="Company or organization name"
                                            />
                                            {errors.organization && (
                                                <p className="mt-2 flex items-center gap-1 text-sm text-[#C62828]">
                                                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                                    </svg>
                                                    {errors.organization}
                                                </p>
                                            )}
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="designation"
                                                className="block text-sm font-semibold text-gray-800"
                                            >
                                                Designation
                                            </label>
                                            <input
                                                id="designation"
                                                type="text"
                                                value={data.designation}
                                                onChange={(e) => setData('designation', e.target.value)}
                                                className="mt-2 block w-full rounded-xl border-2 border-gray-200 bg-white/60 px-4 py-3 text-gray-900 placeholder-gray-500 backdrop-blur-sm transition-all focus:border-[#D4AF37] focus:bg-white focus:ring-2 focus:ring-[#D4AF37]/20 focus:outline-none"
                                                placeholder="Your role or title"
                                            />
                                            {errors.designation && (
                                                <p className="mt-2 flex items-center gap-1 text-sm text-[#C62828]">
                                                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                                    </svg>
                                                    {errors.designation}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Disclaimer */}
                                <div className="glass rounded-2xl border-2 border-[#D4AF37]/40 p-6">
                                    <div className="flex items-start gap-3">
                                        <input
                                            id="disclaimer_accepted"
                                            type="checkbox"
                                            checked={data.disclaimer_accepted}
                                            onChange={(e) => setData('disclaimer_accepted', e.target.checked)}
                                            className="mt-1 h-5 w-5 rounded border-gray-300 text-[#E65C2E] focus:ring-2 focus:ring-[#E65C2E]/20"
                                            required
                                        />
                                        <label htmlFor="disclaimer_accepted" className="text-sm text-gray-700">
                                            I confirm that the information provided is accurate and I agree to receive
                                            event updates and communications regarding ÒRÌKÌ Royal Dining Experience.
                                        </label>
                                    </div>
                                    {errors.disclaimer_accepted && (
                                        <p className="mt-2 flex items-center gap-1 text-sm text-[#C62828]">
                                            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                            </svg>
                                            {errors.disclaimer_accepted}
                                        </p>
                                    )}
                                </div>

                                {/* Submit Button */}
                                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6">
                                    <Link
                                        href="/"
                                        className="text-sm font-semibold text-gray-700 hover:text-[#E65C2E] transition-colors"
                                    >
                                        ← Back to Home
                                    </Link>
                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="group relative inline-flex items-center gap-3 overflow-hidden rounded-xl bg-gradient-to-r from-[#E65C2E] via-[#D4AF37] to-[#C62828] px-10 py-4 text-lg font-bold text-white shadow-2xl shadow-[#E65C2E]/30 transition-all hover:scale-105 hover:shadow-[#E65C2E]/50 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {processing ? (
                                            <>
                                                <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                <span>Processing...</span>
                                            </>
                                        ) : (
                                            <>
                                                <span>{registration ? 'Complete Registration' : 'Submit Registration'}</span>
                                                <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                                </svg>
                                            </>
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>

                        {/* Help Text */}
                        <p className="mt-8 text-center text-sm text-gray-600">
                            Need help? Contact us at{' '}
                            <a href="mailto:info@tastesofculture.ng" className="font-semibold text-[#E65C2E] hover:text-[#C62828]">
                                info@tastesofculture.ng
                            </a>
                        </p>
                    </div>
                </div>
            </Layout>
        </>
    );
}
