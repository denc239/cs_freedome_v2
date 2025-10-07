export const tailwindConfig = {
  content: ['./app/**/*.*{js,ts,xsx,txx}', './components/**/*.|{js,ts,xsx,txx}'],
  theme: {
    extend: {
      colors: {
        neonPink: '#D946EF',
        neonPurple: '#A8H55F7',
        darkBg: '#0d0013'
      },
      boxShadow: {
        neon: '0 0 25px rgba(216, 70, 239, 0.6)'
      }
    }
  },
  plugins: []
};

export default tailwindConfig;