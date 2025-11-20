import { Head, Link, usePage } from '@inertiajs/react';

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
            <div className="flex min-h-screen flex-col bg-gradient-to-br from-amber-50 to-orange-100 dark:from-gray-900 dark:to-gray-800">
                <nav className="border-b border-amber-200/50 bg-white/80 backdrop-blur-sm dark:border-gray-700 dark:bg-gray-900/80">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="flex h-16 items-center justify-between">
                            <Link href="/" className="flex items-center">
                                <h2 className="text-xl font-bold text-amber-600 dark:text-amber-400">
                                    Oriki
                                </h2>
                            </Link>
                        </div>
                    </div>
                </nav>

                <main className="flex flex-1 items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
                    <div className="w-full max-w-2xl">
                        <div className="rounded-lg bg-white px-8 py-10 text-center shadow-xl dark:bg-gray-800">
                            {flash?.success && (
                                <div className="mb-6 rounded-lg border border-green-200 bg-green-50 p-4 dark:border-green-800 dark:bg-green-900/20">
                                    <p className="text-sm font-medium text-green-800 dark:text-green-300">
                                        {flash.success}
                                    </p>
                                </div>
                            )}

                            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
                                <svg
                                    className="h-12 w-12 text-green-600 dark:text-green-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                            </div>

                            <h1 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
                                Registration Complete!
                            </h1>

                            <p className="mb-8 text-lg text-gray-600 dark:text-gray-300">
                                Thank you for registering for Oriki: The Royal Dining Experience
                            </p>

                            <div className="mb-8 space-y-4 rounded-lg border border-amber-200 bg-amber-50 p-6 text-left dark:border-amber-800 dark:bg-amber-900/20">
                                <div className="flex items-start">
                                    <svg
                                        className="mr-3 h-6 w-6 flex-shrink-0 text-amber-600 dark:text-amber-400"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        />
                                    </svg>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 dark:text-white">
                                            Check Your Email
                                        </h3>
                                        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                                            A confirmation email has been sent to{' '}
                                            <span className="font-medium text-amber-600 dark:text-amber-400">
                                                {registration.email}
                                            </span>
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <svg
                                        className="mr-3 h-6 w-6 flex-shrink-0 text-amber-600 dark:text-amber-400"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 dark:text-white">
                                            What's Next?
                                        </h3>
                                        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                                            Further details about the event, including venue, time, and
                                            other important information will be communicated to you shortly.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <svg
                                        className="mr-3 h-6 w-6 flex-shrink-0 text-amber-600 dark:text-amber-400"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 dark:text-white">
                                            Stay Updated
                                        </h3>
                                        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                                            Please keep an eye on your email for updates and announcements
                                            about Oriki: The Royal Dining Experience.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4 rounded-lg border border-gray-200 bg-gray-50 p-6 text-left dark:border-gray-700 dark:bg-gray-900/50">
                                <h3 className="font-semibold text-gray-900 dark:text-white">
                                    Your Registration Details
                                </h3>
                                <dl className="space-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <dt className="text-gray-600 dark:text-gray-400">Name:</dt>
                                        <dd className="font-medium text-gray-900 dark:text-white">
                                            {registration.first_name} {registration.second_name}{' '}
                                            {registration.last_name}
                                        </dd>
                                    </div>
                                    <div className="flex justify-between">
                                        <dt className="text-gray-600 dark:text-gray-400">Email:</dt>
                                        <dd className="font-medium text-gray-900 dark:text-white">
                                            {registration.email}
                                        </dd>
                                    </div>
                                    <div className="flex justify-between">
                                        <dt className="text-gray-600 dark:text-gray-400">Phone:</dt>
                                        <dd className="font-medium text-gray-900 dark:text-white">
                                            {registration.phone_number}
                                        </dd>
                                    </div>
                                    {registration.organization && (
                                        <div className="flex justify-between">
                                            <dt className="text-gray-600 dark:text-gray-400">
                                                Organization:
                                            </dt>
                                            <dd className="font-medium text-gray-900 dark:text-white">
                                                {registration.organization}
                                            </dd>
                                        </div>
                                    )}
                                    {registration.designation && (
                                        <div className="flex justify-between">
                                            <dt className="text-gray-600 dark:text-gray-400">
                                                Designation:
                                            </dt>
                                            <dd className="font-medium text-gray-900 dark:text-white">
                                                {registration.designation}
                                            </dd>
                                        </div>
                                    )}
                                </dl>
                            </div>

                            <div className="mt-8">
                                <Link
                                    href="/"
                                    className="inline-flex items-center rounded-lg bg-amber-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition-all hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 dark:bg-amber-500 dark:hover:bg-amber-600"
                                >
                                    <svg
                                        className="mr-2 h-5 w-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M10 19l-7-7m0 0l7-7m-7 7h18"
                                        />
                                    </svg>
                                    Return to Home
                                </Link>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}
