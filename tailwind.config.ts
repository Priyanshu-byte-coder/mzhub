import type { Config } from 'tailwindcss'

const config: Config = {
    darkMode: ['class'],
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
    	extend: {
    		colors: {
    			primary: {
    				light: '#e0e7ff',
    				DEFAULT: 'hsl(var(--primary))',
    				dark: '#0f172a',
    				foreground: 'hsl(var(--primary-foreground))'
    			},
    			secondary: {
    				light: '#6366f1',
    				dark: '#1e293b',
    				DEFAULT: 'hsl(var(--secondary))',
    				foreground: 'hsl(var(--secondary-foreground))'
    			},
    			accent: {
    				gold: '#f59e0b',
    				beige: '#fef3c7',
    				blue: '#6366f1',
    				DEFAULT: 'hsl(var(--accent))',
    				foreground: 'hsl(var(--accent-foreground))'
    			},
    			neutral: {
    				light: '#f8fafc',
    				soft: '#cbd5e1',
    				dark: '#334155',
    				white: '#FFFFFF'
    			},
    			text: {
    				mist: '#cbd5e1'
    			},
    			spiritual: {
    				indigo: {
    					'50': '#f0f4ff',
    					'100': '#e0e7ff',
    					'200': '#c7d2fe',
    					'300': '#a5b4fc',
    					'400': '#818cf8',
    					'500': '#6366f1',
    					'600': '#4f46e5',
    					'700': '#4338ca',
    					'800': '#3730a3',
    					'900': '#312e81',
    					'950': '#1e1b4b'
    				},
    				gold: {
    					'50': '#fefce8',
    					'100': '#fef9c3',
    					'200': '#fef08a',
    					'300': '#fde047',
    					'400': '#facc15',
    					'500': '#eab308',
    					'600': '#ca8a04',
    					'700': '#a16207',
    					'800': '#854d0e',
    					'900': '#713f12'
    				}
    			},
    			background: 'hsl(var(--background))',
    			foreground: 'hsl(var(--foreground))',
    			card: {
    				DEFAULT: 'hsl(var(--card))',
    				foreground: 'hsl(var(--card-foreground))'
    			},
    			popover: {
    				DEFAULT: 'hsl(var(--popover))',
    				foreground: 'hsl(var(--popover-foreground))'
    			},
    			muted: {
    				DEFAULT: 'hsl(var(--muted))',
    				foreground: 'hsl(var(--muted-foreground))'
    			},
    			destructive: {
    				DEFAULT: 'hsl(var(--destructive))',
    				foreground: 'hsl(var(--destructive-foreground))'
    			},
    			border: 'hsl(var(--border))',
    			input: 'hsl(var(--input))',
    			ring: 'hsl(var(--ring))',
    			chart: {
    				'1': 'hsl(var(--chart-1))',
    				'2': 'hsl(var(--chart-2))',
    				'3': 'hsl(var(--chart-3))',
    				'4': 'hsl(var(--chart-4))',
    				'5': 'hsl(var(--chart-5))'
    			}
    		},
    		fontFamily: {
    			sans: [
    				'var(--font-inter)',
    				'system-ui',
    				'sans-serif'
    			],
    			serif: [
    				'var(--font-playfair)',
    				'Georgia',
    				'serif'
    			]
    		},
    		animation: {
    			'fade-in': 'fadeIn 0.6s ease-in-out',
    			'slide-up': 'slideUp 0.6s ease-out',
    			float: 'float 3s ease-in-out infinite'
    		},
    		keyframes: {
    			fadeIn: {
    				'0%': {
    					opacity: '0'
    				},
    				'100%': {
    					opacity: '1'
    				}
    			},
    			slideUp: {
    				'0%': {
    					transform: 'translateY(20px)',
    					opacity: '0'
    				},
    				'100%': {
    					transform: 'translateY(0)',
    					opacity: '1'
    				}
    			},
    			float: {
    				'0%, 100%': {
    					transform: 'translateY(0)'
    				},
    				'50%': {
    					transform: 'translateY(-10px)'
    				}
    			}
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
    		perspective: {
    			'1000': '1000px',
    		}
    	}
    },
    plugins: [require("tailwindcss-animate")],
}
export default config
