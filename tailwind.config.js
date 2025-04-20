/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
};
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'image': "url('/src/components/media/background.jpg')",
        'ima': "url('/src/components/media/google-calendar-background.jpg')",
        'imag': "url('/src/components/media/images.jpg')"
      }
    },
  },
  plugins: [],
};