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
        'image': "url('/src/components/media/google-calendar-background.jpg')",
        'image': "url('/src/components/media/images.jpg')",
        'image': "url('/src/components/media/vecteezy_beautiful-blue-and-golden-sky-and-clouds-abstract_7773672.jpg')",
        'image': "url('/src/components/media/weather.jpg')"
      }
    },
  },
  plugins: [],
};
