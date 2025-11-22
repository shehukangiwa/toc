/**
 * Traditional African Geometric Patterns
 *
 * These patterns are inspired by authentic Nigerian cultural motifs:
 * - Adinkra symbols (though originally Ghanaian, widely used across West Africa)
 * - Aso-Oke weaving patterns
 * - Traditional geometric designs from Nigerian textiles
 *
 * Color palette follows brand guidelines:
 * - Orange (#E65C2E) - Energy and warmth
 * - Teal (#2D9B9B) - Prosperity
 * - Rich Green (#1B5E20) - Growth and heritage
 * - Deep Red (#C62828) - Royalty and celebration
 */

interface PatternProps {
    opacity?: number;
    className?: string;
}

/**
 * Triangular pattern inspired by Aso-Oke weaving
 * Represents unity and community in Nigerian culture
 */
export function TriangularPattern({ opacity = 0.1, className = '' }: PatternProps) {
    return (
        <svg className={className} width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <pattern id="triangular-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                    {/* Orange triangles */}
                    <polygon points="0,0 30,0 15,26" fill="#E65C2E" opacity={opacity} />
                    <polygon points="30,0 60,0 45,26" fill="#2D9B9B" opacity={opacity} />
                    {/* Teal triangles */}
                    <polygon points="15,26 45,26 30,52" fill="#1B5E20" opacity={opacity} />
                    {/* Green triangles */}
                    <polygon points="0,52 30,52 15,26" fill="#C62828" opacity={opacity * 0.8} />
                    <polygon points="30,52 60,52 45,26" fill="#E65C2E" opacity={opacity * 0.8} />
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#triangular-pattern)" />
        </svg>
    );
}

/**
 * Diamond/Lozenge pattern - common in Nigerian textiles
 * Symbolizes wealth and prestige
 */
export function DiamondPattern({ opacity = 0.08, className = '' }: PatternProps) {
    return (
        <svg className={className} width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <pattern id="diamond-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                    {/* Large diamonds */}
                    <path d="M40,0 L80,40 L40,80 L0,40 Z" fill="#E65C2E" opacity={opacity} />
                    {/* Small inner diamonds */}
                    <path d="M40,20 L60,40 L40,60 L20,40 Z" fill="#2D9B9B" opacity={opacity * 1.5} />
                    {/* Corner accents */}
                    <circle cx="0" cy="0" r="8" fill="#1B5E20" opacity={opacity * 1.2} />
                    <circle cx="80" cy="0" r="8" fill="#C62828" opacity={opacity * 1.2} />
                    <circle cx="0" cy="80" r="8" fill="#2D9B9B" opacity={opacity * 1.2} />
                    <circle cx="80" cy="80" r="8" fill="#E65C2E" opacity={opacity * 1.2} />
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#diamond-pattern)" />
        </svg>
    );
}

/**
 * Zigzag pattern inspired by traditional Nigerian fabric designs
 * Represents the journey of life and cultural continuity
 */
export function ZigzagPattern({ opacity = 0.12, className = '' }: PatternProps) {
    return (
        <svg className={className} width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <pattern id="zigzag-pattern" x="0" y="0" width="100" height="40" patternUnits="userSpaceOnUse">
                    {/* Orange zigzag */}
                    <path d="M0,20 L25,0 L50,20 L75,0 L100,20" stroke="#E65C2E" strokeWidth="3" fill="none" opacity={opacity} />
                    {/* Teal zigzag */}
                    <path d="M0,20 L25,40 L50,20 L75,40 L100,20" stroke="#2D9B9B" strokeWidth="3" fill="none" opacity={opacity} />
                    {/* Accent dots */}
                    <circle cx="25" cy="0" r="4" fill="#1B5E20" opacity={opacity * 1.5} />
                    <circle cx="75" cy="0" r="4" fill="#C62828" opacity={opacity * 1.5} />
                    <circle cx="25" cy="40" r="4" fill="#E65C2E" opacity={opacity * 1.5} />
                    <circle cx="75" cy="40" r="4" fill="#2D9B9B" opacity={opacity * 1.5} />
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#zigzag-pattern)" />
        </svg>
    );
}

/**
 * Circular pattern inspired by calabash carvings
 * Represents completeness and unity
 */
