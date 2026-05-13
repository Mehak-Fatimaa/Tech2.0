/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#000000",
                primary: "#ffffff",
            },
            fontFamily: {
                editorial: ["Outfit", "sans-serif"], // Editorial style
                sans: ["Inter", "sans-serif"],
            },
            animation: {
                'glow': 'glow 2s ease-in-out infinite alternate',
            },
            keyframes: {
                glow: {
                    '0%': { boxShadow: '0 0 5px rgba(255,255,255,0.2)' },
                    '100%': { boxShadow: '0 0 20px rgba(255,255,255,0.6)' },
                }
            }
        },
    },
    plugins: [],
}
