import { Head, Link } from '@inertiajs/react';
import Layout from '@/components/Layout';

export default function VerifyEmail({
    email,
    registrationId,
}: {
    email: string;
    registrationId: number;
}) {
    return (
        <>
            <Head title="Verify Email - Oriki" />
            <Layout showFooter={false}>
                <div className="flex w-full items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
                    <div className="w-full max-w-2xl">
                        {/* Main Card */}
                        <div className="animate-slide-up glass-dark rounded-3xl p-8 text-center shadow-2xl sm:p-12">
                            {/* Animated Mail Icon */}
                            <div className="relative mx-auto mb-8 inline-block">
                                <div className="absolute inset-0 animate-ping rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 opacity-75"></div>
                                <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 shadow-2xl">
                                    <svg className="h-12 w-12 animate-pulse text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                {/* Floating envelope indicator */}
                                <div className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-amber-500 to-pink-500 shadow-lg">
                                    <span className="text-xs font-bold text-white">1</span>
                                </div>
                            </div>

                            <h1 className="mb-4 text-5xl font-bold text-white">
                                Check Your Inbox
                            </h1>

                            <p className="mb-6 text-xl text-gray-300">
                                We've sent a verification link to:
                            </p>

                            {/* Email Display */}
                            <div className="mx-auto mb-8 max-w-lg">
                                <div className="rounded-2xl border border-blue-500/30 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 p-6 backdrop-blur-sm">
                                    <div className="flex items-center justify-center gap-3">
                                        <svg className="h-6 w-6 flex-shrink-0 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                        </svg>
                                        <p className="break-all text-lg font-bold text-blue-400">
                                            {email}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Instructions */}
                            <div className="mb-8 space-y-6">
                                <div className="glass rounded-2xl p-6 text-left">
                                    <div className="flex items-start gap-4">
                                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500">
                                            <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="mb-2 font-semibold text-white">
                                                How to verify
                                            </h3>
                                            <p className="text-sm leading-relaxed text-gray-300">
                                                Please check your email and click the verification link to continue
                                                with your registration. The link will be valid for 60 minutes.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="glass rounded-2xl p-6 text-left">
                                    <div className="flex items-start gap-4">
                                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-pink-500">
                                            <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="mb-2 font-semibold text-white">
                                                What happens next?
                                            </h3>
                                            <p className="text-sm leading-relaxed text-gray-300">
                                                Once you verify your email, you'll be automatically redirected to
                                                complete your registration for Oriki: The Royal Dining Experience.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="space-y-4">
                                <p className="text-sm text-gray-400">
                                    Didn't receive the email? Check your spam or junk folder.
                                </p>
                                <Link
                                    href="/"
                                    className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 transition-colors hover:text-blue-300"
                                >
                                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                    </svg>
                                    Back to Home
                                </Link>
                            </div>
                        </div>

                        {/* Important Notice Card */}
                        <div className="animate-slide-up mt-8" style={{ animationDelay: '0.2s' }}>
                            <div className="glass-dark overflow-hidden rounded-2xl border border-purple-500/30">
                                <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-500">
                                            <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <h3 className="text-lg font-bold text-white">
                                            Important Notice
                                        </h3>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <ul className="space-y-3 text-sm text-gray-300">
                                        <li className="flex items-start gap-3">
                                            <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span>You must verify your email before accessing the registration form</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span>The verification link expires in 60 minutes for security</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span>After verification, you'll be redirected to complete your details</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Help Section */}
                        <div className="animate-slide-up mt-8 text-center" style={{ animationDelay: '0.3s' }}>
                            <p className="text-sm text-gray-400">
                                Need help? The email might take a few minutes to arrive.
                            </p>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}
