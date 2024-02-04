/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            maxWidth: {
                widthZoomImage: 'calc(100% - 12px)',
            },
            fontSize: {
                clamp: 'clamp(1rem, 5vw, 3rem)',
            },
            keyframes: {
                showOpacity: {
                    '0%': { opacity: 0 },
                    '100%': { opactity: 1 },
                },
                onDarkTheme: {
                    '0%': { transform: 'translateX(0%))', opacity: 0 },
                    '100%': { transform: 'translateX(-260%)', opactity: 1 },
                },
                onSystemTheme: {
                    '0%': { transform: 'translateX(0%))', opacity: 0 },
                    '100%': { transform: 'translateX(-370%)', opactity: 1 },
                },
                onLightTheme: {
                    '0%': { transform: 'translateX(0%))', opacity: 0 },
                    '100%': { transform: 'translateX(-150%)', opactity: 1 },
                },
            },
            animation: {
                showOpacity: 'showOpacity 0.7s linear',
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
