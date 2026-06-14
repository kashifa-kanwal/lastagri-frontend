import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: 'media',
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                primary: "#2f7f33",
                "background-light": "#f6f8f6",
                "background-dark": "#141e15",
                "indus-green": "#2A7F62",
                "trust-blue": "#005A8D",
                "alert-red": "#D9534F",
                "off-white": "#F8F9FA",
                charcoal: "#343A40",
            },
            fontFamily: {
                display: ['var(--font-inter)', 'sans-serif'],
                urdu: ['var(--font-noto-nastaliq-urdu)', 'serif'],
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            keyframes: {
                'toast-in': {
                    '0%': { opacity: '0', transform: 'translateX(100%) scale(0.95)' },
                    '100%': { opacity: '1', transform: 'translateX(0) scale(1)' },
                },
                'toast-out': {
                    '0%': { opacity: '1', transform: 'translateX(0) scale(1)' },
                    '100%': { opacity: '0', transform: 'translateX(100%) scale(0.95)' },
                },
            },
            animation: {
                'toast-in': 'toast-in 0.35s cubic-bezier(0.21,1.02,0.73,1) forwards',
                'toast-out': 'toast-out 0.3s ease-in forwards',
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
};
export default config;
