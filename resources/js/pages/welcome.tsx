import { Head, Link } from '@inertiajs/react';
import { useState, useEffect } from 'react';

export default function Welcome() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <>
            <Head title="Oriki: The Royal Dining Experience" />

            {/* Background with animated gradient */}
            <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-amber-950/20 to-slate-900">
                {/* Animated background patterns */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-amber-500 opacity-20 blur-[100px]"></div>
                <div className="absolute bottom-0 right-0 -z-10 h-[310px] w-[310px] rounded-full bg-orange-500 opacity-20 blur-[100px]"></div>

                {/* Navigation */}
                <nav className="relative border-b border-white/5 bg-slate-900/50 backdrop-blur-xl">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="flex h-20 items-center justify-between">
                            <div className="flex items-center space-x-3">
                                <div className="relative h-10 w-10 overflow-hidden rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 p-[2px]">
                                    <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-slate-900">
                                        <span className="text-lg font-bold text-amber-500">O</span>
                                    </div>
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold tracking-tight text-white">
                                        Oriki
                                    </h2>
                                    <p className="text-xs text-amber-400/70">Royal Gastronomy</p>
                                </div>
                            </div>
                            <div>
                                <Link
                                    href="/register"
                                    className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-amber-500 to-orange-600 px-6 py-3 font-semibold text-white shadow-lg shadow-amber-500/25 transition-all hover:shadow-xl hover:shadow-amber-500/40 hover:scale-105"
                                >
                                    <span className="relative z-10">Register Now</span>
                                    <svg className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                    <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-amber-500 opacity-0 transition-opacity group-hover:opacity-100"></div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </nav>

                <main className="flex flex-1 items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
                    <div className="w-full max-w-4xl text-center">
                        <div className="mb-8">
                            <h1 className="mb-4 text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl md:text-7xl dark:text-white">
                                <span className="block">Oriki</span>
                                <span className="block text-3xl text-amber-600 sm:text-4xl md:text-5xl dark:text-amber-400">
                                    The Royal Dining Experience
                                </span>
                            </h1>
                            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 sm:text-xl dark:text-gray-300">
                                Join us for an extraordinary gastronomy event celebrating the rich traditions
                                and exquisite flavors of royal cuisine. An unforgettable culinary journey awaits.
                            </p>
                        </div>

                        <div className="mb-12 grid gap-8 sm:grid-cols-3">
                            <div className="rounded-lg bg-white p-6 shadow-md transition-all hover:shadow-lg dark:bg-gray-800">
                                <div className="mb-3 flex justify-center">
                                    <svg
                                        className="h-12 w-12 text-amber-600 dark:text-amber-400"
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
                                </div>
                                <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                                    Limited Seating
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-300">
                                    Exclusive event with limited seats available
                                </p>
                            </div>

                            <div className="rounded-lg bg-white p-6 shadow-md transition-all hover:shadow-lg dark:bg-gray-800">
                                <div className="mb-3 flex justify-center">
                                    <svg
                                        className="h-12 w-12 text-amber-600 dark:text-amber-400"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                                        />
                                    </svg>
                                </div>
                                <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                                    Royal Cuisine
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-300">
                                    Experience authentic royal gastronomy
                                </p>
                            </div>

                            <div className="rounded-lg bg-white p-6 shadow-md transition-all hover:shadow-lg dark:bg-gray-800">
                                <div className="mb-3 flex justify-center">
                                    <svg
                                        className="h-12 w-12 text-amber-600 dark:text-amber-400"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                        />
                                    </svg>
                                </div>
                                <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                                    Cultural Experience
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-300">
                                    Immerse yourself in rich traditions
                                </p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <Link
                                href="/register"
                                className="inline-flex items-center rounded-lg bg-amber-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-amber-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 dark:bg-amber-500 dark:hover:bg-amber-600"
                            >
                                Register for Oriki
                                <svg
                                    className="ml-2 h-5 w-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                                    />
                                </svg>
                            </Link>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                Secure your spot at this exclusive gastronomy event
                            </p>
                        </div>
                    </div>
                </main>

                <footer className="border-t border-amber-200/50 bg-white/80 backdrop-blur-sm py-6 dark:border-gray-700 dark:bg-gray-900/80">
                    <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            © {new Date().getFullYear()} Oriki: The Royal Dining Experience. All rights reserved.
                        </p>
                    </div>
                </footer>
            </div>
        </>
    );
}
