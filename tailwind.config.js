/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.ts'],

    theme: {
        colors: {
            main: 'rgba(0, 0, 32, 1)',
            'alternative-0': 'rgba(13, 0, 31, 1)',
            'alternative-1': 'rgba(0, 17, 29, 1)',
            glow: 'rgba(255, 255, 255, 1)',
            surface: 'rgba(0, 0, 0, 1)',

            'overlay-main': 'rgba(0, 0, 32, 0.9)',
            'overlay-surface': 'rgba(0, 0, 0, 0.9)',
            'slider-background': 'rgba(0, 0, 32, 0.25)',

            'text-normal': 'rgba(255, 255, 255, 1)',
            'text-soften': 'rgba(255, 255, 255, 0.75)',
            'text-disabled': 'rgba(255, 255, 255, 0.25)',

            'button-normal': 'rgba(255, 255, 255, 0.125)',
            'button-soften': 'rgba(255, 255, 255, 0.0625)',
            'button-highlighted': 'rgba(255, 255, 255, 0.25)',
            'button-pressed': 'rgba(255, 255, 255, 0.0625)',
            'button-disabled': 'rgba(255, 255, 255, 0.03125)',

            success: 'rgba(72, 199, 142, 1)',
            warning: 'rgba(241, 70, 104, 1)',

            current: 'currentColor',
        },
    },
}
