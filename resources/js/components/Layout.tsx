import { Link } from '@inertiajs/react';
import { ReactNode } from 'react';
import { BotanicalOverlay, LogoBadge } from '@/components/BotanicalPatterns';

interface LayoutProps {
    children: ReactNode;
    showNav?: boolean;
    showFooter?: boolean;
}

/**
 * Layout Component - Modern Nigerian Cultural Theme
 *
 * Updated with invitation-inspired design:
 * - Lighter, more vibrant color scheme
 * - Botanical patterns (fish, leaves, mandalas)
 * - Circular badge logo
 * - Modern, clean aesthetic
 */
export default function Layout({ children, showNav = true, showFooter = true }: LayoutProps) {
    return (
        <div className="relative flex min-h-screen flex-col overflow-hidden">
            {/* Modern light background */}
            <div className="fixed inset-0 -z-10 bg-gradient-to-br from-slate-50 via-stone-50 to-slate-100 animate-gradient"></div>

            {/* Botanical pattern overlay */}
            <BotanicalOverlay pattern="mixed" opacity={0.05} className="fixed inset-0 -z-10" />

            {/* Vibrant floating orbs - More visible on light background */}
            <div className="fixed inset-0 -z-10 overflow-hidden">
                <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-gradient-to-br from-[#E65C2E]/20 to-[#D4AF37]/20 blur-3xl animate-float"></div>
                <div className="absolute top-1/2 -left-40 h-80 w-80 rounded-full bg-gradient-to-br from-[#2D9B9B]/15 to-[#1B5E20]/15 blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
                <div className="absolute -bottom-40 right-1/3 h-80 w-80 rounded-full bg-gradient-to-br from-[#C62828]/15 to-[#E65C2E]/15 blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
            </div>

            {/* Modern navigation */}
            {showNav && (
                <nav className="relative z-50 border-b border-[#D4AF37]/30 bg-white/95 backdrop-blur-xl shadow-sm">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="flex h-20 items-center justify-between">
                            <Link href="/" className="flex items-center space-x-3 group">
                                {/* Circular badge logo */}
                                <LogoBadge size="md" className="transition-transform group-hover:scale-110" />
                                <div>
                                    <h2 className="text-xl font-bold text-gray-900">
                                        ÒRÌKÌ
                                    </h2>
                                    <p className="text-xs font-semibold text-[#E65C2E]">Royal Dining</p>
                                </div>
                            </Link>
                            <div>
                                <Link
                                    href="/register"
                                    className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#E65C2E] via-[#C62828] to-[#D4AF37] px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:shadow-[#E65C2E]/50 hover:scale-105"
                                >
                                    <span>Register Now</span>
                                    <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </nav>
            )}

            {/* Main content */}
            <main className="relative z-10 flex flex-1">
                {children}
            </main>

            {/* Modern footer */}
            {showFooter && (
                <footer className="relative z-50 border-t-2 border-[#D4AF37] bg-white py-8">
                    <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
                        <div className="mb-4 flex justify-center">
                            <LogoBadge size="sm" />
                        </div>
                        <p className="text-sm text-gray-700">
                            © {new Date().getFullYear()} ÒRÌKÌ: The Royal Dining Experience. All rights reserved.
                        </p>
                        <p className="mt-2 text-xs text-gray-600">
                            An extraordinary journey through Nigerian royal gastronomy
                        </p>
                    </div>
                </footer>
            )}
        </div>
    );
}
