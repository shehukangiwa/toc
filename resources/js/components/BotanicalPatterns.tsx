/**
 * Modern Botanical & Cultural Patterns
 * Inspired by the ÒRÌKÌ invitation design
 *
 * Features:
 * - Tropical leaf motifs (monstera, palm fronds)
 * - Fish patterns (Nigerian cultural prosperity symbols)
 * - Circular mandala designs (African geometric art)
 * - Modern, clean SVG implementation
 */

interface PatternProps {
    opacity?: number;
    className?: string;
}

/**
 * Tropical Leaf Pattern - Modern botanical design
 * Inspired by monstera and palm leaves in the invitation
 */
export function TropicalLeafPattern({ opacity = 0.08, className = '' }: PatternProps) {
    return (
        <svg className={className} width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <pattern id="tropical-leaf-pattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
                    {/* Monstera leaf 1 - Teal */}
                    <path
                        d="M40,80 Q50,60 60,80 Q70,100 60,120 Q50,140 40,120 Q30,100 40,80 Z M45,85 L45,115 M50,80 L50,120 M55,85 L55,115"
                        fill="#2D9B9B"
                        opacity={opacity}
                        stroke="#2D9B9B"
                        strokeWidth="1"
                    />

                    {/* Palm frond - Green */}
                    <path
                        d="M100,50 Q105,30 110,50 L115,45 Q112,55 110,50 L120,40 Q115,50 110,50 L125,35 Q118,48 110,50 Q105,70 100,50 Z"
                        fill="#1B5E20"
                        opacity={opacity * 1.2}
                    />

                    {/* Small leaf accent - Orange */}
                    <ellipse cx="160" cy="150" rx="12" ry="20" fill="#E65C2E" opacity={opacity} transform="rotate(45 160 150)" />
                    <ellipse cx="165" cy="155" rx="8" ry="15" fill="#E65C2E" opacity={opacity * 0.7} transform="rotate(30 165 155)" />

                    {/* Abstract leaf shapes */}
                    <path
                        d="M150,80 Q155,70 160,80 Q165,90 160,100 Q155,110 150,100 Q145,90 150,80"
                        fill="#C62828"
                        opacity={opacity * 0.8}
                    />
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#tropical-leaf-pattern)" />
        </svg>
    );
}

/**
 * Fish Pattern - Nigerian cultural symbol of prosperity
 * Modern, geometric interpretation
 */
export function FishPattern({ opacity = 0.06, className = '' }: PatternProps) {
    return (
        <svg className={className} width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <pattern id="fish-pattern" x="0" y="0" width="180" height="120" patternUnits="userSpaceOnUse">
                    {/* Fish 1 - Teal, swimming right */}
                    <g opacity={opacity}>
                        <ellipse cx="60" cy="40" rx="30" ry="15" fill="#2D9B9B" />
                        <path d="M30,40 L20,35 L20,45 Z" fill="#2D9B9B" />
                        <circle cx="75" cy="37" r="2" fill="#fff" />
                        <path d="M50,30 Q60,25 70,30" stroke="#fff" strokeWidth="1" fill="none" opacity="0.5" />
                    </g>

                    {/* Fish 2 - Orange, swimming left */}
                    <g opacity={opacity} transform="translate(120, 80)">
                        <ellipse cx="0" cy="0" rx="25" ry="12" fill="#E65C2E" />
                        <path d="M25,0 L35,-4 L35,4 Z" fill="#E65C2E" />
                        <circle cx="-12" cy="-2" r="1.5" fill="#fff" />
                        <path d="M-5,-6 Q0,-8 5,-6" stroke="#fff" strokeWidth="0.8" fill="none" opacity="0.5" />
                    </g>

                    {/* Small fish accent - Green */}
                    <g opacity={opacity * 1.2} transform="translate(30, 90)">
                        <ellipse cx="0" cy="0" rx="15" ry="8" fill="#1B5E20" />
                        <path d="M-15,0 L-20,-3 L-20,3 Z" fill="#1B5E20" />
                    </g>

                    {/* Bubbles for movement */}
                    <circle cx="90" cy="30" r="2" fill="#2D9B9B" opacity={opacity * 0.5} />
                    <circle cx="95" cy="25" r="1.5" fill="#2D9B9B" opacity={opacity * 0.4} />
                    <circle cx="100" cy="22" r="1" fill="#2D9B9B" opacity={opacity * 0.3} />
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#fish-pattern)" />
        </svg>
    );
}

/**
 * Mandala/Circular Pattern - African geometric art
 * Modern, clean circular motifs
 */
