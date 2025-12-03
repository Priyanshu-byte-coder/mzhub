import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                // MZhub Brand Colors
                primary: {
                    light: '#E3E7F3',    // Soft Mist Grey
                    DEFAULT: '#AAB6D3',  // Zen Lavender
                    dark: '#39457E',     // Royal Indigo
                },
                accent: {
                    gold: '#D7B46A',     // Gold Aura
                    beige: '#F4EBD4',    // Warm Beige Glow
                },
                neutral: {
                    soft: '#C8CDD9',     // Soft Neutral Grey
                    dark: '#2D2D2D',     // Deep Slate
                    white: '#FFFFFF',    // Pure White
                },
                // Legacy spiritual colors for backward compatibility
                spiritual: {
                    indigo: {
                        50: '#f0f4ff',
                        100: '#e0e7ff',
                        200: '#c7d2fe',
                        300: '#a5b4fc',
                        400: '#818cf8',
                        500: '#6366f1',
                        600: '#4f46e5',
                        700: '#4338ca',
                        800: '#3730a3',
                        900: '#312e81',
                        950: '#1e1b4b',
                    },
                    gold: {
                        50: '#fefce8',
                        100: '#fef9c3',
                        200: '#fef08a',
                        300: '#fde047',
                        400: '#facc15',
                        500: '#eab308',
                        600: '#ca8a04',
                        700: '#a16207',
                        800: '#854d0e',
                        900: '#713f12',
                    }
                }
            },
            fontFamily: {
                sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
                serif: ['var(--font-playfair)', 'Georgia', 'serif'],
            },
            animation: {
                'fade-in': 'fadeIn 0.6s ease-in-out',
                'slide-up': 'slideUp 0.6s ease-out',
                'float': 'float 3s ease-in-out infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                }
            }
        },
    },
    plugins: [],
}
export default config
