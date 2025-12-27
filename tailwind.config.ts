import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#faf8f3',
                    100: '#f5f0e6',
                    200: '#e8dcc4',
                    300: '#dbc8a2',
                    400: '#c8a76a',
                    500: '#b58a4a', // Main wood color
                    600: '#9d7740',
                    700: '#7d5f33',
                    800: '#5e482a',
                    900: '#4a3921',
                },
                accent: {
                    50: '#f0f4f8',
                    100: '#d9e3ee',
                    200: '#b3c7dd',
                    300: '#8daacb',
                    400: '#678eba',
                    500: '#4a6fa5', // Deep blue-gray
                    600: '#3d5a87',
                    700: '#30466a',
                    800: '#23334d',
                    900: '#1a2538',
                },
                neutral: {
                    50: '#f9fafb',
                    100: '#f3f4f6',
                    200: '#e5e7eb',
                    300: '#d1d5db',
                    400: '#9ca3af',
                    500: '#6b7280',
                    600: '#4b5563',
                    700: '#374151',
                    800: '#1f2937',
                    900: '#111827',
                }
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                display: ['Poppins', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
export default config;