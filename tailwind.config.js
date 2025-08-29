/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '400px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      animation: {
        'scale-down-infinite': 'scale-down 1s ease-in-out infinite',
        'fade' : 'fade 2s ease-in-out',
        'fade2' : 'fade 2s ease-in-out 2s',
        'shrug' : 'shrug 0.5s ease-out infinite',
      },
      keyframes: {
        'scale-down': {
          '0%': {
            scale: 0,
          },
          '50%': {
            scale: 0.5,
          },
          '100%': {
            scale: 1,
          },
        },
        fade: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shrug: {
          '0%' : { opacity: '1', transform: 'translateY(0px)' },
          '50%': { opacity: '1', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(-20px)' },
        },
      },
      colors: {
        'primary': '#005AFF',
        'secondary': '#1C1C1C',
      },
    },
  },
  plugins: [],
}