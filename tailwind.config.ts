import { nextui } from '@nextui-org/theme'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        BACKGROUND: { light: '#ffffff', dark: '#191919' },
        BUTTON: { light: '#d2d2d2', dark: '#3a3a3a' },
        BUTTON_DISABLED: { light: '#e1e1e1', dark: '#2d2d2d' },
        BUTTON_SELECTED: { light: '#3b82f6', dark: '#2563eb' },
        LAYOUT: { light: '#f0f0f0', dark: '#232323' },
        LAYOUT_BORDER: { light: '#d2d2d2', dark: '#464646' },
        TEXT_LINK: { DEFAULT: "#3b82f6" },
        WIDGET: { light: "#f0f0f0", dark: "#232323" },
        WIDGET_BORDER: { light: '#d2d2d2', dark: '#464646' },
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
}
export default config
