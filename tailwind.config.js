/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "Poppins",
        roboto: "Roboto",
      },
      fontWeight: {
        boldish: 900,
      },
    },
  },
  plugins: [],
};
