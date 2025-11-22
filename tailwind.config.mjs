/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				mono: ['"Space Mono"', 'monospace'],
			},
			colors: {
				cyber: {
					black: 'var(--cyber-black)',
					dark: 'var(--cyber-dark)',
					card: 'var(--cyber-card)',
					border: 'var(--cyber-border)',
					primary: 'var(--cyber-primary)',
					secondary: 'var(--cyber-secondary)',
					muted: 'var(--cyber-muted)',
					accent: 'var(--cyber-accent)',
				}
			},
			backgroundImage: {
				'dither': 'var(--bg-dither)',
			},
			animation: {
				scanline: 'scanline 6s linear infinite',
				marquee: 'marquee 40s linear infinite',
			},
			keyframes: {
				marquee: {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(-50%)' },
				}
			}
		},
	},
	plugins: [],
}
