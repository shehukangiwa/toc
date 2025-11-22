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
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        setIsVisible(true);

        // Smooth scroll behavior
        document.documentElement.style.scrollBehavior = 'smooth';

        // Handle scroll for sticky nav
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.documentElement.style.scrollBehavior = 'auto';
        };
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

            {/* Main Container - Modern lighter Nigerian theme */}
            <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-stone-50 to-slate-100">
                {/* Modern botanical pattern background */}
                <BotanicalOverlay pattern="mixed" opacity={0.08} className="z-0" />

                {/* Vibrant Nigerian-colored gradient orbs - More visible on light background */}
                <div className="absolute left-1/4 top-0 -z-10 h-96 w-96 rounded-full bg-gradient-to-br from-[#E65C2E]/20 to-[#D4AF37]/20 blur-3xl"></div>
                <div className="absolute right-1/4 top-1/3 -z-10 h-96 w-96 rounded-full bg-gradient-to-br from-[#2D9B9B]/15 to-[#1B5E20]/15 blur-3xl"></div>
                <div className="absolute bottom-0 left-1/2 -z-10 h-96 w-96 rounded-full bg-gradient-to-br from-[#C62828]/15 to-[#E65C2E]/15 blur-3xl"></div>

                {/* Navigation - Sticky with dynamic styling */}
                <nav className={`sticky top-0 z-50 border-b transition-all duration-300 ${
                    scrolled
                        ? 'border-[#D4AF37]/50 bg-white shadow-lg backdrop-blur-xl'
                        : 'border-[#D4AF37]/30 bg-white/95 backdrop-blur-xl shadow-sm'
                }`}>
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className={`flex items-center justify-between transition-all duration-300 ${
                            scrolled ? 'h-16' : 'h-20'
                        }`}>
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

                {/* Hero Section - Enhanced with better spacing */}
                <section className="relative px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
                    {/* Tropical botanical overlay */}
                    <BotanicalOverlay pattern="tropical" opacity={0.06} />

                    <div className="mx-auto max-w-7xl">
                        <div className={`text-center transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            {/* Event Badge - Modern with animation */}
                            <div className="mb-8 inline-flex items-center gap-2 rounded-full border-2 border-[#D4AF37] bg-white px-6 py-2.5 shadow-lg transition-all hover:shadow-xl hover:scale-105 animate-fade-in">
                                <span className="text-2xl">🏆</span>
                                <span className="text-sm font-semibold tracking-wide text-gray-800">5TH GASTRONOMY EVENT</span>
                            </div>

                            {/* Main Title - Rainbow ÒRÌKÌ with enhanced spacing */}
                            <div className="mb-8">
                                <RainbowOrikiText className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl drop-shadow-sm" />
                            </div>

                            <p className="mb-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl lg:text-5xl tracking-tight">
                                A Royal Dining Experience
                            </p>

                            <p className="mx-auto mb-12 max-w-3xl text-lg leading-relaxed text-gray-700 sm:text-xl md:text-2xl">
                                A groundbreaking multi-sensory cultural banquet celebrating Nigeria's diverse heritage,
                                cuisine, tourism, travel and hospitality through <span className="font-bold bg-gradient-to-r from-[#E65C2E] to-[#C62828] bg-clip-text text-transparent">7 pillars</span> known as <span className="font-bold bg-gradient-to-r from-[#E65C2E] to-[#C62828] bg-clip-text text-transparent">FLAVORS</span>.
                            </p>

                            {/* Event Details - Enhanced interactive cards */}
                            <div className="mb-16 flex flex-wrap items-center justify-center gap-4 md:gap-6">
                                <div className="group flex items-center gap-3 rounded-full bg-white px-5 py-3 shadow-md border border-gray-200 transition-all hover:shadow-xl hover:scale-105 hover:border-[#E65C2E]">
                                    <span className="text-2xl transition-transform group-hover:scale-110">📅</span>
                                    <div className="text-left">
                                        <p className="text-xs text-gray-500 font-medium">When</p>
                                        <p className="font-bold text-gray-900">Dec 2-6, 2025</p>
                                    </div>
                                </div>
                                <div className="group flex items-center gap-3 rounded-full bg-white px-5 py-3 shadow-md border border-gray-200 transition-all hover:shadow-xl hover:scale-105 hover:border-[#2D9B9B]">
                                    <span className="text-2xl transition-transform group-hover:scale-110">📍</span>
                                    <div className="text-left">
                                        <p className="text-xs text-gray-500 font-medium">Where</p>
                                        <p className="font-bold text-gray-900">Eagle Square, Abuja</p>
                                    </div>
                                </div>
                                <div className="group flex items-center gap-3 rounded-full bg-white px-5 py-3 shadow-md border border-gray-200 transition-all hover:shadow-xl hover:scale-105 hover:border-[#D4AF37]">
                                    <span className="text-2xl transition-transform group-hover:scale-110">⏰</span>
                                    <div className="text-left">
                                        <p className="text-xs text-gray-500 font-medium">Time</p>
                                        <p className="font-bold text-gray-900">11am - 10pm Daily</p>
                                    </div>
                                </div>
                            </div>

                            {/* CTA Buttons - Enhanced with better effects */}
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
                                <Link
                                    href="/register"
                                    className="group relative inline-flex items-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-r from-[#E65C2E] via-[#C62828] to-[#E65C2E] bg-size-200 px-10 py-5 text-lg font-bold text-white shadow-2xl shadow-[#E65C2E]/40 transition-all hover:bg-pos-100 hover:scale-105 hover:shadow-[#E65C2E]/60 animate-gradient"
                                >
                                    <span className="relative z-10">Secure Your Spot</span>
                                    <svg className="relative z-10 h-6 w-6 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </Link>
                                <button
                                    onClick={() => document.getElementById('flavors-section')?.scrollIntoView()}
                                    className="group inline-flex items-center gap-2 rounded-2xl border-2 border-gray-300 bg-white px-10 py-5 text-lg font-semibold text-gray-800 shadow-lg transition-all hover:border-[#D4AF37] hover:bg-gray-50 hover:shadow-xl hover:scale-105"
                                >
                                    <span>Explore Flavors</span>
                                    <svg className="h-6 w-6 transition-transform group-hover:translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
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

                {/* FLAVORS Section - Modern cultural showcase */}
                <section id="flavors-section" className="relative px-4 py-24 sm:px-6 lg:px-8 lg:py-32 bg-white/50 scroll-mt-20">
                    {/* Fish pattern background */}
                    <BotanicalOverlay pattern="fish" opacity={0.08} />

                    <div className="mx-auto max-w-7xl">
                        <div className="mb-20 text-center">
                            <h2 className="mb-6 text-4xl font-black text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl tracking-tight">
                                Experience the <span className="bg-gradient-to-r from-[#E65C2E] via-[#D4AF37] to-[#C62828] bg-clip-text text-transparent drop-shadow-sm">7 FLAVORS</span>
                            </h2>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                Seven pillars of culture celebrating Nigeria's rich heritage
                            </p>
                        </div>

                        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {flavors.map((flavor, index) => (
                                <div
                                    key={flavor.name}
                                    className={`group relative overflow-hidden rounded-3xl border-2 ${flavor.borderColor} bg-white p-8 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl ${flavor.hoverShadow} animate-fade-in cursor-pointer`}
                                    style={{
                                        animationDelay: `${index * 100}ms`,
                                    }}
                                >
                                    {/* Corner ornaments for cultural authenticity */}
                                    <CornerOrnament position="top-left" className="absolute left-0 top-0 w-10 h-10 opacity-15 group-hover:opacity-30 transition-all duration-300 group-hover:scale-110" />
                                    <CornerOrnament position="bottom-right" className="absolute right-0 bottom-0 w-10 h-10 opacity-15 group-hover:opacity-30 transition-all duration-300 group-hover:scale-110" />

                                    <div className={`absolute inset-0 bg-gradient-to-br ${flavor.color} opacity-0 transition-all duration-500 group-hover:opacity-10`}></div>
                                    <div className="relative">
                                        <div className="mb-5 text-6xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">{flavor.icon}</div>
                                        <h3 className="mb-3 text-2xl font-black text-gray-900 tracking-tight">{flavor.name}</h3>
                                        <p className="text-base text-gray-600 leading-relaxed">{flavor.description}</p>
                                    </div>
                                    {/* Subtle shine effect on hover */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 -translate-x-full group-hover:translate-x-full transition-all duration-1000 ease-out"></div>
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
                <section className="relative px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
                    {/* Mandala pattern for achievement symbolism */}
                    <BotanicalOverlay pattern="mandala" opacity={0.1} />

                    <div className="mx-auto max-w-7xl">
                        <div className="overflow-hidden rounded-3xl border-2 border-[#D4AF37] bg-white shadow-2xl p-1 transition-all hover:shadow-[#D4AF37]/30">
                            <div className="relative rounded-3xl bg-gradient-to-br from-white via-amber-50/30 to-gray-50 p-10 md:p-16">
                                {/* Corner ornaments */}
                                <CornerOrnament position="top-left" className="absolute left-4 top-4 w-12 h-12 opacity-40" />
                                <CornerOrnament position="top-right" className="absolute right-4 top-4 w-12 h-12 opacity-40" />
                                <CornerOrnament position="bottom-left" className="absolute left-4 bottom-4 w-12 h-12 opacity-40" />
                                <CornerOrnament position="bottom-right" className="absolute right-4 bottom-4 w-12 h-12 opacity-40" />

                                <div className="grid gap-10 md:grid-cols-2 md:items-center">
                                    <div>
                                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border-2 border-[#D4AF37] bg-white px-5 py-2.5 shadow-lg hover:shadow-xl transition-all">
                                            <span className="text-2xl">🏆</span>
                                            <span className="text-sm font-bold tracking-wide text-gray-800">GUINNESS WORLD RECORD ATTEMPT</span>
                                        </div>
                                        <h2 className="mb-8 text-4xl font-black text-gray-900 sm:text-5xl lg:text-6xl tracking-tight leading-tight">
                                            Longest Table <br/>in <span className="bg-gradient-to-r from-[#D4AF37] to-[#E65C2E] bg-clip-text text-transparent">Africa</span>
                                        </h2>
                                        <div className="space-y-5">
                                            <div className="group flex items-start gap-4 rounded-2xl bg-white border-2 border-gray-100 p-5 transition-all hover:border-[#E65C2E] hover:shadow-lg">
                                                <span className="text-3xl transition-transform group-hover:scale-110">📏</span>
                                                <div>
                                                    <p className="font-bold text-gray-900 text-lg mb-1">Current Record</p>
                                                    <p className="text-gray-600">3,189.93 meters (Cairo, Egypt)</p>
                                                </div>
                                            </div>
                                            <div className="group flex items-start gap-4 rounded-2xl bg-gradient-to-br from-[#E65C2E]/5 to-[#D4AF37]/5 border-2 border-[#E65C2E]/30 p-5 transition-all hover:border-[#E65C2E] hover:shadow-lg">
                                                <span className="text-3xl transition-transform group-hover:scale-110">🎯</span>
                                                <div>
                                                    <p className="font-bold text-gray-900 text-lg mb-1">Our Attempt</p>
                                                    <p className="font-semibold text-[#E65C2E]">3.5KM - 4KM (Abuja, Nigeria)</p>
                                                </div>
                                            </div>
                                            <div className="group flex items-start gap-4 rounded-2xl bg-white border-2 border-gray-100 p-5 transition-all hover:border-[#2D9B9B] hover:shadow-lg">
                                                <span className="text-3xl transition-transform group-hover:scale-110">🍺</span>
                                                <div>
                                                    <p className="font-bold text-gray-900 text-lg mb-1">Plus More</p>
                                                    <p className="text-gray-600">Longest Bar in Africa & Beer Village</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="relative">
                                        <div className="group rounded-3xl border-2 border-[#E65C2E] bg-gradient-to-br from-[#E65C2E]/5 to-[#D4AF37]/5 p-10 shadow-xl transition-all hover:shadow-2xl hover:border-[#D4AF37]">
                                            <div className="mb-6 text-7xl transition-transform group-hover:scale-110 group-hover:rotate-12">🌟</div>
                                            <h3 className="mb-4 text-3xl font-black text-gray-900 tracking-tight">Be Part of History</h3>
                                            <p className="mb-8 text-gray-600 text-lg leading-relaxed">
                                                Join thousands of Nigerians in making history at this unprecedented cultural celebration
                                            </p>
                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="rounded-2xl border-2 border-[#E65C2E] bg-white p-5 text-center shadow-md transition-all hover:shadow-xl hover:scale-105">
                                                    <p className="text-3xl font-black bg-gradient-to-r from-[#E65C2E] to-[#C62828] bg-clip-text text-transparent">3.5-4KM</p>
                                                    <p className="text-sm text-gray-600 font-medium mt-1">Target Length</p>
                                                </div>
                                                <div className="rounded-2xl border-2 border-[#2D9B9B] bg-white p-5 text-center shadow-md transition-all hover:shadow-xl hover:scale-105">
                                                    <p className="text-3xl font-black bg-gradient-to-r from-[#2D9B9B] to-[#1B5E20] bg-clip-text text-transparent">5 Days</p>
                                                    <p className="text-sm text-gray-600 font-medium mt-1">Event Duration</p>
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

                {/* Highlights Section - Enhanced modern cards */}
                <section className="relative px-4 py-24 sm:px-6 lg:px-8 lg:py-32 bg-white/50">
                    <div className="mx-auto max-w-7xl">
                        <div className="mb-20 text-center">
                            <h2 className="mb-6 text-4xl font-black text-gray-900 sm:text-5xl md:text-6xl tracking-tight">
                                Event Highlights
                            </h2>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Premium branding opportunity for sponsors and participants</p>
                        </div>

                        <div className="grid gap-8 md:grid-cols-3">
                            {/* Live Entertainment - Red (Passion) */}
                            <div className="group relative rounded-3xl border-2 border-[#C62828] bg-white p-10 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#C62828]/30">
                                <CornerOrnament position="top-right" className="absolute right-3 top-3 w-10 h-10 opacity-15 group-hover:opacity-30 transition-all group-hover:scale-110" />
                                <div className="mb-6 text-6xl transition-transform group-hover:scale-110 group-hover:rotate-6">🎭</div>
                                <h3 className="mb-4 text-2xl font-black text-gray-900 tracking-tight">Live Entertainment</h3>
                                <p className="text-gray-600 text-lg leading-relaxed">Traditional performances and luxury dining experiences</p>
                                <div className="absolute inset-0 bg-gradient-to-br from-[#C62828]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                            </div>

                            {/* Media Coverage - Teal (Prosperity) */}
                            <div className="group relative rounded-3xl border-2 border-[#2D9B9B] bg-white p-10 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#2D9B9B]/30">
                                <CornerOrnament position="top-right" className="absolute right-3 top-3 w-10 h-10 opacity-15 group-hover:opacity-30 transition-all group-hover:scale-110" />
                                <div className="mb-6 text-6xl transition-transform group-hover:scale-110 group-hover:rotate-6">📺</div>
                                <h3 className="mb-4 text-2xl font-black text-gray-900 tracking-tight">Extensive Media Coverage</h3>
                                <p className="text-gray-600 text-lg leading-relaxed">Reaching millions across Nigeria and globally</p>
                                <div className="absolute inset-0 bg-gradient-to-br from-[#2D9B9B]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                            </div>

                            {/* Global Recognition - Orange (Excellence) */}
                            <div className="group relative rounded-3xl border-2 border-[#E65C2E] bg-white p-10 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#E65C2E]/30">
                                <CornerOrnament position="top-right" className="absolute right-3 top-3 w-10 h-10 opacity-15 group-hover:opacity-30 transition-all group-hover:scale-110" />
                                <div className="mb-6 text-6xl transition-transform group-hover:scale-110 group-hover:rotate-6">🌍</div>
                                <h3 className="mb-4 text-2xl font-black text-gray-900 tracking-tight">Global Recognition</h3>
                                <p className="text-gray-600 text-lg leading-relaxed">Associate with heritage, prestige, and excellence</p>
                                <div className="absolute inset-0 bg-gradient-to-br from-[#E65C2E]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Powered By Section - Enhanced */}
                <section className="relative px-4 py-16 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-4xl text-center">
                        <p className="mb-8 text-sm font-bold uppercase tracking-widest text-gray-500">Powered By</p>
                        <div className="flex flex-wrap items-center justify-center gap-10">
                            <div className="group transition-all hover:scale-110">
                                <div className="text-2xl font-black bg-gradient-to-r from-[#E65C2E] to-[#D4AF37] bg-clip-text text-transparent">NIHOTOUR</div>
                            </div>
                            <div className="h-12 w-px bg-gradient-to-b from-[#E65C2E] via-[#D4AF37] to-[#2D9B9B]"></div>
                            <div className="group transition-all hover:scale-110">
                                <div className="text-2xl font-black bg-gradient-to-r from-[#2D9B9B] to-[#1B5E20] bg-clip-text text-transparent">NOVAROSTA</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final CTA Section - Enhanced with modern effects */}
                <section className="relative px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
                    <div className="mx-auto max-w-5xl text-center">
                        <div className="group relative overflow-hidden rounded-3xl border-2 border-[#D4AF37] bg-gradient-to-br from-white via-amber-50/20 to-gray-50 p-12 md:p-16 shadow-2xl transition-all hover:shadow-[#D4AF37]/30">
                            {/* Corner ornaments */}
                            <CornerOrnament position="top-left" className="absolute left-4 top-4 w-14 h-14 opacity-25 group-hover:opacity-40 transition-all group-hover:scale-110" />
                            <CornerOrnament position="top-right" className="absolute right-4 top-4 w-14 h-14 opacity-25 group-hover:opacity-40 transition-all group-hover:scale-110" />
                            <CornerOrnament position="bottom-left" className="absolute left-4 bottom-4 w-14 h-14 opacity-25 group-hover:opacity-40 transition-all group-hover:scale-110" />
                            <CornerOrnament position="bottom-right" className="absolute right-4 bottom-4 w-14 h-14 opacity-25 group-hover:opacity-40 transition-all group-hover:scale-110" />

                            {/* Animated background gradient */}
                            <div className="absolute inset-0 bg-gradient-to-r from-[#E65C2E]/5 via-[#D4AF37]/5 to-[#2D9B9B]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                            <div className="relative z-10">
                                <h2 className="mb-6 text-4xl font-black text-gray-900 sm:text-5xl md:text-6xl tracking-tight">
                                    Don't Miss Out!
                                </h2>
                                <p className="mb-10 text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                                    Be part of Nigeria's biggest cultural celebration of 2025
                                </p>
                                <Link
                                    href="/register"
                                    className="group/btn inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-[#E65C2E] via-[#D4AF37] to-[#C62828] px-12 py-6 text-xl font-bold text-white shadow-2xl shadow-[#E65C2E]/40 transition-all hover:scale-105 hover:shadow-[#E65C2E]/60 animate-gradient"
                                >
                                    <span>Register for Tastes of Culture 2025</span>
                                    <svg className="h-6 w-6 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer - Enhanced modern theme */}
                <footer className="relative border-t-2 border-[#D4AF37] bg-gradient-to-br from-white to-gray-50 py-12">
                    <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
                        <div className="mb-6 flex justify-center">
                            <LogoBadge size="sm" className="transition-transform hover:scale-110" />
                        </div>
                        <p className="text-base font-semibold text-gray-800 mb-3">
                            © {new Date().getFullYear()} Tastes of Culture 2025 - ÒRÌKÌ: A Royal Dining Experience
                        </p>
                        <p className="text-sm text-gray-600 font-medium">
                            All rights reserved.
                        </p>
                        <div className="mt-6 flex items-center justify-center gap-3 text-sm text-gray-600">
                            <span className="font-semibold">NIHOTOUR WEEK</span>
                            <span>•</span>
                            <span>Eagle Square, Abuja</span>
                            <span>•</span>
                            <span className="font-semibold text-[#E65C2E]">Dec 2-6, 2025</span>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}
