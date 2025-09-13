/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",   // App Router
    "./pages/**/*.{js,ts,jsx,tsx}", // If Pages Router exists
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px',   // 👈 custom breakpoint
        'sm': '720px',
        'md': '990px',
        'lg': '1200px',
        'xl': '1600px',
        '2xl': '1800px',
      },
    },
  },
  plugins: [],
}
