/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./{assets,config,layout,locales,sections,snippets,src,templates}/**/*.{js,ts,jsx,tsx,vue,svelte,liquid,json}'],
  theme: {
    extend: {
      screens: {
        sm: '32em',
        md: '48em',
        lg: '64em',
        xl: '80em',
      },
      fontFamily: {
        body: 'Roboto, sans-serif',
      },
      fontSize: {
        xxs: ['10px', '12px'],
        xs: ['12px', '14px'],
        sm: ['14px', '16px'],
        base: ['16px', '18px'],
        lg: ['18px', '20px'],
      },
      colors: {
        black: '#111',
        error: '#FF0000',
        teal: '#0A4874',
      },
      transitionTimingFunction: {
        wiggle: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
};
