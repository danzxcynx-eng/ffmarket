/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a1a2e',
        secondary: '#16213e',
        accent: '#ff6b35',
        accent2: '#f7931e',
        success: '#00d084',
        danger: '#ff3333',
        warning: '#ffa500',
        dark: '#0f0f0f',
        light: '#f5f5f5',
      },
      backgroundImage: {
        'gradient-gaming': 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
        'gradient-accent': 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
      },
      backdropBlur: {
        'xs': '2px',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 20px rgba(255, 107, 53, 0.3)',
        'glow-lg': '0 0 40px rgba(255, 107, 53, 0.4)',
      },
    },
  },
  plugins: [],
}
