/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    container: {
      center: true,
    },

    fontFamily: {
      sans: ['Urbanist', 'sans-serif'],
      serif: ['var(--font-recoleta-alt)', 'serif'],
      mono: ['monospace'],
      handwriting: ['Handlee'],
    },

    lineHeight: {
      DEFAULT: '135%',
    },

    extend: {
      colors: {
        primary: '#FF008A',
        primary_dark: '#E5007C',
        title: '#000000',
        subtitle: '#989898',
        paragraph: '#4D4D4D',
        background: '#F8FAFC',
        leasy: '#6366F1',
      },

      borderRadius: {
        'xl': '1rem',
        '2xl': '1.25rem',
        '3xl': '1.5rem',
        '5xl': '2rem',
      },

      dropShadow: {
        'pink': '0 0 12px rgba(255, 72, 171, 0.25)',
        'pink_strong': '0 0 16px rgba(255, 72, 171, 0.50)',
        '1': '0 0 12px rgba(0, 0, 0, 0.25)',
        '2': '0 0 6px rgba(0, 0, 0, 0.15)',
        '4xl': [
          '0 35px 35px rgba(0, 0, 0, 0.25)',
          '0 45px 65px rgba(0, 0, 0, 0.15)',
        ],
      },

      cursor: {
        'designer': 'url(../img/cursor-default-x1.svg), default',
        'designer': 'url(../img/cursor-pointer-x1.svg), pointer',
      },

      aspectRatio: {
        '4/3': '4 / 3',
      }
      

    }
  },
  plugins: [],
};
