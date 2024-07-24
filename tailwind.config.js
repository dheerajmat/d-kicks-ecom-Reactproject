/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT( {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
      "./node_modules/tw-elements-react/dist/js/**/*.js",
      'node_modules/flowbite-react/lib/esm/**/*.js'
    ],
    theme: {
      extend: {},
    },
    darkMode: "class",
    plugins: [
      require("tw-elements-react/dist/plugin.cjs"), // Added a comma here
      require('flowbite/plugin')
    ]
  });
