import { Head, Link } from '@inertiajs/react';
import { useState, useEffect } from 'react';
import {
    PatternOverlay,
    DecorativeBorder,
    CornerOrnament,
} from '@/components/AfricanPatterns';
import {
    BotanicalOverlay,
    LogoBadge,
    RainbowOrikiText,
} from '@/components/BotanicalPatterns';

export default function Welcome() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    /**
     * 7 FLAVORS of Culture
     * Updated with Nigerian cultural color palette (Orange, Teal, Green, Red, Gold)
     * Each flavor maintains cultural authenticity while using brand-aligned colors
     */
    const flavors = [
        {
            name: 'FOOD',
            icon: '🍲',
            color: 'from-[#E65C2E] to-[#C62828]', // Orange to Red - warmth and passion
            description: 'Authentic Nigerian cuisine',
            bgColor: 'bg-[#E65C2E]/10',
            borderColor: 'border-[#E65C2E]/30',
            hoverShadow: 'hover:shadow-[#E65C2E]/30'
        },
        {
            name: 'LIFESTYLE',
            icon: '✨',
            color: 'from-[#D4AF37] to-[#E65C2E]', // Gold to Orange - luxury and energy
            description: 'Cultural elegance',
            bgColor: 'bg-[#D4AF37]/10',
            borderColor: 'border-[#D4AF37]/30',
            hoverShadow: 'hover:shadow-[#D4AF37]/30'
        },
        {
            name: 'ARTS',
            icon: '🎨',
            color: 'from-[#C62828] to-[#D4AF37]', // Red to Gold - prestige and creativity
            description: 'Traditional craftsmanship',
            bgColor: 'bg-[#C62828]/10',
            borderColor: 'border-[#C62828]/30',
            hoverShadow: 'hover:shadow-[#C62828]/30'
        },
        {
            name: 'VIBES',
            icon: '🎭',
            color: 'from-[#2D9B9B] to-[#1B5E20]', // Teal to Green - harmony and celebration
            description: 'Energetic atmosphere',
            bgColor: 'bg-[#2D9B9B]/10',
            borderColor: 'border-[#2D9B9B]/30',
            hoverShadow: 'hover:shadow-[#2D9B9B]/30'
        },
        {
            name: 'ORIGINS',
            icon: '🌍',
            color: 'from-[#1B5E20] to-[#2D9B9B]', // Green to Teal - heritage and prosperity
            description: 'Heritage celebration',
            bgColor: 'bg-[#1B5E20]/10',
            borderColor: 'border-[#1B5E20]/30',
            hoverShadow: 'hover:shadow-[#1B5E20]/30'
        },
        {
            name: 'ROOTS',
            icon: '🌳',
            color: 'from-[#1B5E20] to-[#E65C2E]', // Green to Orange - growth and vitality
            description: 'Ancestral traditions',
            bgColor: 'bg-[#1B5E20]/15',
            borderColor: 'border-[#1B5E20]/30',
            hoverShadow: 'hover:shadow-[#1B5E20]/30'
        },
        {
            name: 'SOUNDS',
            icon: '🥁',
            color: 'from-[#2D9B9B] to-[#C62828]', // Teal to Red - rhythm and passion
            description: 'Live performances',
            bgColor: 'bg-[#2D9B9B]/10',
            borderColor: 'border-[#2D9B9B]/30',
            hoverShadow: 'hover:shadow-[#2D9B9B]/30'
        },
    ];

    return (
        <>
            <Head title="Tastes of Culture 2025 - ÒRÌKÌ" />

            {/* Main Container - Balanced glassmorphism theme */}
            <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-100 via-stone-100 to-gray-100">
                {/* Modern botanical pattern background */}
                <BotanicalOverlay pattern="mixed" opacity={0.1} className="z-0" />

                {/* Vibrant Nigerian-colored gradient orbs */}
                <div className="absolute left-1/4 top-0 -z-10 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-[#E65C2E]/25 to-[#D4AF37]/25 blur-3xl"></div>
                <div className="absolute right-1/4 top-1/3 -z-10 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-[#2D9B9B]/20 to-[#1B5E20]/20 blur-3xl"></div>
                <div className="absolute bottom-0 left-1/2 -z-10 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-[#C62828]/20 to-[#E65C2E]/20 blur-3xl"></div>

                {/* Navigation - Glassmorphism */}
                <nav className="glass-light relative border-b border-white/40 shadow-lg">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="flex h-20 items-center justify-between">
                            {/* Modern circular badge logo */}
                            <Link href="/" className="flex items-center space-x-3 group">
                                <LogoBadge size="md" className="transition-transform group-hover:scale-110" />
                                <div>
                                    <h2 className="text-xl font-bold tracking-tight text-gray-900">
                                        ÒRÌKÌ
                                    </h2>
                                    <p className="text-xs font-semibold text-[#E65C2E]">Royal Dining Experience</p>
                                </div>
                            </Link>
                            <div className="flex items-center gap-4">
                                <div className="hidden md:flex items-center gap-2 text-sm text-gray-700">
                                    <span className="text-[#D4AF37]">📍</span>
                                    <span>Eagle Square, Abuja</span>
                                </div>
                                {/* CTA Button - Vibrant Nigerian gradient */}
                                <Link
                                    href="/register"
                                    className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-[#E65C2E] via-[#C62828] to-[#D4AF37] px-6 py-3 font-bold text-white shadow-lg shadow-[#E65C2E]/30 transition-all hover:shadow-xl hover:shadow-[#E65C2E]/50 hover:scale-105"
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

                {/* Hero Section - Modern vibrant design */}
                <section className="relative px-4 py-20 sm:px-6 lg:px-8">
                    {/* Tropical botanical overlay */}
                    <BotanicalOverlay pattern="tropical" opacity={0.06} />

                    <div className="mx-auto max-w-7xl">
                        <div className={`text-center transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            {/* Event Badge - Glassmorphism */}
                            <div className="glass-card mb-6 inline-flex items-center gap-2 rounded-full border-2 border-[#D4AF37]/40 px-6 py-2">
                                <span className="text-2xl">🏆</span>
                                <span className="text-sm font-semibold text-gray-800">5th Gastronomy Event</span>
                            </div>

                            {/* Main Title - Rainbow ÒRÌKÌ like the invitation */}
                            <div className="mb-6">
                                <RainbowOrikiText className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl" />
                            </div>

                            <p className="mb-4 text-2xl font-bold text-gray-800 sm:text-3xl md:text-4xl">
                                A Royal Dining Experience
                            </p>

                            <p className="mx-auto mb-8 max-w-3xl text-lg leading-relaxed text-gray-700 sm:text-xl">
                                A groundbreaking multi-sensory cultural banquet celebrating Nigeria's diverse heritage,
                                cuisine, tourism, travel and hospitality through <span className="font-bold text-[#E65C2E]">7 pillars</span> known as <span className="font-bold text-[#E65C2E]">FLAVORS</span>.
                            </p>

                            {/* Event Details - Glassmorphism cards */}
                            <div className="mb-12 flex flex-wrap items-center justify-center gap-4">
                                <div className="glass-card flex items-center gap-2 rounded-full border border-white/40 px-4 py-2">
                                    <span className="text-2xl">📅</span>
                                    <span className="font-semibold text-gray-800">Dec 2-6, 2025</span>
                                </div>
                                <div className="glass-card flex items-center gap-2 rounded-full border border-white/40 px-4 py-2">
                                    <span className="text-2xl">📍</span>
                                    <span className="font-semibold text-gray-800">Eagle Square, Abuja FCT</span>
                                </div>
                                <div className="glass-card flex items-center gap-2 rounded-full border border-white/40 px-4 py-2">
                                    <span className="text-2xl">⏰</span>
                                    <span className="font-semibold text-gray-800">11am - 10pm Daily</span>
                                </div>
                            </div>

                            {/* CTA Buttons - Nigerian cultural colors */}
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Link
                                    href="/register"
                                    className="group relative inline-flex items-center gap-3 overflow-hidden rounded-xl bg-gradient-to-r from-[#E65C2E] to-[#C62828] px-8 py-4 text-lg font-bold text-white shadow-2xl shadow-[#E65C2E]/30 transition-all hover:scale-105 hover:shadow-[#E65C2E]/50"
                                >
                                    <span className="relative z-10">Secure Your Spot</span>
                                    <svg className="relative z-10 h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#C62828] to-[#E65C2E] opacity-0 transition-opacity group-hover:opacity-100"></div>
                                </Link>
                                <button className="group inline-flex items-center gap-2 rounded-xl border-2 border-gray-300 bg-white px-8 py-4 text-lg font-semibold text-gray-800 shadow-md transition-all hover:border-[#D4AF37] hover:bg-gray-50 hover:shadow-lg">
                                    <span>Learn More</span>
                                    <svg className="h-5 w-5 transition-transform group-hover:translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Decorative Border with Traditional Ornaments */}
                <div className="relative px-4">
                    <div className="mx-auto max-w-5xl">
                        <DecorativeBorder className="my-8" />
                    </div>
                </div>

                {/* FLAVORS Section - Glassmorphism showcase */}
                <section className="relative px-4 py-20 sm:px-6 lg:px-8">
                    {/* Fish pattern background */}
                    <BotanicalOverlay pattern="fish" opacity={0.08} />

                    <div className="mx-auto max-w-7xl">
                        <div className="mb-16 text-center">
                            <h2 className="mb-4 text-4xl font-black text-gray-900 sm:text-5xl md:text-6xl">
                                Experience the <span className="bg-gradient-to-r from-[#E65C2E] via-[#D4AF37] to-[#C62828] bg-clip-text text-transparent">7 FLAVORS</span>
                            </h2>
                            <p className="text-lg text-gray-700">
                                Seven pillars of culture celebrating Nigeria's rich heritage
                            </p>
                        </div>

                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {flavors.map((flavor, index) => (
                                <div
                                    key={flavor.name}
                                    className={`glass-card group relative overflow-hidden rounded-2xl border-2 ${flavor.borderColor} p-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl ${flavor.hoverShadow}`}
                                    style={{
                                        animationDelay: `${index * 100}ms`,
                                    }}
                                >
                                    {/* Corner ornaments for cultural authenticity */}
                                    <CornerOrnament position="top-left" className="absolute left-0 top-0 w-8 h-8 opacity-20 group-hover:opacity-40 transition-opacity" />
                                    <CornerOrnament position="bottom-right" className="absolute right-0 bottom-0 w-8 h-8 opacity-20 group-hover:opacity-40 transition-opacity" />

                                    <div className={`absolute inset-0 bg-gradient-to-br ${flavor.color} opacity-0 transition-opacity duration-300 group-hover:opacity-5`}></div>
                                    <div className="relative">
                                        <div className="mb-4 text-5xl">{flavor.icon}</div>
                                        <h3 className="mb-2 text-2xl font-black text-gray-900">{flavor.name}</h3>
                                        <p className="text-sm text-gray-700">{flavor.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Decorative Border */}
                <div className="relative px-4">
                    <div className="mx-auto max-w-5xl">
                        <DecorativeBorder className="my-8" />
                    </div>
                </div>

                {/* GWR Record Section - Modern prestige design */}
                <section className="relative px-4 py-20 sm:px-6 lg:px-8">
                    {/* Mandala pattern for achievement symbolism */}
                    <BotanicalOverlay pattern="mandala" opacity={0.1} />

                    <div className="mx-auto max-w-7xl">
                        <div className="glass-card overflow-hidden rounded-3xl border-2 border-[#D4AF37]/40 shadow-2xl p-1">
                            <div className="relative rounded-3xl p-8 md:p-12">
                                {/* Corner ornaments */}
                                <CornerOrnament position="top-left" className="absolute left-4 top-4 w-12 h-12 opacity-40" />
                                <CornerOrnament position="top-right" className="absolute right-4 top-4 w-12 h-12 opacity-40" />
                                <CornerOrnament position="bottom-left" className="absolute left-4 bottom-4 w-12 h-12 opacity-40" />
                                <CornerOrnament position="bottom-right" className="absolute right-4 bottom-4 w-12 h-12 opacity-40" />

                                <div className="grid gap-8 md:grid-cols-2 md:items-center">
                                    <div>
                                        <div className="mb-4 inline-flex items-center gap-2 rounded-full border-2 border-[#D4AF37] bg-white px-4 py-2 shadow-md">
                                            <span className="text-2xl">🏆</span>
                                            <span className="text-sm font-bold text-gray-800">Guinness World Record Attempt</span>
                                        </div>
                                        <h2 className="mb-6 text-4xl font-black text-gray-900 sm:text-5xl">
                                            Longest Table <br/>in <span className="text-[#D4AF37]">Africa</span>
                                        </h2>
                                        <div className="space-y-4">
                                            <div className="flex items-start gap-3 rounded-lg bg-gray-50 p-3">
                                                <span className="text-2xl">📏</span>
                                                <div>
                                                    <p className="font-semibold text-gray-900">Current Record:</p>
                                                    <p className="text-sm text-gray-700">3,189.93 meters (Cairo, Egypt)</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3 rounded-lg bg-gray-50 p-3">
                                                <span className="text-2xl">🎯</span>
                                                <div>
                                                    <p className="font-semibold text-gray-900">Our Attempt:</p>
                                                    <p className="text-sm text-gray-700">3.5KM - 4KM (Abuja, Nigeria)</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3 rounded-lg bg-gray-50 p-3">
                                                <span className="text-2xl">🍺</span>
                                                <div>
                                                    <p className="font-semibold text-gray-900">Plus:</p>
                                                    <p className="text-sm text-gray-700">Longest Bar in Africa & Beer Village</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="relative">
                                        <div className="rounded-2xl border-2 border-[#E65C2E] bg-gradient-to-br from-[#E65C2E]/5 to-[#D4AF37]/5 p-8 shadow-lg">
                                            <div className="mb-4 text-6xl">🌟</div>
                                            <h3 className="mb-2 text-2xl font-bold text-gray-900">Be Part of History</h3>
                                            <p className="mb-6 text-gray-700">
                                                Join thousands of Nigerians in making history at this unprecedented cultural celebration
                                            </p>
                                            <div className="flex gap-4">
                                                <div className="flex-1 rounded-lg border-2 border-[#E65C2E] bg-white p-4 text-center shadow-md">
                                                    <p className="text-2xl font-black text-[#E65C2E]">3.5-4KM</p>
                                                    <p className="text-xs text-gray-600">Target Length</p>
                                                </div>
                                                <div className="flex-1 rounded-lg border-2 border-[#2D9B9B] bg-white p-4 text-center shadow-md">
                                                    <p className="text-2xl font-black text-[#2D9B9B]">5 Days</p>
                                                    <p className="text-xs text-gray-600">Event Duration</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Decorative Border */}
                <div className="relative px-4">
                    <div className="mx-auto max-w-5xl">
                        <DecorativeBorder className="my-8" />
                    </div>
                </div>

                {/* Highlights Section - Glassmorphism cards */}
                <section className="relative px-4 py-20 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-7xl">
                        <div className="mb-12 text-center">
                            <h2 className="mb-4 text-4xl font-black text-gray-900 sm:text-5xl">
                                Event Highlights
                            </h2>
                            <p className="text-lg text-gray-700">Premium branding opportunity for sponsors</p>
                        </div>

                        <div className="grid gap-6 md:grid-cols-3">
                            {/* Live Entertainment - Red (Passion) */}
                            <div className="glass-card group relative rounded-2xl border-2 border-[#C62828]/40 p-8 transition-all hover:scale-105 hover:shadow-xl hover:shadow-[#C62828]/30">
                                <CornerOrnament position="top-right" className="absolute right-2 top-2 w-8 h-8 opacity-20 group-hover:opacity-40 transition-opacity" />
                                <div className="mb-4 text-5xl">🎭</div>
                                <h3 className="mb-3 text-xl font-bold text-gray-900">Live Entertainment</h3>
                                <p className="text-gray-700">Traditional performances and luxury dining experiences</p>
                            </div>

                            {/* Media Coverage - Teal (Prosperity) */}
                            <div className="glass-card group relative rounded-2xl border-2 border-[#2D9B9B]/40 p-8 transition-all hover:scale-105 hover:shadow-xl hover:shadow-[#2D9B9B]/30">
                                <CornerOrnament position="top-right" className="absolute right-2 top-2 w-8 h-8 opacity-20 group-hover:opacity-40 transition-opacity" />
                                <div className="mb-4 text-5xl">📺</div>
                                <h3 className="mb-3 text-xl font-bold text-gray-900">Extensive Media Coverage</h3>
                                <p className="text-gray-700">Reaching millions across Nigeria and globally</p>
                            </div>

                            {/* Global Recognition - Orange (Excellence) */}
                            <div className="glass-card group relative rounded-2xl border-2 border-[#E65C2E]/40 p-8 transition-all hover:scale-105 hover:shadow-xl hover:shadow-[#E65C2E]/30">
                                <CornerOrnament position="top-right" className="absolute right-2 top-2 w-8 h-8 opacity-20 group-hover:opacity-40 transition-opacity" />
                                <div className="mb-4 text-5xl">🌍</div>
                                <h3 className="mb-3 text-xl font-bold text-gray-900">Global Recognition</h3>
                                <p className="text-gray-700">Associate with heritage, prestige, and excellence</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Powered By Section */}
                <section className="relative px-4 py-12 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-4xl text-center">
                        <p className="mb-6 text-sm font-semibold uppercase tracking-wider text-gray-600">Powered By</p>
                        <div className="flex flex-wrap items-center justify-center gap-8">
                            <div className="text-xl font-bold text-gray-900">NIHOTOUR</div>
                            <div className="h-8 w-px bg-gradient-to-b from-[#E65C2E] via-[#D4AF37] to-[#2D9B9B]"></div>
                            <div className="text-xl font-bold text-gray-900">NOVAROSTA</div>
                        </div>
                    </div>
                </section>

                {/* Final CTA Section - Glassmorphism */}
                <section className="relative px-4 py-20 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-4xl text-center">
                        <div className="glass-card relative overflow-hidden rounded-3xl border-2 border-[#D4AF37]/40 p-12">
                            {/* Corner ornaments */}
                            <CornerOrnament position="top-left" className="absolute left-4 top-4 w-12 h-12 opacity-30" />
                            <CornerOrnament position="top-right" className="absolute right-4 top-4 w-12 h-12 opacity-30" />
                            <CornerOrnament position="bottom-left" className="absolute left-4 bottom-4 w-12 h-12 opacity-30" />
                            <CornerOrnament position="bottom-right" className="absolute right-4 bottom-4 w-12 h-12 opacity-30" />

                            <h2 className="mb-4 text-4xl font-black text-gray-900 sm:text-5xl">
                                Don't Miss Out!
                            </h2>
                            <p className="mb-8 text-xl text-gray-700">
                                Be part of Nigeria's biggest cultural celebration of 2025
                            </p>
                            <Link
                                href="/register"
                                className="group inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-[#E65C2E] via-[#D4AF37] to-[#C62828] px-10 py-5 text-xl font-bold text-white shadow-2xl shadow-[#E65C2E]/30 transition-all hover:scale-105 hover:shadow-[#E65C2E]/50"
                            >
                                <span>Register for Tastes of Culture 2025</span>
                                <svg className="h-6 w-6 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Footer - Glassmorphism */}
                <footer className="glass-light relative border-t-2 border-white/40 py-8">
                    <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
                        <div className="mb-4 flex justify-center">
                            <LogoBadge size="sm" />
                        </div>
                        <p className="text-sm text-gray-700">
                            © {new Date().getFullYear()} Tastes of Culture 2025 - ÒRÌKÌ: A Royal Dining Experience. All rights reserved.
                        </p>
                        <p className="mt-2 text-xs text-gray-600">
                            NIHOTOUR WEEK • Eagle Square, Abuja • Dec 2-6, 2025
                        </p>
                    </div>
                </footer>
            </div>
        </>
    );
}