export function MandalaPattern({ opacity = 0.1, className = '' }: PatternProps) {
    return (
        <svg className={className} width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <pattern id="mandala-pattern" x="0" y="0" width="150" height="150" patternUnits="userSpaceOnUse">
                    {/* Central mandala - Orange */}
                    <g opacity={opacity}>
                        <circle cx="75" cy="75" r="35" fill="none" stroke="#E65C2E" strokeWidth="1.5" />
                        <circle cx="75" cy="75" r="28" fill="none" stroke="#E65C2E" strokeWidth="1" />
                        <circle cx="75" cy="75" r="20" fill="none" stroke="#D4AF37" strokeWidth="1.5" />
                        <circle cx="75" cy="75" r="12" fill="#E65C2E" opacity="0.3" />

                        {/* Radial lines */}
                        <line x1="75" y1="40" x2="75" y2="50" stroke="#E65C2E" strokeWidth="1.5" />
                        <line x1="75" y1="100" x2="75" y2="110" stroke="#E65C2E" strokeWidth="1.5" />
                        <line x1="40" y1="75" x2="50" y2="75" stroke="#E65C2E" strokeWidth="1.5" />
                        <line x1="100" y1="75" x2="110" y2="75" stroke="#E65C2E" strokeWidth="1.5" />

                        {/* Diagonal accents */}
                        <line x1="50" y1="50" x2="57" y2="57" stroke="#2D9B9B" strokeWidth="1" />
                        <line x1="100" y1="50" x2="93" y2="57" stroke="#2D9B9B" strokeWidth="1" />
                        <line x1="50" y1="100" x2="57" y2="93" stroke="#2D9B9B" strokeWidth="1" />
                        <line x1="100" y1="100" x2="93" y2="93" stroke="#2D9B9B" strokeWidth="1" />

                        {/* Decorative dots */}
                        <circle cx="75" cy="45" r="2" fill="#D4AF37" />
                        <circle cx="75" cy="105" r="2" fill="#D4AF37" />
                        <circle cx="45" cy="75" r="2" fill="#D4AF37" />
                        <circle cx="105" cy="75" r="2" fill="#D4AF37" />
                    </g>

                    {/* Corner accent mandalas - smaller */}
                    <g opacity={opacity * 0.6}>
                        <circle cx="0" cy="0" r="15" fill="none" stroke="#2D9B9B" strokeWidth="1" />
                        <circle cx="0" cy="0" r="8" fill="#2D9B9B" opacity="0.2" />
                    </g>
                    <g opacity={opacity * 0.6}>
                        <circle cx="150" cy="150" r="15" fill="none" stroke="#C62828" strokeWidth="1" />
                        <circle cx="150" cy="150" r="8" fill="#C62828" opacity="0.2" />
                    </g>
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#mandala-pattern)" />
        </svg>
    );
}

/**
 * Mixed Botanical Pattern - Combines all elements
 * Modern layered composition
 */
export function MixedBotanicalPattern({ opacity = 0.05, className = '' }: PatternProps) {
    return (
        <svg className={className} width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <pattern id="mixed-botanical" x="0" y="0" width="300" height="300" patternUnits="userSpaceOnUse">
                    {/* Large tropical leaf - bottom left */}
                    <g opacity={opacity * 1.5}>
                        <path
                            d="M50,200 Q60,160 70,200 Q85,240 70,280 Q60,320 50,280 Q35,240 50,200 Z"
                            fill="#1B5E20"
                        />
                        <line x1="60" y1="200" x2="60" y2="280" stroke="#0D3818" strokeWidth="2" opacity="0.5" />
                        <path d="M50,220 Q60,215 70,220" stroke="#0D3818" strokeWidth="1.5" fill="none" opacity="0.5" />
                        <path d="M50,240 Q60,235 70,240" stroke="#0D3818" strokeWidth="1.5" fill="none" opacity="0.5" />
                        <path d="M50,260 Q60,255 70,260" stroke="#0D3818" strokeWidth="1.5" fill="none" opacity="0.5" />
                    </g>

                    {/* Fish swimming through - top right */}
                    <g opacity={opacity}>
                        <ellipse cx="230" cy="80" rx="35" ry="18" fill="#2D9B9B" />
                        <path d="M195,80 L180,73 L180,87 Z" fill="#2D9B9B" />
                        <circle cx="250" cy="75" r="3" fill="#fff" opacity="0.8" />
                        <path d="M210,68 Q225,63 240,68" stroke="#fff" strokeWidth="1.5" fill="none" opacity="0.4" />
                        <path d="M210,85 Q225,90 240,85" stroke="#fff" strokeWidth="1.5" fill="none" opacity="0.4" />
                    </g>

                    {/* Circular mandala - center */}
                    <g opacity={opacity * 1.2}>
                        <circle cx="150" cy="150" r="40" fill="none" stroke="#E65C2E" strokeWidth="2" />
                        <circle cx="150" cy="150" r="30" fill="none" stroke="#D4AF37" strokeWidth="1.5" />
                        <circle cx="150" cy="150" r="18" fill="#E65C2E" opacity="0.15" />

                        {/* Petal-like shapes */}
                        <ellipse cx="150" cy="110" rx="8" ry="15" fill="#E65C2E" opacity="0.5" />
                        <ellipse cx="150" cy="190" rx="8" ry="15" fill="#E65C2E" opacity="0.5" />
                        <ellipse cx="110" cy="150" rx="15" ry="8" fill="#E65C2E" opacity="0.5" />
                        <ellipse cx="190" cy="150" rx="15" ry="8" fill="#E65C2E" opacity="0.5" />
                    </g>

                    {/* Small accent leaves */}
                    <ellipse cx="240" cy="240" rx="12" ry="20" fill="#C62828" opacity={opacity} transform="rotate(30 240 240)" />
                    <ellipse cx="60" cy="60" rx="10" ry="16" fill="#2D9B9B" opacity={opacity} transform="rotate(-45 60 60)" />
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#mixed-botanical)" />
        </svg>
    );
}