export function CircularPattern({ opacity = 0.1, className = '' }: PatternProps) {
    return (
        <svg className={className} width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <pattern id="circular-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                    {/* Large outer circle */}
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#E65C2E" strokeWidth="2" opacity={opacity} />
                    {/* Medium circle */}
                    <circle cx="50" cy="50" r="28" fill="none" stroke="#2D9B9B" strokeWidth="2" opacity={opacity * 1.2} />
                    {/* Inner circle */}
                    <circle cx="50" cy="50" r="16" fill="none" stroke="#1B5E20" strokeWidth="2" opacity={opacity * 1.4} />
                    {/* Center dot */}
                    <circle cx="50" cy="50" r="6" fill="#C62828" opacity={opacity * 1.5} />
                    {/* Cardinal points */}
                    <circle cx="50" cy="10" r="5" fill="#E65C2E" opacity={opacity} />
                    <circle cx="90" cy="50" r="5" fill="#2D9B9B" opacity={opacity} />
                    <circle cx="50" cy="90" r="5" fill="#1B5E20" opacity={opacity} />
                    <circle cx="10" cy="50" r="5" fill="#C62828" opacity={opacity} />
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circular-pattern)" />
        </svg>
    );
}

/**
 * Decorative Border Component
 * Traditional ornamental border for section dividers
 */
export function DecorativeBorder({ className = '' }: { className?: string }) {
    return (
        <div className={`flex items-center justify-center gap-4 ${className}`}>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-orange-500/50 to-orange-500"></div>
            <div className="flex items-center gap-2">
                {/* Left ornament */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="#E65C2E" />
                    <circle cx="12" cy="12" r="4" fill="#2D9B9B" />
                </svg>
                {/* Center diamond */}
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 2L28 16L16 30L4 16L16 2Z" fill="url(#border-gradient)" />
                    <defs>
                        <linearGradient id="border-gradient" x1="4" y1="2" x2="28" y2="30">
                            <stop offset="0%" stopColor="#E65C2E" />
                            <stop offset="50%" stopColor="#C62828" />
                            <stop offset="100%" stopColor="#2D9B9B" />
                        </linearGradient>
                    </defs>
                </svg>
                {/* Right ornament */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="#1B5E20" />
                    <circle cx="12" cy="12" r="4" fill="#C62828" />
                </svg>
            </div>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent via-orange-500/50 to-orange-500"></div>
        </div>
    );
}

/**
 * Corner Ornament Component
 * Traditional corner decoration for cards and sections
 */
export function CornerOrnament({ position = 'top-left', className = '' }: { position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right', className?: string }) {
    const rotations = {
        'top-left': 'rotate-0',
        'top-right': 'rotate-90',
        'bottom-right': 'rotate-180',
        'bottom-left': 'rotate-270',
    };

    return (
        <svg
            className={`${rotations[position]} ${className}`}
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Curved lines */}
            <path d="M0,0 Q24,0 48,24" stroke="#E65C2E" strokeWidth="2" fill="none" opacity="0.6" />
            <path d="M0,8 Q20,8 40,28" stroke="#2D9B9B" strokeWidth="2" fill="none" opacity="0.6" />
            <path d="M0,16 Q16,16 32,32" stroke="#1B5E20" strokeWidth="2" fill="none" opacity="0.6" />
            {/* Accent circles */}
            <circle cx="0" cy="0" r="3" fill="#C62828" opacity="0.8" />
            <circle cx="24" cy="4" r="2" fill="#E65C2E" opacity="0.8" />
            <circle cx="4" cy="24" r="2" fill="#2D9B9B" opacity="0.8" />
        </svg>
    );
}

/**
 * Pattern Overlay Component
 * Full-screen subtle pattern overlay for sections
 */
export function PatternOverlay({
    pattern = 'triangular',
    opacity = 0.05,
    className = ''
}: {
    pattern?: 'triangular' | 'diamond' | 'zigzag' | 'circular',
    opacity?: number,
    className?: string
}) {
    const patterns = {
        triangular: TriangularPattern,
        diamond: DiamondPattern,
        zigzag: ZigzagPattern,
        circular: CircularPattern,
    };

    const Pattern = patterns[pattern];

    return (
        <div className={`absolute inset-0 pointer-events-none ${className}`}>
            <Pattern opacity={opacity} className="w-full h-full" />
        </div>
    );
}
