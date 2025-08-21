/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // or 'media'
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: 'var(--primary)',
        // ...add other custom colors as needed
      },
    },
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  plugins: [],
}

