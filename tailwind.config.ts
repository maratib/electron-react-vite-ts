// add or update the following in your tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    debugScreens: {
      position: ['bottom', 'right']
    }
  },
  daisyui: {
    themes: ['light', 'dark']
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('tailwindcss-debug-screens'),
    require('daisyui')
  ]
}
