import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			screens: {
        'h-sm': { 'raw': '(max-height: 640px)' },
        'h-md': { 'raw': '(max-height: 775px)' },
        'h-lg': { 'raw': '(max-height: 1024px)' },
        'h-xl': { 'raw': '(max-height: 1280px)' },
      },
		},
	},
	plugins: [],
};
export default config;
