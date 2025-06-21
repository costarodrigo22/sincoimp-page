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
      colors: {
        'primary-1': `${process.env.COLOR_PRIMARY_1}`,
        'primary-2': `${process.env.COLOR_PRIMARY_2}`,
        'primary-3': `${process.env.COLOR_PRIMARY_3}`,
        'secondary-1': `${process.env.COLOR_SECONDARY_1}`,
        'secondary-2': `${process.env.COLOR_SECONDARY_2}`,
        'secondary-3': `${process.env.COLOR_SECONDARY_3}`,
        'secondary-4': `${process.env.COLOR_SECONDARY_4}`,
        'secondary-5': `${process.env.COLOR_SECONDARY_5}`,
        'secondary-6': `${process.env.COLOR_SECONDARY_6}`,
      },
      keyframes: {
        overlayShow: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        contentShow: {
          from: { opacity: '0', transform: 'translate(-50%, -48%) scale(0.96)' },
          to: { opacity: '1', transform: 'translate(-50%, -50%) scale(1)' },
        },
      },
      animation: {
        overlayShow: 'overlayShow 300ms cubic-bezier(0.16, 1, 0.3, 1)',
        contentShow: 'contentShow 300ms cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};
export default config;
