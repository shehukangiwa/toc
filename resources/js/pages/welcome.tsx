import { Head, Link } from '@inertiajs/react';
import { useState, useEffect } from 'react';

export default function Welcome() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const flavors = [
        {
            name: 'FOOD',
            icon: '🍲',
            color: 'from-red-500 to-red-600',
            description: 'Authentic Nigerian cuisine',
            bgColor: 'bg-red-500/10',
            borderColor: 'border-red-500/20'
        },
        {
            name: 'LIFESTYLE',
            icon: '✨',
            color: 'from-orange-500 to-orange-600',
            description: 'Cultural elegance',
            bgColor: 'bg-orange-500/10',
            borderColor: 'border-orange-500/20'
        },
        {
            name: 'ARTS',
            icon: '🎨',
            color: 'from-amber-500 to-amber-600',
            description: 'Traditional craftsmanship',
            bgColor: 'bg-amber-500/10',
            borderColor: 'border-amber-500/20'
        },
        {
            name: 'VIBES',
            icon: '🎭',
            color: 'from-yellow-500 to-yellow-600',
            description: 'Energetic atmosphere',
            bgColor: 'bg-yellow-500/10',
            borderColor: 'border-yellow-500/20'
        },
        {
            name: 'ORIGINS',
            icon: '🌍',
            color: 'from-green-500 to-green-600',
            description: 'Heritage celebration',
            bgColor: 'bg-green-500/10',
            borderColor: 'border-green-500/20'
        },
        {
            name: 'ROOTS',
            icon: '🌳',
            color: 'from-emerald-500 to-emerald-600',
            description: 'Ancestral traditions',
            bgColor: 'bg-emerald-500/10',
            borderColor: 'border-emerald-500/20'
        },
        {
            name: 'SOUNDS',
            icon: '🥁',
            color: 'from-teal-500 to-teal-600',
            description: 'Live performances',
            bgColor: 'bg-teal-500/10',
            borderColor: 'border-teal-500/20'
        },
    ];

    return (
        <>
            <Head title="Tastes of Culture 2025 - ÒRÌKÌ" />

            <div className="relative min-h-screen overflow-hidden bg-slate-950">
                {/* Animated African pattern background */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.03) 35px, rgba(255,255,255,.03) 70px)`,
                    }}></div>
                </div>

                {/* Gradient orbs */}
                <div className="absolute left-1/4 top-0 -z-10 h-96 w-96 rounded-full bg-gradient-to-br from-orange-500/30 to-amber-500/30 blur-3xl"></div>
                <div className="absolute right-1/4 top-1/3 -z-10 h-96 w-96 rounded-full bg-gradient-to-br from-green-500/20 to-yellow-500/20 blur-3xl"></div>
                <div className="absolute bottom-0 left-1/2 -z-10 h-96 w-96 rounded-full bg-gradient-to-br from-red-500/20 to-orange-500/20 blur-3xl"></div>

                {/* Navigation */}
                <nav className="relative border-b border-white/10 bg-slate-900/80 backdrop-blur-xl">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="flex h-20 items-center justify-between">
                            <div className="flex items-center space-x-4">
                                {/* Logo with colorful blocks */}
                                <div className="flex items-center gap-1">
                                    <div className="h-10 w-3 rounded bg-orange-500"></div>
                                    <div className="h-12 w-3 rounded bg-green-500"></div>
                                    <div className="h-8 w-3 rounded bg-yellow-500"></div>
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold tracking-tight text-white">
                                        TASTES OF CULTURE
                                    </h2>
                                    <p className="text-xs font-semibold text-red-400">2025</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="hidden md:flex items-center gap-2 text-sm text-gray-300">
                                    <span className="text-amber-400">📍</span>
                                    <span>Eagle Square, Abuja</span>
                                </div>
                                <Link
                                    href="/register"
                                    className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-orange-500 via-amber-500 to-red-500 px-6 py-3 font-bold text-white shadow-lg shadow-orange-500/25 transition-all hover:shadow-xl hover:shadow-orange-500/40 hover:scale-105"
                                >
                                    <span className="relative z-10">Register Now</span>
                                    <svg className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </nav>

                {/* Hero Section */}
                <section className="relative px-4 py-20 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-7xl">
                        <div className={`text-center transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            {/* Event Badge */}
                            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-6 py-2 backdrop-blur-sm">
                                <span className="text-2xl">🏆</span>
                                <span className="text-sm font-semibold text-amber-300">5th Gastronomy Event</span>
                            </div>

                            {/* Main Title */}
                            <h1 className="mb-6 text-6xl font-black tracking-tight text-white sm:text-7xl md:text-8xl lg:text-9xl">
                                <span className="block bg-gradient-to-r from-red-400 via-orange-400 via-amber-400 via-yellow-400 via-green-400 to-emerald-400 bg-clip-text text-transparent">
                                    ÒRÌKÌ
                                </span>
                            </h1>

                            <p className="mb-4 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                                A Royal Dining Experience
                            </p>

                            <p className="mx-auto mb-8 max-w-3xl text-lg leading-relaxed text-gray-300 sm:text-xl">
                                A groundbreaking multi-sensory cultural banquet celebrating Nigeria's diverse heritage,
                                cuisine, tourism, travel and hospitality through <span className="font-bold text-amber-400">7 pillars</span> known as <span className="font-bold text-amber-400">FLAVORS</span>.
                            </p>

                            {/* Event Details */}
                            <div className="mb-12 flex flex-wrap items-center justify-center gap-6 text-gray-200">
                                <div className="flex items-center gap-2">
                                    <span className="text-2xl">📅</span>
                                    <span className="font-semibold">Dec 2-6, 2025</span>
                                </div>
                                <div className="hidden sm:block h-6 w-px bg-gray-600"></div>
                                <div className="flex items-center gap-2">
                                    <span className="text-2xl">📍</span>
                                    <span className="font-semibold">Eagle Square, Abuja FCT</span>
                                </div>
                                <div className="hidden sm:block h-6 w-px bg-gray-600"></div>
                                <div className="flex items-center gap-2">
                                    <span className="text-2xl">⏰</span>
                                    <span className="font-semibold">11am - 10pm Daily</span>
                                </div>
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Link
                                    href="/register"
                                    className="group relative inline-flex items-center gap-3 overflow-hidden rounded-xl bg-gradient-to-r from-orange-500 to-red-500 px-8 py-4 text-lg font-bold text-white shadow-2xl shadow-orange-500/30 transition-all hover:scale-105 hover:shadow-orange-500/50"
                                >
                                    <span className="relative z-10">Secure Your Spot</span>
                                    <svg className="relative z-10 h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                    <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 opacity-0 transition-opacity group-hover:opacity-100"></div>
                                </Link>
                                <button className="group inline-flex items-center gap-2 rounded-xl border-2 border-white/20 bg-white/5 px-8 py-4 text-lg font-semibold text-white backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/10">
                                    <span>Learn More</span>
                                    <svg className="h-5 w-5 transition-transform group-hover:translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FLAVORS Section */}
                <section className="relative px-4 py-20 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-7xl">
                        <div className="mb-16 text-center">
                            <h2 className="mb-4 text-4xl font-black text-white sm:text-5xl md:text-6xl">
                                Experience the <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">7 FLAVORS</span>
                            </h2>
                            <p className="text-lg text-gray-300">
                                Seven pillars of culture celebrating Nigeria's rich heritage
                            </p>
                        </div>

                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {flavors.map((flavor, index) => (
                                <div
                                    key={flavor.name}
                                    className={`group relative overflow-hidden rounded-2xl border ${flavor.borderColor} ${flavor.bgColor} p-6 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl`}
                                    style={{
                                        animationDelay: `${index * 100}ms`,
                                    }}
                                >
                                    <div className={`absolute inset-0 bg-gradient-to-br ${flavor.color} opacity-0 transition-opacity duration-300 group-hover:opacity-10`}></div>
                                    <div className="relative">
                                        <div className="mb-4 text-5xl">{flavor.icon}</div>
                                        <h3 className="mb-2 text-2xl font-black text-white">{flavor.name}</h3>
                                        <p className="text-sm text-gray-300">{flavor.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* GWR Record Section */}
                <section className="relative px-4 py-20 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-7xl">
                        <div className="overflow-hidden rounded-3xl border border-amber-500/30 bg-gradient-to-br from-amber-500/10 via-orange-500/10 to-red-500/10 p-1 backdrop-blur-sm">
                            <div className="rounded-3xl bg-slate-900/90 p-8 md:p-12">
                                <div className="grid gap-8 md:grid-cols-2 md:items-center">
                                    <div>
                                        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-amber-500/20 px-4 py-2">
                                            <span className="text-2xl">🏆</span>
                                            <span className="text-sm font-bold text-amber-400">Guinness World Record Attempt</span>
                                        </div>
                                        <h2 className="mb-6 text-4xl font-black text-white sm:text-5xl">
                                            Longest Table <br/>in <span className="text-amber-400">Africa</span>
                                        </h2>
                                        <div className="space-y-4 text-gray-300">
                                            <div className="flex items-start gap-3">
                                                <span className="text-2xl">📏</span>
                                                <div>
                                                    <p className="font-semibold text-white">Current Record:</p>
                                                    <p className="text-sm">3,189.93 meters (Cairo, Egypt)</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <span className="text-2xl">🎯</span>
                                                <div>
                                                    <p className="font-semibold text-white">Our Attempt:</p>
                                                    <p className="text-sm">3.5KM - 4KM (Abuja, Nigeria)</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <span className="text-2xl">🍺</span>
                                                <div>
                                                    <p className="font-semibold text-white">Plus:</p>
                                                    <p className="text-sm">Longest Bar in Africa & Beer Village</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="relative">
                                        <div className="rounded-2xl border border-amber-500/30 bg-gradient-to-br from-amber-500/20 to-orange-500/20 p-8 backdrop-blur-sm">
                                            <div className="mb-4 text-6xl">🌟</div>
                                            <h3 className="mb-2 text-2xl font-bold text-white">Be Part of History</h3>
                                            <p className="mb-6 text-gray-300">
                                                Join thousands of Nigerians in making history at this unprecedented cultural celebration
                                            </p>
                                            <div className="flex gap-4">
                                                <div className="flex-1 rounded-lg bg-white/10 p-4 text-center backdrop-blur-sm">
                                                    <p className="text-2xl font-black text-amber-400">3.5-4KM</p>
                                                    <p className="text-xs text-gray-400">Target Length</p>
                                                </div>
                                                <div className="flex-1 rounded-lg bg-white/10 p-4 text-center backdrop-blur-sm">
                                                    <p className="text-2xl font-black text-green-400">5 Days</p>
                                                    <p className="text-xs text-gray-400">Event Duration</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Highlights Section */}
                <section className="relative px-4 py-20 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-7xl">
                        <div className="mb-12 text-center">
                            <h2 className="mb-4 text-4xl font-black text-white sm:text-5xl">
                                Event Highlights
                            </h2>
                            <p className="text-lg text-gray-300">Premium branding opportunity for sponsors</p>
                        </div>

                        <div className="grid gap-6 md:grid-cols-3">
                            <div className="group rounded-2xl border border-purple-500/20 bg-purple-500/10 p-8 backdrop-blur-sm transition-all hover:scale-105 hover:border-purple-500/40">
                                <div className="mb-4 text-5xl">🎭</div>
                                <h3 className="mb-3 text-xl font-bold text-white">Live Entertainment</h3>
                                <p className="text-gray-300">Traditional performances and luxury dining experiences</p>
                            </div>

                            <div className="group rounded-2xl border border-blue-500/20 bg-blue-500/10 p-8 backdrop-blur-sm transition-all hover:scale-105 hover:border-blue-500/40">
                                <div className="mb-4 text-5xl">📺</div>
                                <h3 className="mb-3 text-xl font-bold text-white">Extensive Media Coverage</h3>
                                <p className="text-gray-300">Reaching millions across Nigeria and globally</p>
                            </div>

                            <div className="group rounded-2xl border border-pink-500/20 bg-pink-500/10 p-8 backdrop-blur-sm transition-all hover:scale-105 hover:border-pink-500/40">
                                <div className="mb-4 text-5xl">🌍</div>
                                <h3 className="mb-3 text-xl font-bold text-white">Global Recognition</h3>
                                <p className="text-gray-300">Associate with heritage, prestige, and excellence</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Powered By Section */}
                <section className="relative px-4 py-12 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-4xl text-center">
                        <p className="mb-6 text-sm font-semibold uppercase tracking-wider text-gray-400">Powered By</p>
                        <div className="flex flex-wrap items-center justify-center gap-8">
                            <div className="text-xl font-bold text-white">NIHOTOUR</div>
                            <div className="h-8 w-px bg-gray-600"></div>
                            <div className="text-xl font-bold text-white">NOVAROSTA</div>
                        </div>
                    </div>
                </section>

                {/* Final CTA Section */}
                <section className="relative px-4 py-20 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-4xl text-center">
                        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-orange-500/10 via-amber-500/10 to-red-500/10 p-12 backdrop-blur-sm">
                            <h2 className="mb-4 text-4xl font-black text-white sm:text-5xl">
                                Don't Miss Out!
                            </h2>
                            <p className="mb-8 text-xl text-gray-300">
                                Be part of Nigeria's biggest cultural celebration of 2025
                            </p>
                            <Link
                                href="/register"
                                className="group inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 px-10 py-5 text-xl font-bold text-white shadow-2xl shadow-orange-500/30 transition-all hover:scale-105 hover:shadow-orange-500/50"
                            >
                                <span>Register for Tastes of Culture 2025</span>
                                <svg className="h-6 w-6 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="relative border-t border-white/10 bg-slate-900/80 py-8 backdrop-blur-xl">
                    <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
                        <p className="text-sm text-gray-400">
                            © {new Date().getFullYear()} Tastes of Culture 2025 - ÒRÌKÌ: A Royal Dining Experience. All rights reserved.
                        </p>
                        <p className="mt-2 text-xs text-gray-500">
                            NIHOTOUR WEEK • Eagle Square, Abuja • Dec 2-6, 2025
                        </p>
                    </div>
                </footer>
            </div>
        </>
    );
}
