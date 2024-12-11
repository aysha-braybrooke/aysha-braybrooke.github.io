/** @type {import('tailwindcss').Config} */




export default {
	content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
	theme: {
		extend: {
			
			fontFamily: {
				'dm-sans': ["DM Sans", "sans-serif"]
			  },

			colors: {
				"orange": "#FCAE48",
				"bleu": "#90D4FF",
				"pink": "#FFA3C5",
			}
		},
	},
	plugins: [],
}
