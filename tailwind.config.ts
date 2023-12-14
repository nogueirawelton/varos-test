import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "app-white": "#FAFAFA",

        "app-black": "#131313",

        "app-gray-100": "#F2F4F8",
        "app-gray-200": "#E2E5EB",
        "app-gray-300": "#D3D6DF",
        "app-gray-500": "#B0B7BE",
        "app-gray-700": "#4D5358",
        "app-gray-800": "#222729",
        "app-gray-900": "#131516",

        "app-green-500": "#00F700",
        "app-green-700": "#155B15",
      },

      keyframes: {
        slideDown: {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-collapsible-content-height)",
          },
        },

        slideUp: {
          from: {
            height: "var(--radix-collapsible-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },

      animation: {
        slideDown: "slideDown 300ms linear",
        slideUp: "slideUp 300ms linear",
      },
    },
  },
  plugins: [],
};
export default config;
