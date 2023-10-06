/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1280px'
    },
    fontFamily: {
      'sans': ['Poppins', 'Helvetica', 'Arial', 'sans-serif'],
    },
    fontSize: {
      xs: ['0.75rem', '0.9rem '],
      sm: ['0.875rem', '1.05rem'],
      base: ['1rem', '1.2rem'],
      lg: ['1.25rem', '1.5rem'],
      xl: ['1.5rem', '1.8rem'],
      '2xl': ['2.25rem', '2.7rem'],
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