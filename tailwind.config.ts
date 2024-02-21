import { nextui } from '@nextui-org/react'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    
    extend: {
      
      colors:{
        petBlue:"#575CEE",
        petBg:"#EFF1FD"
      },
      fontFamily: {
        roboto: ['var(--font-roboto)'],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
export default config
