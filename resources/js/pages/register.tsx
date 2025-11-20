import { Head, Link, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';

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
                        <div className="rounded-lg bg-white px-8 py-10 shadow-xl dark:bg-gray-800">
                            <div className="mb-8 text-center">
                                <h1 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
                                    Event Registration
                                </h1>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Register for Oriki: The Royal Dining Experience
                                </p>
                            </div>

                            <form onSubmit={submit} className="space-y-6">
                                <div className="grid gap-6 sm:grid-cols-3">
                                    <div>
                                        <label
                                            htmlFor="first_name"
                                            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                                        >
                                            First Name <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            id="first_name"
                                            type="text"
                                            value={data.first_name}
                                            onChange={(e) => setData('first_name', e.target.value)}
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                                            required
                                        />
                                        {errors.first_name && (
                                            <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                                                {errors.first_name}
                                            </p>
                                        )}
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="second_name"
                                            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                                        >
                                            Second Name <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            id="second_name"
                                            type="text"
                                            value={data.second_name}
                                            onChange={(e) => setData('second_name', e.target.value)}
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                                            required
                                        />
                                        {errors.second_name && (
                                            <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                                                {errors.second_name}
                                            </p>
                                        )}
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="last_name"
                                            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                                        >
                                            Last Name <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            id="last_name"
                                            type="text"
                                            value={data.last_name}
                                            onChange={(e) => setData('last_name', e.target.value)}
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                                            required
                                        />
                                        {errors.last_name && (
                                            <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                                                {errors.last_name}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                <div className="grid gap-6 sm:grid-cols-2">
                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                                        >
                                            Email Address <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            id="email"
                                            type="email"
                                            value={data.email}
                                            onChange={(e) => setData('email', e.target.value)}
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                                            required
                                            disabled={!!registration}
                                        />
                                        {errors.email && (
                                            <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                                                {errors.email}
                                            </p>
                                        )}
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="phone_number"
                                            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                                        >
                                            Phone Number <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            id="phone_number"
                                            type="tel"
                                            value={data.phone_number}
                                            onChange={(e) => setData('phone_number', e.target.value)}
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                                            required
                                        />
                                        {errors.phone_number && (
                                            <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                                                {errors.phone_number}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="address"
                                        className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                                    >
                                        Address <span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        id="address"
                                        value={data.address}
                                        onChange={(e) => setData('address', e.target.value)}
                                        rows={3}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                                        required
                                    />
                                    {errors.address && (
                                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                                            {errors.address}
                                        </p>
                                    )}
                                </div>

                                <div className="grid gap-6 sm:grid-cols-2">
                                    <div>
                                        <label
                                            htmlFor="organization"
                                            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                                        >
                                            Organization (Optional)
                                        </label>
                                        <input
                                            id="organization"
                                            type="text"
                                            value={data.organization}
                                            onChange={(e) => setData('organization', e.target.value)}
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                                        />
                                        {errors.organization && (
                                            <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                                                {errors.organization}
                                            </p>
                                        )}
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="designation"
                                            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                                        >
                                            Designation (Optional)
                                        </label>
                                        <input
                                            id="designation"
                                            type="text"
                                            value={data.designation}
                                            onChange={(e) => setData('designation', e.target.value)}
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                                        />
                                        {errors.designation && (
                                            <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                                                {errors.designation}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 dark:border-amber-800 dark:bg-amber-900/20">
                                    <div className="flex items-start">
                                        <div className="flex h-5 items-center">
                                            <input
                                                id="disclaimer_accepted"
                                                type="checkbox"
                                                checked={data.disclaimer_accepted}
                                                onChange={(e) =>
                                                    setData('disclaimer_accepted', e.target.checked)
                                                }
                                                className="h-4 w-4 rounded border-gray-300 text-amber-600 focus:ring-amber-500"
                                                required
                                            />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label
                                                htmlFor="disclaimer_accepted"
                                                className="font-medium text-gray-700 dark:text-gray-300"
                                            >
                                                I accept the terms and conditions{' '}
                                                <span className="text-red-500">*</span>
                                            </label>
                                            <p className="mt-1 text-gray-600 dark:text-gray-400">
                                                By registering for this event, I understand that my
                                                information will be used solely for event communication and
                                                management purposes. I consent to receive updates about
                                                Oriki: The Royal Dining Experience via email.
                                            </p>
                                        </div>
                                    </div>
                                    {errors.disclaimer_accepted && (
                                        <p className="mt-2 text-sm text-red-600 dark:text-red-400">
                                            {errors.disclaimer_accepted}
                                        </p>
                                    )}
                                </div>

                                <div className="flex items-center justify-between gap-4">
                                    <Link
                                        href="/"
                                        className="text-sm font-medium text-amber-600 hover:text-amber-700 dark:text-amber-400 dark:hover:text-amber-300"
                                    >
                                        ← Back to Home
                                    </Link>
                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="rounded-lg bg-amber-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition-all hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 disabled:opacity-50 dark:bg-amber-500 dark:hover:bg-amber-600"
                                    >
                                        {processing ? 'Submitting...' : registration ? 'Complete Registration' : 'Submit Registration'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}
