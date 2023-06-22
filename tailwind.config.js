/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      special: ['Diablo', 'sans-serif'],
    },
    extend: {
      colors: {
        discord: '#5865F2',
        github: '#757575'
      }
    }
  },
  plugins: []
};
