import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'light-green': '#EEFFF9',
        'second-green':'#D8E9C5',
        'green': '#0C462E',
        'moss-green' : '#7A926B',
        'yellow': '#FFE03A',
        'vanilla': '#7A926B',
        'naples-yellow': '#EFCB68'
      },
      space: {
        '128': '32rem',
      },
      height: {
        '128': '32rem',
      },
      fontFamily:{
        lob:["Lobster Two", "sans-serif"]
      }
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio'),],
}
export default config
