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
            <Head title="Register - Oriki" />
            <Layout>
                <div className="w-full px-4 py-12 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-4xl">
                        {/* Header */}
                        <div className="mb-12 animate-slide-up text-center">
                            <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500 via-pink-500 to-purple-500 shadow-2xl">
                                <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                </svg>
                            </div>
                            <h1 className="mb-4 text-5xl font-bold text-white">
                                Event Registration
                            </h1>
                            <p className="text-xl text-gray-300">
                                {registration ? 'Complete your registration for Oriki' : 'Reserve your seat for the royal dining experience'}
                            </p>
                        </div>

                        {/* Form Card */}
                        <div className="animate-slide-up glass-dark rounded-3xl p-8 shadow-2xl sm:p-12" style={{ animationDelay: '0.1s' }}>
                            <form onSubmit={submit} className="space-y-8">
                                {/* Personal Information Section */}
                                <div>
                                    <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold text-white">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-pink-500">
                                            <span className="text-lg font-bold">1</span>
                                        </div>
                                        Personal Information
                                    </h2>

                                    <div className="grid gap-6 sm:grid-cols-3">
                                        <div>
                                            <label
                                                htmlFor="first_name"
                                                className="block text-sm font-semibold text-gray-200"
                                            >
                                                First Name <span className="text-pink-400">*</span>
                                            </label>
                                            <input
                                                id="first_name"
                                                type="text"
                                                value={data.first_name}
                                                onChange={(e) => setData('first_name', e.target.value)}
                                                className="mt-2 block w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-gray-400 backdrop-blur-sm transition-all focus:border-amber-500 focus:bg-white/10 focus:ring-2 focus:ring-amber-500/50"
                                                placeholder="Enter first name"
                                                required
                                            />
                                            {errors.first_name && (
                                                <p className="mt-2 flex items-center gap-1 text-sm text-pink-400">
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
                                                className="block text-sm font-semibold text-gray-200"
                                            >
                                                Second Name <span className="text-pink-400">*</span>
                                            </label>
                                            <input
                                                id="second_name"
                                                type="text"
                                                value={data.second_name}
                                                onChange={(e) => setData('second_name', e.target.value)}
                                                className="mt-2 block w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-gray-400 backdrop-blur-sm transition-all focus:border-amber-500 focus:bg-white/10 focus:ring-2 focus:ring-amber-500/50"
                                                placeholder="Enter second name"
                                                required
                                            />
                                            {errors.second_name && (
                                                <p className="mt-2 flex items-center gap-1 text-sm text-pink-400">
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
                                                className="block text-sm font-semibold text-gray-200"
                                            >
                                                Last Name <span className="text-pink-400">*</span>
                                            </label>
                                            <input
                                                id="last_name"
                                                type="text"
                                                value={data.last_name}
                                                onChange={(e) => setData('last_name', e.target.value)}
                                                className="mt-2 block w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-gray-400 backdrop-blur-sm transition-all focus:border-amber-500 focus:bg-white/10 focus:ring-2 focus:ring-amber-500/50"
                                                placeholder="Enter last name"
                                                required
                                            />
                                            {errors.last_name && (
                                                <p className="mt-2 flex items-center gap-1 text-sm text-pink-400">
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
                                    <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold text-white">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 to-purple-500">
                                            <span className="text-lg font-bold">2</span>
                                        </div>
                                        Contact Details
                                    </h2>

                                    <div className="space-y-6">
                                        <div className="grid gap-6 sm:grid-cols-2">
                                            <div>
                                                <label
                                                    htmlFor="email"
                                                    className="block text-sm font-semibold text-gray-200"
                                                >
                                                    Email Address <span className="text-pink-400">*</span>
                                                </label>
                                                <div className="relative mt-2">
                                                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                                                        <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                        </svg>
                                                    </div>
                                                    <input
                                                        id="email"
                                                        type="email"
                                                        value={data.email}
                                                        onChange={(e) => setData('email', e.target.value)}
                                                        className="block w-full rounded-xl border border-white/20 bg-white/5 py-3 pl-12 pr-4 text-white placeholder-gray-400 backdrop-blur-sm transition-all focus:border-amber-500 focus:bg-white/10 focus:ring-2 focus:ring-amber-500/50 disabled:cursor-not-allowed disabled:opacity-50"
                                                        placeholder="your@email.com"
                                                        required
                                                        disabled={!!registration}
                                                    />
                                                </div>
                                                {errors.email && (
                                                    <p className="mt-2 flex items-center gap-1 text-sm text-pink-400">
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
                                                    className="block text-sm font-semibold text-gray-200"
                                                >
                                                    Phone Number <span className="text-pink-400">*</span>
                                                </label>
                                                <div className="relative mt-2">
                                                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                                                        <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                        </svg>
                                                    </div>
                                                    <input
                                                        id="phone_number"
                                                        type="tel"
                                                        value={data.phone_number}
                                                        onChange={(e) => setData('phone_number', e.target.value)}
                                                        className="block w-full rounded-xl border border-white/20 bg-white/5 py-3 pl-12 pr-4 text-white placeholder-gray-400 backdrop-blur-sm transition-all focus:border-amber-500 focus:bg-white/10 focus:ring-2 focus:ring-amber-500/50"
                                                        placeholder="+1 (555) 000-0000"
                                                        required
                                                    />
                                                </div>
                                                {errors.phone_number && (
                                                    <p className="mt-2 flex items-center gap-1 text-sm text-pink-400">
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
                                                className="block text-sm font-semibold text-gray-200"
                                            >
                                                Address <span className="text-pink-400">*</span>
                                            </label>
                                            <textarea
                                                id="address"
                                                value={data.address}
                                                onChange={(e) => setData('address', e.target.value)}
                                                rows={3}
                                                className="mt-2 block w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-gray-400 backdrop-blur-sm transition-all focus:border-amber-500 focus:bg-white/10 focus:ring-2 focus:ring-amber-500/50"
                                                placeholder="Enter your full address"
                                                required
                                            />
                                            {errors.address && (
                                                <p className="mt-2 flex items-center gap-1 text-sm text-pink-400">
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
                                    <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold text-white">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-blue-500">
                                            <span className="text-lg font-bold">3</span>
                                        </div>
                                        Professional Details
                                        <span className="text-sm font-normal text-gray-400">(Optional)</span>
                                    </h2>

                                    <div className="grid gap-6 sm:grid-cols-2">
                                        <div>
                                            <label
                                                htmlFor="organization"
                                                className="block text-sm font-semibold text-gray-200"
                                            >
                                                Organization
                                            </label>
                                            <input
                                                id="organization"
                                                type="text"
                                                value={data.organization}
                                                onChange={(e) => setData('organization', e.target.value)}
                                                className="mt-2 block w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-gray-400 backdrop-blur-sm transition-all focus:border-amber-500 focus:bg-white/10 focus:ring-2 focus:ring-amber-500/50"
                                                placeholder="Your organization"
                                            />
                                            {errors.organization && (
                                                <p className="mt-2 flex items-center gap-1 text-sm text-pink-400">
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
                                                className="block text-sm font-semibold text-gray-200"
                                            >
                                                Designation
                                            </label>
                                            <input
                                                id="designation"
                                                type="text"
                                                value={data.designation}
                                                onChange={(e) => setData('designation', e.target.value)}
                                                className="mt-2 block w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-gray-400 backdrop-blur-sm transition-all focus:border-amber-500 focus:bg-white/10 focus:ring-2 focus:ring-amber-500/50"
                                                placeholder="Your role/title"
                                            />
                                            {errors.designation && (
                                                <p className="mt-2 flex items-center gap-1 text-sm text-pink-400">
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
                                <div className="rounded-2xl border border-amber-500/30 bg-gradient-to-br from-amber-500/10 to-pink-500/10 p-6 backdrop-blur-sm">
                                    <div className="flex items-start gap-4">
                                        <div className="flex h-6 items-center">
                                            <input
                                                id="disclaimer_accepted"
                                                type="checkbox"
                                                checked={data.disclaimer_accepted}
                                                onChange={(e) =>
                                                    setData('disclaimer_accepted', e.target.checked)
                                                }
                                                className="h-5 w-5 rounded-lg border-2 border-amber-500/50 bg-white/10 text-amber-500 transition-all focus:ring-2 focus:ring-amber-500/50 focus:ring-offset-0"
                                                required
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <label
                                                htmlFor="disclaimer_accepted"
                                                className="font-semibold text-white"
                                            >
                                                I accept the terms and conditions{' '}
                                                <span className="text-pink-400">*</span>
                                            </label>
                                            <p className="mt-2 text-sm leading-relaxed text-gray-300">
                                                By registering for this event, I understand that my
                                                information will be used solely for event communication and
                                                management purposes. I consent to receive updates about
                                                Oriki: The Royal Dining Experience via email.
                                            </p>
                                        </div>
                                    </div>
                                    {errors.disclaimer_accepted && (
                                        <p className="mt-3 flex items-center gap-1 text-sm text-pink-400">
                                            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                            </svg>
                                            {errors.disclaimer_accepted}
                                        </p>
                                    )}
                                </div>

                                {/* Form Actions */}
                                <div className="flex flex-col-reverse items-center gap-4 pt-4 sm:flex-row sm:justify-between">
                                    <Link
                                        href="/"
                                        className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/20"
                                    >
                                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                        </svg>
                                        Back to Home
                                    </Link>
                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-amber-500 via-pink-500 to-purple-500 px-8 py-4 text-base font-semibold text-white shadow-2xl transition-all hover:scale-105 hover:shadow-pink-500/50 disabled:opacity-50 disabled:hover:scale-100"
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
            </Layout>
        </>
    );
}
