/** @type {import('tailwindcss').Config} */
module.exports = {
    prefix: "x",
    content: [
        "./layout/*.liquid",
        "./templates/*.{liquid,json}",
        "./templates/customers/*.{liquid,json}",
        "./sections/*.{liquid,json}",
        "./snippets/*.liquid",
        "./assets/*.{css.js}",
    ],
    theme: {
        screens: {
            "md": "750px",
            "lg": "990px",
        },
        extend: {
            fontFamily: {
                "heading": "var(--font-heading-family)",
            },
        },
    },
    plugins: [
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
    ],
}