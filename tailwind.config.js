/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontSize: {
                clamp: 'clamp(1rem, 5vw, 3rem)',
            },
            keyframes: {
                onLightTheme: {
                    '0%': { transform: 'translateX(0%))', opacity: 0 },
                    '100%': { transform: 'translateX(-150%)', opactity: 1 },
                },
                onDarkTheme: {
                    '0%': { transform: 'translateX(0%))', opacity: 0 },
                    '100%': { transform: 'translateX(-260%)', opactity: 1 },
                },
                onSystemTheme: {
                    '0%': { transform: 'translateX(0%))', opacity: 0 },
                    '100%': { transform: 'translateX(-370%)', opactity: 1 },
                },
            },
            animation: {
                onLightTheme: 'onLightTheme 0.3s ease-in-out forwards',
                onDarkTheme: 'onDarkTheme 0.3s ease-in-out 0.15s forwards',
                onSystemTheme: 'onSystemTheme 0.3s ease-in-out 0.3s forwards',
            },
            backgroundColor: {
                secondary: 'var(--bg-playground)',
            },
        },
    },
    plugins: [],
}
