/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        "custom-blue": "0px 4px 10px 0px rgba(0, 117, 255, 0.09)",
        "custom-black": "0px 3px 6px 0px rgba(104, 111, 119, 0.16)",
        "custom-shadow":
          "0 2px 4px rgba(28, 5, 77, 0.1), 0 12px 32px rgba(0, 0, 0, 0.05)",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 46.88%, rgba(0, 0, 0, 0.80) 100%)",
      },
    },
  },
  plugins: [require("daisyui")],
};
