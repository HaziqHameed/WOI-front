import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary Brand Colors
        primary: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#CE2D52', // Main primary color
          600: '#b91c47',
          700: '#991b3b',
          800: '#7f1d2f',
          900: '#681c2a',
          950: '#3f0f16',
        },
        
        // Secondary Brand Colors
        secondary: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#F05921', // Main secondary color
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
          950: '#431407',
        },

        // Gradient Colors
        gradient: {
          start: '#FFA844',
          end: '#FF6D68',
          primary: {
            start: '#CE2D52',
            end: '#F05921',
          },
        },

        // Status Colors
        success: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#00B900', // Main success color
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          950: '#052e16',
        },

        successAlt: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#52B447', // Alternative success color
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          950: '#052e16',
        },

        // Brand Success Colors (to avoid conflicts)
        'brand-success': '#00B900',
        'brand-successAlt': '#52B447',

        // Background Colors
        'background-primary': '#111827',
        'background-secondary': '#1F2937',
        'background-tertiary': '#374151',
        'background-card': 'rgba(17,24,39,0.5)',
        'background-cardHover': 'rgba(31,41,55,0.3)',

        // Accent Colors
        'accent-purple': '#762A45',
        'accent-blue': '#5088FF',

        // Gray Colors (for compatibility)
        gray: {
          400: '#9CA3AF', // Secondary text color
          500: '#6B7280', // Muted text color
          700: '#374151', // Border color
        },

        // Text Colors
        'text-primary': '#ffffff',
        'text-secondary': '#9CA3AF',
        'text-muted': '#6B7280',

        // Border Colors
        'border-primary': '#1F2937',
        'border-secondary': '#374151',
        'border-muted': '#6B7280',

        // Overlay Colors
        'overlay-light': 'rgba(255, 255, 255, 0.1)',
        'overlay-medium': 'rgba(255, 255, 255, 0.2)',
        'overlay-dark': 'rgba(0, 0, 0, 0.5)',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, var(--tw-gradient-stops))',
        'gradient-brand': 'linear-gradient(to right, #FFA844, #FF6D68)',
        'gradient-primary-brand': 'linear-gradient(to right, #CE2D52, #F05921)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
}

export default config
