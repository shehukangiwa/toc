import { Head, Link } from '@inertiajs/react';
import Layout from '@/components/Layout';

export default function Welcome() {
    return (
        <>
            <Head title="Oriki: The Royal Dining Experience" />
            <Layout>
                <div className="w-full">
                    {/* Hero Section */}
                    <section className="relative px-4 py-20 sm:px-6 lg:px-8">
                        <div className="mx-auto max-w-7xl">
                            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                                {/* Left Content */}
                                <div className="animate-slide-up space-y-8">
                                    <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm text-white">
                                        <span className="relative flex h-2 w-2">
                                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75"></span>
                                            <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-500"></span>
                                        </span>
                                        Limited Seating Available
                                    </div>

                                    <h1 className="text-6xl font-extrabold tracking-tight sm:text-7xl md:text-8xl">
                                        <span className="block text-white">Oriki</span>
                                        <span className="gradient-text block text-5xl sm:text-6xl md:text-7xl">
                                            Royal Dining
                                        </span>
                                    </h1>

                                    <p className="max-w-2xl text-xl leading-relaxed text-gray-200 sm:text-2xl">
                                        Embark on an extraordinary gastronomy journey celebrating the rich traditions
                                        and exquisite flavors of royal cuisine. An unforgettable culinary experience awaits.
                                    </p>

                                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                                        <Link
                                            href="/register"
                                            className="group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-amber-500 via-pink-500 to-purple-500 px-8 py-4 text-lg font-semibold text-white shadow-2xl transition-all hover:scale-105 hover:shadow-pink-500/50"
                                        >
                                            Reserve Your Seat
                                            <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                            </svg>
                                        </Link>
                                        <button className="glass inline-flex items-center gap-2 rounded-full px-6 py-4 text-white transition-all hover:bg-white/20">
                                            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            Watch Experience
                                        </button>
                                    </div>

                                    <div className="flex items-center gap-8 pt-4">
                                        <div className="text-center">
                                            <div className="text-4xl font-bold gradient-text">50+</div>
                                            <div className="text-sm text-gray-300">Exclusive Seats</div>
                                        </div>
                                        <div className="h-12 w-px bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>
                                        <div className="text-center">
                                            <div className="text-4xl font-bold gradient-text">7</div>
                                            <div className="text-sm text-gray-300">Course Menu</div>
                                        </div>
                                        <div className="h-12 w-px bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>
                                        <div className="text-center">
                                            <div className="text-4xl font-bold gradient-text">5★</div>
                                            <div className="text-sm text-gray-300">Royal Chefs</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Image Placeholder */}
                                <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
                                    <div className="relative">
                                        <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-amber-500 via-pink-500 to-purple-500 opacity-20 blur-2xl"></div>
                                        <div className="image-placeholder relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/20 shadow-2xl">
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="text-center">
                                                    <svg className="mx-auto h-24 w-24 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                    </svg>
                                                    <p className="mt-4 text-sm font-medium text-white/60">Royal Dining Hero Image</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Features Section */}
                    <section className="relative px-4 py-20 sm:px-6 lg:px-8">
                        <div className="mx-auto max-w-7xl">
                            <div className="mb-16 text-center">
                                <h2 className="text-4xl font-bold text-white sm:text-5xl">
                                    The Experience
                                </h2>
                                <p className="mt-4 text-xl text-gray-300">
                                    Immerse yourself in royal traditions
                                </p>
                            </div>

                            <div className="grid gap-8 md:grid-cols-3">
                                {/* Feature 1 */}
                                <div className="group animate-slide-up glass-dark rounded-2xl p-8 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/20" style={{ animationDelay: '0.1s' }}>
                                    <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500 to-pink-500 shadow-lg">
                                        <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <h3 className="mb-3 text-2xl font-bold text-white">
                                        Limited Seating
                                    </h3>
                                    <p className="text-gray-300">
                                        Exclusive event with carefully curated limited seats to ensure an intimate and personalized dining experience.
                                    </p>
                                </div>

                                {/* Feature 2 */}
                                <div className="group animate-slide-up glass-dark rounded-2xl p-8 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/20" style={{ animationDelay: '0.2s' }}>
                                    <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 to-purple-500 shadow-lg">
                                        <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                        </svg>
                                    </div>
                                    <h3 className="mb-3 text-2xl font-bold text-white">
                                        Royal Cuisine
                                    </h3>
                                    <p className="text-gray-300">
                                        Experience authentic royal gastronomy prepared by master chefs using centuries-old recipes and techniques.
                                    </p>
                                </div>

                                {/* Feature 3 */}
                                <div className="group animate-slide-up glass-dark rounded-2xl p-8 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20" style={{ animationDelay: '0.3s' }}>
                                    <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 shadow-lg">
                                        <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                    </div>
                                    <h3 className="mb-3 text-2xl font-bold text-white">
                                        Cultural Journey
                                    </h3>
                                    <p className="text-gray-300">
                                        Immerse yourself in rich cultural traditions, stories, and heritage through every course and presentation.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Gallery Section with Image Placeholders */}
                    <section className="relative px-4 py-20 sm:px-6 lg:px-8">
                        <div className="mx-auto max-w-7xl">
                            <div className="mb-16 text-center">
                                <h2 className="text-4xl font-bold text-white sm:text-5xl">
                                    A Glimpse Into Luxury
                                </h2>
                                <p className="mt-4 text-xl text-gray-300">
                                    Discover the art of royal dining
                                </p>
                            </div>

                            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                                {/* Image Placeholder 1 */}
                                <div className="group animate-slide-up overflow-hidden rounded-2xl" style={{ animationDelay: '0.1s' }}>
                                    <div className="image-placeholder relative aspect-square border border-white/20 transition-transform group-hover:scale-105">
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="text-center">
                                                <svg className="mx-auto h-16 w-16 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                                <p className="mt-2 text-xs font-medium text-white/60">Exquisite Dishes</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Image Placeholder 2 */}
                                <div className="group animate-slide-up overflow-hidden rounded-2xl" style={{ animationDelay: '0.2s' }}>
                                    <div className="image-placeholder relative aspect-square border border-white/20 transition-transform group-hover:scale-105">
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="text-center">
                                                <svg className="mx-auto h-16 w-16 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                                <p className="mt-2 text-xs font-medium text-white/60">Elegant Ambiance</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Image Placeholder 3 */}
                                <div className="group animate-slide-up overflow-hidden rounded-2xl" style={{ animationDelay: '0.3s' }}>
                                    <div className="image-placeholder relative aspect-square border border-white/20 transition-transform group-hover:scale-105">
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="text-center">
                                                <svg className="mx-auto h-16 w-16 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                                <p className="mt-2 text-xs font-medium text-white/60">Royal Presentation</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Image Placeholder 4 */}
                                <div className="group animate-slide-up overflow-hidden rounded-2xl md:col-span-2" style={{ animationDelay: '0.4s' }}>
                                    <div className="image-placeholder relative aspect-[2/1] border border-white/20 transition-transform group-hover:scale-105">
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="text-center">
                                                <svg className="mx-auto h-20 w-20 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                                <p className="mt-2 text-sm font-medium text-white/60">Dining Hall Experience</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Image Placeholder 5 */}
                                <div className="group animate-slide-up overflow-hidden rounded-2xl" style={{ animationDelay: '0.5s' }}>
                                    <div className="image-placeholder relative aspect-square border border-white/20 transition-transform group-hover:scale-105">
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="text-center">
                                                <svg className="mx-auto h-16 w-16 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                                <p className="mt-2 text-xs font-medium text-white/60">Cultural Performances</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* CTA Section */}
                    <section className="relative px-4 py-20 sm:px-6 lg:px-8">
                        <div className="mx-auto max-w-4xl">
                            <div className="glass-dark rounded-3xl p-12 text-center">
                                <h2 className="mb-6 text-4xl font-bold text-white sm:text-5xl">
                                    Ready for the Journey?
                                </h2>
                                <p className="mb-8 text-xl text-gray-300">
                                    Secure your seat at this exclusive royal dining experience. Limited availability.
                                </p>
                                <Link
                                    href="/register"
                                    className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-amber-500 via-pink-500 to-purple-500 px-10 py-5 text-lg font-semibold text-white shadow-2xl transition-all hover:scale-105 hover:shadow-pink-500/50"
                                >
                                    Reserve Your Seat Now
                                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </section>
                </div>
            </Layout>
        </>
    );
}
