/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      colors: {
        primary: {
          '50': '#fffcea',
          '100': '#fff5c5',
          '200': '#ffeb85',
          '300': '#ffda46',
          '400': '#ffc71b',
          DEFAULT: '#ffa500',
          '600': '#e27c00',
          '700': '#bb5502',
          '800': '#984208',
          '900': '#7c360b',
          '950': '#481a00',
        },
        secondary: {
          '100': '#e7eef7',
          '200': '#cbdaec',
          '300': '#6B7280',
          '400': '#6897c8',
          '500': '#4479b3',
          '600': '#335f96',
          '700': '#2a4d7a',
          '800': '#264366',
          '900': '#243a56',
          DEFAULT: '#111a28',
        },
        light: "#FAF7F0",
        accent: "#22C55E",
      },
      fontFamily: {
        SourceSans: ["Source-Sans", "sans-serif"],
      },
    },

  },
  plugins: [],
}