/**
 * Logo Badge Component - Circular white badge style from invitation
 * Modern, clean design matching the invitation
 */
export function LogoBadge({ size = 'md', className = '' }: { size?: 'sm' | 'md' | 'lg', className?: string }) {
    const sizes = {
        sm: { container: 'h-10 w-10', text: 'text-xs', subtext: 'text-[6px]' },
        md: { container: 'h-14 w-14', text: 'text-sm', subtext: 'text-[8px]' },
        lg: { container: 'h-20 w-20', text: 'text-lg', subtext: 'text-[10px]' },
    };

    return (
        <div className={`relative ${sizes[size].container} ${className}`}>
            {/* White circular badge */}
            <div className="absolute inset-0 rounded-full bg-white shadow-lg"></div>

            {/* Decorative outer ring - Nigerian colors */}
            <svg className="absolute inset-0 -m-1" viewBox="0 0 100 100">
                <circle
                    cx="50"
                    cy="50"
                    r="48"
                    fill="none"
                    stroke="url(#badge-gradient)"
                    strokeWidth="2"
                    strokeDasharray="8 4"
                />
                <defs>
                    <linearGradient id="badge-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#E65C2E" />
                        <stop offset="33%" stopColor="#D4AF37" />
                        <stop offset="66%" stopColor="#2D9B9B" />
                        <stop offset="100%" stopColor="#C62828" />
                    </linearGradient>
                </defs>
            </svg>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className={`${sizes[size].text} font-black uppercase tracking-tight text-gray-800`}>
                    Tastes of
                </div>
                <div className={`${sizes[size].text} font-black uppercase leading-none text-gray-800`}>
                    Culture
                </div>
                <div className={`${sizes[size].subtext} mt-0.5 font-bold uppercase tracking-wide text-[#E65C2E]`}>
                    2025
                </div>
            </div>
        </div>
    );
}

/**
 * Rainbow ÒRÌKÌ Text Component
 * Colorful gradient text matching invitation style
 */
export function RainbowOrikiText({ className = '' }: { className?: string }) {
    return (
        <div className={`relative inline-block ${className}`}>
            {/* Main rainbow gradient text */}
            <h1 className="bg-gradient-to-r from-[#E65C2E] via-[#D4AF37] via-[#2D9B9B] via-[#1B5E20] to-[#C62828] bg-clip-text text-transparent font-black">
                ÒRÌKÌ
            </h1>

            {/* Subtle glow effect for depth */}
            <div className="absolute inset-0 -z-10 blur-xl bg-gradient-to-r from-[#E65C2E]/20 via-[#D4AF37]/20 via-[#2D9B9B]/20 to-[#C62828]/20"></div>
        </div>
    );
}

/**
 * Pattern Overlay Component - Botanical version
 * Full-screen botanical pattern overlay for sections
 */
export function BotanicalOverlay({
    pattern = 'mixed',
    opacity = 0.05,
    className = ''
}: {
    pattern?: 'tropical' | 'fish' | 'mandala' | 'mixed',
    opacity?: number,
    className?: string
}) {
    const patterns = {
        tropical: TropicalLeafPattern,
        fish: FishPattern,
        mandala: MandalaPattern,
        mixed: MixedBotanicalPattern,
    };

    const Pattern = patterns[pattern];

    return (
        <div className={`absolute inset-0 pointer-events-none ${className}`}>
            <Pattern opacity={opacity} className="w-full h-full" />
        </div>
    );
}
