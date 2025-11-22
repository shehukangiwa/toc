import { Head, Link, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';
import Layout from '@/components/Layout';

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
            <Head title="Register - ÒRÌKÌ 2025" />
            <div className="min-h-screen bg-white">
                <div className="w-full px-4 py-8 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl">
                        {/* Header */}
                        <div className="mb-8 text-center">
                            <Link href="/" className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-[#E65C2E] mb-6 transition-colors">
                                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                </svg>
                                Back to Home
                            </Link>
                            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#E65C2E] to-[#C62828] shadow-lg">
                                <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                </svg>
                            </div>
                            <h1 className="mb-2 text-3xl font-black text-gray-900 sm:text-4xl">
                                Event Registration
                            </h1>
                            <p className="text-sm text-gray-600">
                                {registration ? 'Complete your registration for ÒRÌKÌ 2025' : 'Reserve your spot for the royal dining experience'}
                            </p>
                        </div>

                        {/* Form Card */}
                        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg sm:p-8">
                            <form onSubmit={submit} className="space-y-6">
                                {/* Personal Information Section */}
                                <div>
                                    <h2 className="mb-4 flex items-center gap-2 text-lg font-bold text-gray-900">
                                        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#E65C2E] text-white">
                                            <span className="text-sm font-bold">1</span>
                                        </div>
                                        Personal Information
                                    </h2>

                                    <div className="grid gap-4 sm:grid-cols-3">
                                        <div>
                                            <label
                                                htmlFor="first_name"
                                                className="block text-sm font-medium text-gray-700 mb-1"
                                            >
                                                First Name <span className="text-[#E65C2E]">*</span>
                                            </label>
                                            <input
                                                id="first_name"
                                                type="text"
                                                value={data.first_name}
                                                onChange={(e) => setData('first_name', e.target.value)}
                                                className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 transition-all focus:border-[#E65C2E] focus:ring-2 focus:ring-[#E65C2E]/20"
                                                placeholder="First name"
                                                required
                                            />
                                            {errors.first_name && (
                                                <p className="mt-1 flex items-center gap-1 text-sm text-red-600">
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
                                                className="block text-sm font-medium text-gray-700 mb-1"
                                            >
                                                Second Name <span className="text-[#E65C2E]">*</span>
                                            </label>
                                            <input
                                                id="second_name"
                                                type="text"
                                                value={data.second_name}
                                                onChange={(e) => setData('second_name', e.target.value)}
                                                className="mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 transition-all focus:border-[#E65C2E] focus:ring-2 focus:ring-[#E65C2E]/20"
                                                placeholder="Enter second name"
                                                required
                                            />
                                            {errors.second_name && (
                                                <p className="mt-2 flex items-center gap-1 text-sm text-[#E65C2E]">
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
                                                className="block text-sm font-medium text-gray-700 mb-1"
                                            >
                                                Last Name <span className="text-[#E65C2E]">*</span>
                                            </label>
                                            <input
                                                id="last_name"
                                                type="text"
                                                value={data.last_name}
                                                onChange={(e) => setData('last_name', e.target.value)}
                                                className="mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 transition-all focus:border-[#E65C2E] focus:ring-2 focus:ring-[#E65C2E]/20"
                                                placeholder="Enter last name"
                                                required
                                            />
                                            {errors.last_name && (
                                                <p className="mt-2 flex items-center gap-1 text-sm text-[#E65C2E]">
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
                                    <h2 className="mb-6 flex items-center gap-3 text-lg font-bold text-gray-900">
                                        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br bg-[#D4AF37]">
                                            <span className="text-lg font-bold">2</span>
                                        </div>
                                        Contact Details
                                    </h2>

                                    <div className="space-y-6">
                                        <div className="grid gap-6 sm:grid-cols-2">
                                            <div>
                                                <label
                                                    htmlFor="email"
                                                    className="block text-sm font-medium text-gray-700 mb-1"
                                                >
                                                    Email Address <span className="text-[#E65C2E]">*</span>
                                                </label>
                                                <div className="relative">
                                                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                                        <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                        </svg>
                                                    </div>
                                                    <input
                                                        id="email"
                                                        type="email"
                                                        value={data.email}
                                                        onChange={(e) => setData('email', e.target.value)}
                                                        className="block w-full rounded-lg border border-gray-300 py-2 pl-10 pr-3 text-gray-900 placeholder-gray-400 transition-all focus:border-[#E65C2E] focus:ring-2 focus:ring-[#E65C2E]/20 disabled:cursor-not-allowed disabled:opacity-50"
                                                        placeholder="your@email.com"
                                                        required
                                                        disabled={!!registration}
                                                    />
                                                </div>
                                                {errors.email && (
                                                    <p className="mt-2 flex items-center gap-1 text-sm text-[#E65C2E]">
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
                                                    className="block text-sm font-medium text-gray-700 mb-1"
                                                >
                                                    Phone Number <span className="text-[#E65C2E]">*</span>
                                                </label>
                                                <div className="relative">
                                                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                                        <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                        </svg>
                                                    </div>
                                                    <input
                                                        id="phone_number"
                                                        type="tel"
                                                        value={data.phone_number}
                                                        onChange={(e) => setData('phone_number', e.target.value)}
                                                        className="block w-full rounded-lg border border-gray-300 py-2 pl-10 pr-3 text-gray-900 placeholder-gray-400 transition-all focus:border-[#E65C2E] focus:ring-2 focus:ring-[#E65C2E]/20"
                                                        placeholder="+234 800 000 0000"
                                                        required
                                                    />
                                                </div>
                                                {errors.phone_number && (
                                                    <p className="mt-2 flex items-center gap-1 text-sm text-[#E65C2E]">
                                                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                                                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                                        </svg>
                                                        {errors.phone_number}
                                                    </p>
                                                )}
                                            </div>
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="address"
                                                className="block text-sm font-medium text-gray-700 mb-1"
                                            >
                                                Address <span className="text-[#E65C2E]">*</span>
                                            </label>
                                            <textarea
                                                id="address"
                                                value={data.address}
                                                onChange={(e) => setData('address', e.target.value)}
                                                rows={3}
                                                className="mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 transition-all focus:border-[#E65C2E] focus:ring-2 focus:ring-[#E65C2E]/20"
                                                placeholder="Enter your full address"
                                                required
                                            />
                                            {errors.address && (
                                                <p className="mt-2 flex items-center gap-1 text-sm text-[#E65C2E]">
                                                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                                    </svg>
                                                    {errors.address}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Optional Information Section */}
                                <div>
                                    <h2 className="mb-6 flex items-center gap-3 text-lg font-bold text-gray-900">
                                        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br bg-[#1B5E20]">
                                            <span className="text-lg font-bold">3</span>
                                        </div>
                                        Professional Details
                                        <span className="text-sm font-normal text-gray-400">(Optional)</span>
                                    </h2>

                                    <div className="grid gap-6 sm:grid-cols-2">
                                        <div>
                                            <label
                                                htmlFor="organization"
                                                className="block text-sm font-medium text-gray-700 mb-1"
                                            >
                                                Organization
                                            </label>
                                            <input
                                                id="organization"
                                                type="text"
                                                value={data.organization}
                                                onChange={(e) => setData('organization', e.target.value)}
                                                className="mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 transition-all focus:border-[#E65C2E] focus:ring-2 focus:ring-[#E65C2E]/20"
                                                placeholder="Your organization"
                                            />
                                            {errors.organization && (
                                                <p className="mt-2 flex items-center gap-1 text-sm text-[#E65C2E]">
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
                                                className="block text-sm font-medium text-gray-700 mb-1"
                                            >
                                                Designation
                                            </label>
                                            <input
                                                id="designation"
                                                type="text"
                                                value={data.designation}
                                                onChange={(e) => setData('designation', e.target.value)}
                                                className="mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 transition-all focus:border-[#E65C2E] focus:ring-2 focus:ring-[#E65C2E]/20"
                                                placeholder="Your role/title"
                                            />
                                            {errors.designation && (
                                                <p className="mt-2 flex items-center gap-1 text-sm text-[#E65C2E]">
                                                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                                    </svg>
                                                    {errors.designation}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Terms and Conditions */}
                                <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                                    <div className="flex items-start gap-3">
                                        <div className="flex h-5 items-center pt-0.5">
                                            <input
                                                id="disclaimer_accepted"
                                                type="checkbox"
                                                checked={data.disclaimer_accepted}
                                                onChange={(e) =>
                                                    setData('disclaimer_accepted', e.target.checked)
                                                }
                                                className="h-4 w-4 rounded border-gray-300 text-[#E65C2E] transition-all focus:ring-2 focus:ring-[#E65C2E]/20"
                                                required
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <label
                                                htmlFor="disclaimer_accepted"
                                                className="text-sm font-medium text-gray-900"
                                            >
                                                I accept the terms and conditions{' '}
                                                <span className="text-[#E65C2E]">*</span>
                                            </label>
                                            <p className="mt-1 text-xs leading-relaxed text-gray-600">
                                                By registering for this event, I understand that my
                                                information will be used solely for event communication and
                                                management purposes. I consent to receive updates about
                                                ÒRÌKÌ 2025: The Royal Dining Experience via email.
                                            </p>
                                        </div>
                                    </div>
                                    {errors.disclaimer_accepted && (
                                        <p className="mt-3 flex items-center gap-1 text-sm text-[#E65C2E]">
                                            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                            </svg>
                                            {errors.disclaimer_accepted}
                                        </p>
                                    )}
                                </div>

                                {/* Form Actions */}
                                <div className="flex flex-col-reverse gap-3 pt-2 sm:flex-row sm:justify-end">
                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#E65C2E] to-[#C62828] px-8 py-3 text-base font-bold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:hover:scale-100"
                                    >
                                        {processing ? (
                                            <>
                                                <svg className="h-5 w-5 animate-spin" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Processing...
                                            </>
                                        ) : (
                                            <>
                                                {registration ? 'Complete Registration' : 'Submit Registration'}
                                                <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                                </svg>
                                            </>
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
