/* eslint-disable global-require */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '4.5rem',
    },
    fontFamily: {
      sans: ['Lexend'],
      heading: ['Big Shoulders Display'],
    },
    extend: {
      gridTemplateRows: {
        '[auto,auto,1fr]': 'auto auto 1fr',
      },
      colors: {
        gray: {
          100: '#f7fafc',
          200: '#edf2f7',
          300: '#e2e8f0',
          400: '#cbd5e0',
          500: '#a0aec0',
          600: '#718096',
          700: '#4a5568',
          800: '#2d3748',
          900: '#1a202c',
        },
        blue: {
          100: '#ebf8ff',
          200: '#bee3f8',
          300: '#90cdf4',
          400: '#63b3ed',
          500: '#4299e1',
          600: '#3182ce',
          700: '#2b6cb0',
          800: '#2c5282',
          900: '#2a4365',
        },
        orange: {
          DEFAULT: '#D64227',
          50: '#F4C9C1',
          100: '#F1BAB0',
          200: '#EA9C8D',
          300: '#E47D6B',
          400: '#DE5F48',
          500: '#D64227',
          600: '#A7331E',
          700: '#772516',
          800: '#48160D',
          900: '#180704',
        },
        blueCharcoal: {
          DEFAULT: '#010A15',
          50: '#095DC4',
          100: '#0854B1',
          200: '#07428A',
          300: '#052F63',
          400: '#031D3C',
          500: '#010A15',
          600: '#000000',
          700: '#000000',
          800: '#000000',
          900: '#000000',
        },
        whiteLinen: {
          DEFAULT: '#FBF9F2',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#FFFFFF',
          300: '#FFFFFF',
          400: '#FFFFFF',
          500: '#FBF9F2',
          600: '#EEE5C7',
          700: '#E1D19C',
          800: '#D3BE71',
          900: '#C6AA46',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
