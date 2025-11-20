import { Link } from '@inertiajs/react';
import { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
    showNav?: boolean;
    showFooter?: boolean;
}

export default function Layout({ children, showNav = true, showFooter = true }: LayoutProps) {
    return (
        <div className="relative flex min-h-screen flex-col overflow-hidden">
            {/* Animated gradient background */}
            <div className="fixed inset-0 -z-10 bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-900 animate-gradient"></div>

            {/* Floating orbs for futuristic effect */}
            <div className="fixed inset-0 -z-10 overflow-hidden">
                <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-gradient-to-br from-amber-500/30 to-pink-500/30 blur-3xl animate-float"></div>
                <div className="absolute top-1/2 -left-40 h-80 w-80 rounded-full bg-gradient-to-br from-purple-500/30 to-blue-500/30 blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
                <div className="absolute -bottom-40 right-1/3 h-80 w-80 rounded-full bg-gradient-to-br from-pink-500/30 to-amber-500/30 blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
            </div>

            {/* Navigation */}
            {showNav && (
                <nav className="glass-dark relative z-50 border-b border-white/10">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="flex h-20 items-center justify-between">
                            <Link href="/" className="flex items-center space-x-3 group">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-pink-500 shadow-lg transition-transform group-hover:scale-110">
                                    <svg className="h-7 w-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                    </svg>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-white">
                                        Oriki
                                    </h2>
                                    <p className="text-xs text-gray-300">Royal Dining</p>
                                </div>
                            </Link>
                            <div>
                                <Link
                                    href="/register"
                                    className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-500 via-pink-500 to-purple-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:shadow-pink-500/50"
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

            {/* Footer */}
            {showFooter && (
                <footer className="glass-dark relative z-50 border-t border-white/10 py-8">
                    <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
                        <div className="mb-4">
                            <div className="inline-flex items-center space-x-2 text-white">
                                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-amber-500 to-pink-500">
                                    <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                    </svg>
                                </div>
                                <span className="text-lg font-bold">Oriki</span>
                            </div>
                        </div>
                        <p className="text-sm text-gray-300">
                            © {new Date().getFullYear()} Oriki: The Royal Dining Experience. All rights reserved.
                        </p>
                        <p className="mt-2 text-xs text-gray-400">
                            An extraordinary journey through royal gastronomy
                        </p>
                    </div>
                </footer>
            )}
        </div>
    );
}
