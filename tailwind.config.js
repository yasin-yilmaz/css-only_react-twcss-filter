/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Roboto", "sans-serif"],
			},
			borderRadius: {
				"4xl": "20px",
			},
		},
	},

	plugins: [
		require("prettier-plugin-tailwindcss"),
		require("tailwind-children"),
		require("@tailwindcss/line-clamp"),
	],
};
