const svgToDataUri = require('mini-svg-data-uri');

const colors = require('tailwindcss/colors');
const {
    default: flattenColorPalette,
} = require('tailwindcss/lib/util/flattenColorPalette');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                main_clr: '#0d6efd',
                main_dark_clr: '#0a4eb4',
                main_light_clr: '#3e64ff',
                soft_gray: 'rgb(249 250 251 / 1)',
                form_box_shadow: 'rgba(0, 0, 0, 0.35) -5px 5px 15px',
                light_grey_clr: '#b6b2b2',
                form_btn_box_shadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
                backdrop: 'rgba(0, 0, 0, 0.7)',
            },
            animation: {
                spotlight: 'spotlight 2s ease .75s 1 forwards',
            },
            keyframes: {
                spotlight: {
                    '0%': {
                        opacity: 0,
                        transform: 'translate(-72%, -62%) scale(0.5)',
                    },
                    '100%': {
                        opacity: 1,
                        transform: 'translate(-50%,-40%) scale(1)',
                    },
                },
            },
        },
    },
    plugins: [
        addVariablesForColors,
        function ({ matchUtilities, theme }) {
            matchUtilities(
                {
                    'bg-grid': (value) => ({
                        backgroundImage: `url("${svgToDataUri(
                            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
                        )}")`,
                    }),
                    'bg-grid-small': (value) => ({
                        backgroundImage: `url("${svgToDataUri(
                            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
                        )}")`,
                    }),
                    'bg-dot': (value) => ({
                        backgroundImage: `url("${svgToDataUri(
                            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
                        )}")`,
                    }),
                },
                {
                    values: flattenColorPalette(theme('backgroundColor')),
                    type: 'color',
                }
            );
        },
    ],
};
function addVariablesForColors({ addBase, theme }) {
    let allColors = flattenColorPalette(theme('colors'));
    let newVars = Object.fromEntries(
        Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
    );

    addBase({
        ':root': newVars,
    });
}
