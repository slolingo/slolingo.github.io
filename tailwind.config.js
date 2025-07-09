/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Slolingo color palette
        'slolingo': {
          white: '#FFFFFF',
          primary: '#FFE77B',
          secondary: '#FFD966',
          secondaryTransparent: '#FFD96699',
          tertiary: '#FFF6CE',
          accent: '#FF4D4D',
          hover: '#FFA36C',
          neutralGrey: '#E5E5E5',
          darkBackground: '#3C3C3C',
          text: '#333333',
          success: '#53A653',
          blue: '#4A90E2',
          error: '#E03102',
          lightError: '#FCBEB1',
          primaryText: '#2D2423',
          secondaryText: '#5A5A5A',
          darkModeText: '#FFFFFF',
          brightYellowBorder: '#FCD836',
          lightBackground: '#FFFCEE',
          peach: '#FED8C5',
          brightYellow: '#FCD836',
          orange: '#F78004',
          burntOrange: '#EB5D1E',
          redOrange: '#E03102',
          lightCream: '#FFF6CE',
          goldenYellow: '#FFE77B',
          selectedCardYellow: '#FFEFA6',
          softPink: '#FFE4E6',
          green: '#89C642',
          black: '#2D2423',
          deepBrown: '#29120D',
          teal: '#027B72',
          skyBlue: '#95C2E3',
          lightPink: '#FFBFDA',
          mintGreen: '#B4E296',
          paleGreen: '#D9EFC2',
          salmonPink: '#FCBEB1',
          paleBlueGray: '#D5E5EA',
          paleBlue: '#BEE7F4',
        }
      },
      fontFamily: {
        'apfel': ['ApfelGrotezk_Regular', 'sans-serif'],
        'apfel-medium': ['ApfelGrotezk_Mittel', 'sans-serif'],
        'super-cottage': ['SuperCottage', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-slolingo': 'linear-gradient(135deg, #FFBFDA33 0%, #95C2E333 50%, #B4E29633 100%)',
        'gradient-slolingo-activity': 'linear-gradient(135deg, #FFBFDA80 0%, #95C2E380 50%, #B4E29680 100%)',
      },
      boxShadow: {
        'slolingo': '0 4px 6px -1px rgba(90, 90, 90, 0.25), 0 2px 4px -1px rgba(90, 90, 90, 0.1)',
        'slolingo-card': '0 2px 4px 0 rgba(0, 0, 0, 0.25), 0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      },
      borderRadius: {
        'slolingo': '10px',
        'slolingo-large': '16px',
        'slolingo-round': '999px',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} 