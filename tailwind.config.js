/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            keyframes: {
                slideUp: {
                    '0%': {
                        transform: 'translateY(-5rem)',
                    },
                    '100%': {
                        transform: 'translateY(0)',
                    },
                },
                slideDown: {
                    '0%': {
                        transform: 'translateY(5rem)',
                    },
                    '100%': {
                        transform: 'translateY(0)',
                    },
                },
            },
            animation: {
                'slide-up': 'slideUp  0.5s ease',
                'slide-down': 'slideDown  0.5s ease',
            },
        },
    },
    plugins: [require('@tailwindcss/forms')],
};
