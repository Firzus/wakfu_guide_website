/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Poppins', 'Helvetica', 'Arial', 'sans-serif'],
    },
    fontSize: {
      lg: '1.25rem',
      xl: '1.5rem',
      '2xl': '1.875rem',
      '3xl': '2.25rem',
      '4xl': '3rem',
    },
    colors: {
      transparent: 'transparent',
      // Primary - Dominant
      black: {
        700: '#1c1c1c',
        800: '#161616',
        900: '#121212',
      },
      // Seconday - Complementary
      white: {
        100: '#e5e5e5',
        200: '#cccccc',
        300: '#b2b2b2',
      },
      // Tertiary - Accent
      red: '#682047',
      green: '#065956',
    },
  },
  plugins: [],
};