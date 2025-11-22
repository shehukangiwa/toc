import { Head, Link } from '@inertiajs/react';
import { useState, useEffect } from 'react';
import {
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
        document.documentElement.style.scrollBehavior = 'smooth';

        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.documentElement.style.scrollBehavior = 'auto';
        };
    }, []);

    // Event sponsors
    const sponsors = [
        { name: 'NIHOTOUR', tier: 'Title Sponsor' },
        { name: 'NOVAROSTA', tier: 'Platinum Sponsor' },
    ];

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

            {/* Main Container */}
            <div className="relative min-h-screen overflow-hidden bg-white">
                {/* Subtle pattern background */}
                <BotanicalOverlay pattern="mixed" opacity={0.03} className="fixed inset-0 z-0" />

                {/* Gradient orbs */}
                <div className="fixed left-0 top-0 -z-10 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-[#E65C2E]/10 to-[#D4AF37]/10 blur-3xl"></div>
                <div className="fixed right-0 bottom-0 -z-10 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-[#2D9B9B]/10 to-[#1B5E20]/10 blur-3xl"></div>

                {/* Sticky Navigation */}
                <nav className={`sticky top-0 z-50 border-b transition-all duration-300 ${
                    scrolled
                        ? 'border-gray-200 bg-white/95 shadow-md backdrop-blur-xl'
                        : 'border-transparent bg-white backdrop-blur-xl'
                }`}>
                    {/* Sponsors Banner */}
                    <div className="border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white py-2">
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            <div className="flex items-center justify-center gap-6 text-sm">
                                <span className="text-gray-500 font-medium">Official Partners:</span>
                                {sponsors.map((sponsor, index) => (
                                    <div key={sponsor.name} className="flex items-center gap-2">
                                        {index > 0 && <span className="text-gray-300">|</span>}
                                        <div className="text-center">
                                            <span className="font-black bg-gradient-to-r from-[#E65C2E] to-[#D4AF37] bg-clip-text text-transparent">{sponsor.name}</span>
                                            <span className="ml-1 text-xs text-gray-400">({sponsor.tier})</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Main Nav */}
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className={`flex items-center justify-between transition-all duration-300 ${scrolled ? 'h-14' : 'h-16'}`}>
                            <Link href="/" className="flex items-center gap-3 group">
                                {/* Logo Placeholder */}
                                <div className="relative h-10 w-10 rounded-full border-2 border-[#E65C2E] bg-gradient-to-br from-[#E65C2E]/10 to-[#D4AF37]/10 flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform">
                                    <span className="text-xs font-black text-[#E65C2E]">LOGO</span>
                                </div>
                                <div>
                                    <h2 className="text-lg font-black tracking-tight text-gray-900">ÒRÌKÌ 2025</h2>
                                    <p className="text-xs text-gray-600">Royal Dining Experience</p>
                                </div>
                            </Link>
                            <Link
                                href="/register"
                                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#E65C2E] to-[#C62828] px-6 py-2.5 text-sm font-bold text-white shadow-lg transition-all hover:shadow-xl hover:scale-105"
                            >
                                <span>Register Now</span>
                                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </nav>

                {/* Hero Section - Streamlined */}
                <section className="relative px-4 py-16 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-6xl">
                        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                            {/* Badge */}
                            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-1.5 shadow-sm">
                                <span className="text-lg">🏆</span>
                                <span className="text-xs font-bold tracking-wide text-gray-700">5TH GASTRONOMY EVENT</span>
                            </div>

                            {/* Title */}
                            <h1 className="mb-4 text-5xl sm:text-6xl md:text-7xl font-black tracking-tight">
                                <RainbowOrikiText className="inline-block" />
                            </h1>

                            <p className="mb-3 text-2xl sm:text-3xl font-bold text-gray-900">
                                A Royal Dining Experience
                            </p>

                            <p className="mx-auto mb-10 max-w-2xl text-base text-gray-600 sm:text-lg">
                                Celebrating Nigeria's heritage through <span className="font-semibold text-[#E65C2E]">7 cultural flavors</span>. Join us for a multi-sensory cultural banquet.
                            </p>

                            {/* Quick Info */}
                            <div className="mb-8 flex flex-wrap items-center justify-center gap-6 text-sm">
                                <div className="flex items-center gap-2">
                                    <span className="text-xl">📅</span>
                                    <span className="font-semibold text-gray-900">Dec 2-6, 2025</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-xl">📍</span>
                                    <span className="font-semibold text-gray-900">Eagle Square, Abuja</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-xl">⏰</span>
                                    <span className="font-semibold text-gray-900">11am - 10pm Daily</span>
                                </div>
                            </div>

                            {/* CTA */}
                            <Link
                                href="/register"
                                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#E65C2E] to-[#C62828] px-8 py-4 text-base font-bold text-white shadow-xl shadow-[#E65C2E]/30 transition-all hover:scale-105 hover:shadow-2xl"
                            >
                                <span>Register Now - Free Entry</span>
                                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Event Photos Gallery */}
                <section className="relative px-4 py-12 sm:px-6 lg:px-8 bg-gray-50">
                    <div className="mx-auto max-w-6xl">
                        <h2 className="mb-6 text-center text-2xl font-black text-gray-900">Event Highlights</h2>
                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-gray-200 to-gray-300 shadow-md transition-all hover:shadow-xl">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="text-center">
                                            <div className="mb-2 text-4xl text-gray-400">📸</div>
                                            <p className="text-xs font-medium text-gray-500">Event Photo {i}</p>
                                        </div>
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 7 FLAVORS - Compact Grid */}
                <section className="relative px-4 py-12 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-6xl">
                        <div className="mb-8 text-center">
                            <h2 className="mb-3 text-3xl font-black text-gray-900 sm:text-4xl">
                                Experience the <span className="bg-gradient-to-r from-[#E65C2E] to-[#C62828] bg-clip-text text-transparent">7 FLAVORS</span>
                            </h2>
                            <p className="text-sm text-gray-600">Seven pillars of Nigerian culture</p>
                        </div>

                        <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7">
                            {flavors.map((flavor) => (
                                <div
                                    key={flavor.name}
                                    className={`group relative overflow-hidden rounded-xl border ${flavor.borderColor} bg-white p-4 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1`}
                                >
                                    <div className="text-center">
                                        <div className="mb-2 text-3xl transition-transform group-hover:scale-110">{flavor.icon}</div>
                                        <h3 className="text-sm font-black text-gray-900">{flavor.name}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* GWR Record Attempt - Streamlined */}
                <section className="relative px-4 py-12 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-50/50 to-white">
                    <div className="mx-auto max-w-4xl">
                        <div className="overflow-hidden rounded-2xl border border-[#D4AF37]/30 bg-white/80 backdrop-blur-sm p-8 shadow-lg">
                            <div className="text-center mb-6">
                                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#D4AF37] bg-amber-50 px-4 py-1.5">
                                    <span className="text-lg">🏆</span>
                                    <span className="text-xs font-bold tracking-wide text-gray-800">GUINNESS WORLD RECORD ATTEMPT</span>
                                </div>
                                <h2 className="text-3xl font-black text-gray-900 sm:text-4xl">
                                    Longest Table in <span className="bg-gradient-to-r from-[#D4AF37] to-[#E65C2E] bg-clip-text text-transparent">Africa</span>
                                </h2>
                            </div>

                            <div className="grid gap-4 sm:grid-cols-3">
                                <div className="rounded-xl bg-gray-50 p-4 text-center border border-gray-100">
                                    <div className="text-2xl mb-2">📏</div>
                                    <p className="text-xs text-gray-600 mb-1">Current Record</p>
                                    <p className="text-sm font-bold text-gray-900">3,189.93m</p>
                                    <p className="text-xs text-gray-500">Cairo, Egypt</p>
                                </div>
                                <div className="rounded-xl bg-gradient-to-br from-[#E65C2E]/10 to-[#D4AF37]/10 p-4 text-center border-2 border-[#E65C2E]/30">
                                    <div className="text-2xl mb-2">🎯</div>
                                    <p className="text-xs text-gray-600 mb-1">Our Target</p>
                                    <p className="text-base font-black bg-gradient-to-r from-[#E65C2E] to-[#C62828] bg-clip-text text-transparent">3.5 - 4KM</p>
                                    <p className="text-xs font-semibold text-gray-700">Abuja, Nigeria</p>
                                </div>
                                <div className="rounded-xl bg-gray-50 p-4 text-center border border-gray-100">
                                    <div className="text-2xl mb-2">🍺</div>
                                    <p className="text-xs text-gray-600 mb-1">Plus</p>
                                    <p className="text-sm font-bold text-gray-900">Longest Bar</p>
                                    <p className="text-xs text-gray-500">in Africa</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="relative border-t border-gray-200 bg-white py-8">
                    <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
                        <p className="text-sm text-gray-600 mb-2">
                            © {new Date().getFullYear()} ÒRÌKÌ 2025 - A Royal Dining Experience
                        </p>
                        <p className="text-xs text-gray-500">
                            NIHOTOUR WEEK • Eagle Square, Abuja • Dec 2-6, 2025
                        </p>
                    </div>
                </footer>
            </div>
        </>
    );
}
