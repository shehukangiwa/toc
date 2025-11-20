import { Head, Link, usePage } from '@inertiajs/react';
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
    registration_completed: boolean;
}

export default function RegistrationComplete({ registration }: { registration: Registration }) {
    const { flash } = usePage().props as any;

    return (
        <>
            <Head title="Registration Complete - Oriki" />
            <Layout showNav={false} showFooter={false}>
                <div className="w-full px-4 py-12 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-4xl">
                        {/* Success Animation Container */}
                        <div className="animate-slide-up text-center">
                            {/* Celebration Icon with Glow */}
                            <div className="relative mx-auto mb-8 inline-block">
                                <div className="absolute inset-0 animate-ping rounded-full bg-gradient-to-r from-green-500 to-emerald-500 opacity-75"></div>
                                <div className="relative flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-emerald-500 shadow-2xl">
                                    <svg className="h-16 w-16 animate-bounce text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                            </div>

                            {/* Success Flash Message */}
                            {flash?.success && (
                                <div className="mx-auto mb-8 max-w-2xl animate-slide-up rounded-2xl border border-green-500/30 bg-gradient-to-br from-green-500/20 to-emerald-500/20 p-6 backdrop-blur-sm" style={{ animationDelay: '0.1s' }}>
                                    <p className="text-lg font-semibold text-white">
                                        {flash.success}
                                    </p>
                                </div>
                            )}

                            {/* Main Heading */}
                            <h1 className="mb-6 bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-6xl font-extrabold text-transparent sm:text-7xl">
                                Success!
                            </h1>

                            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
                                Registration Complete
                            </h2>

                            <p className="mb-12 text-xl text-gray-300">
                                Welcome to Oriki: The Royal Dining Experience
                            </p>
                        </div>

                        {/* Information Cards Grid */}
                        <div className="mb-12 grid gap-6 md:grid-cols-3">
                            {/* Email Sent Card */}
                            <div className="animate-slide-up glass-dark group rounded-2xl p-6 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20" style={{ animationDelay: '0.2s' }}>
                                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 shadow-lg">
                                    <svg className="h-7 w-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <h3 className="mb-2 text-xl font-bold text-white">
                                    Check Your Email
                                </h3>
                                <p className="text-sm leading-relaxed text-gray-300">
                                    A confirmation email has been sent to{' '}
                                    <span className="font-semibold text-green-400">
                                        {registration.email}
                                    </span>
                                </p>
                            </div>

                            {/* What's Next Card */}
                            <div className="animate-slide-up glass-dark group rounded-2xl p-6 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/20" style={{ animationDelay: '0.3s' }}>
                                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 shadow-lg">
                                    <svg className="h-7 w-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="mb-2 text-xl font-bold text-white">
                                    What's Next?
                                </h3>
                                <p className="text-sm leading-relaxed text-gray-300">
                                    Event details including venue, time, and important information will be shared soon.
                                </p>
                            </div>

                            {/* Stay Updated Card */}
                            <div className="animate-slide-up glass-dark group rounded-2xl p-6 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/20" style={{ animationDelay: '0.4s' }}>
                                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 to-cyan-500 shadow-lg">
                                    <svg className="h-7 w-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                    </svg>
                                </div>
                                <h3 className="mb-2 text-xl font-bold text-white">
                                    Stay Updated
                                </h3>
                                <p className="text-sm leading-relaxed text-gray-300">
                                    Keep an eye on your inbox for updates and announcements about the experience.
                                </p>
                            </div>
                        </div>

                        {/* Registration Details Card */}
                        <div className="animate-slide-up glass-dark mb-12 overflow-hidden rounded-3xl" style={{ animationDelay: '0.5s' }}>
                            <div className="border-b border-white/10 bg-gradient-to-r from-green-500/20 via-yellow-500/20 to-emerald-500/20 px-8 py-6">
                                <h3 className="flex items-center gap-3 text-2xl font-bold text-white">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-green-600 to-yellow-500">
                                        <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg>
                                    </div>
                                    Your Registration Details
                                </h3>
                            </div>
                            <div className="p-8">
                                <dl className="grid gap-6 sm:grid-cols-2">
                                    <div className="group">
                                        <dt className="mb-2 text-sm font-semibold uppercase tracking-wide text-gray-400">
                                            Full Name
                                        </dt>
                                        <dd className="flex items-center gap-2 text-lg font-semibold text-white">
                                            <svg className="h-5 w-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                            </svg>
                                            {registration.first_name} {registration.second_name} {registration.last_name}
                                        </dd>
                                    </div>

                                    <div className="group">
                                        <dt className="mb-2 text-sm font-semibold uppercase tracking-wide text-gray-400">
                                            Email Address
                                        </dt>
                                        <dd className="flex items-center gap-2 text-lg font-semibold text-white">
                                            <svg className="h-5 w-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                            {registration.email}
                                        </dd>
                                    </div>

                                    <div className="group">
                                        <dt className="mb-2 text-sm font-semibold uppercase tracking-wide text-gray-400">
                                            Phone Number
                                        </dt>
                                        <dd className="flex items-center gap-2 text-lg font-semibold text-white">
                                            <svg className="h-5 w-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                            {registration.phone_number}
                                        </dd>
                                    </div>

                                    <div className="group">
                                        <dt className="mb-2 text-sm font-semibold uppercase tracking-wide text-gray-400">
                                            Address
                                        </dt>
                                        <dd className="flex items-start gap-2 text-lg font-semibold text-white">
                                            <svg className="mt-1 h-5 w-5 flex-shrink-0 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                            <span className="break-words">{registration.address}</span>
                                        </dd>
                                    </div>

                                    {registration.organization && (
                                        <div className="group">
                                            <dt className="mb-2 text-sm font-semibold uppercase tracking-wide text-gray-400">
                                                Organization
                                            </dt>
                                            <dd className="flex items-center gap-2 text-lg font-semibold text-white">
                                                <svg className="h-5 w-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                                </svg>
                                                {registration.organization}
                                            </dd>
                                        </div>
                                    )}

                                    {registration.designation && (
                                        <div className="group">
                                            <dt className="mb-2 text-sm font-semibold uppercase tracking-wide text-gray-400">
                                                Designation
                                            </dt>
                                            <dd className="flex items-center gap-2 text-lg font-semibold text-white">
                                                <svg className="h-5 w-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                                {registration.designation}
                                            </dd>
                                        </div>
                                    )}
                                </dl>
                            </div>
                        </div>

                        {/* Call to Action */}
                        <div className="animate-slide-up text-center" style={{ animationDelay: '0.6s' }}>
                            <Link
                                href="/"
                                className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-green-600 via-yellow-500 to-emerald-600 px-10 py-5 text-lg font-semibold text-white shadow-2xl transition-all hover:scale-105 hover:shadow-green-500/50"
                            >
                                <svg className="h-6 w-6 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                </svg>
                                Return to Home
                            </Link>
                            <p className="mt-4 text-sm text-gray-400">
                                We look forward to seeing you at the event!
                            </p>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}
