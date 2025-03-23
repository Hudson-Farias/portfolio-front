import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        dmSans: ["DM Sans, serif"],
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
} satisfies Config;
