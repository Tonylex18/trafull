/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',

  ],

  safelist: ['bg-[#993918]', 'bg-[#FFD700]', 'bg-[#FF5631]', 'bg-[#08E06C]'], // Add the classes you want to preserve

  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        lightYellow:'#FFD700'

      }
    },
  },
  plugins: [],
}

