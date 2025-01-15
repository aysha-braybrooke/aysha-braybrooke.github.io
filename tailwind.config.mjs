/** @type {import('tailwindcss').Config} */




export default {
	content: [
		"./src/**/*.{html,js,astro}",
		"./public/**/*.{html,js}"],
	theme: {
		extend: {
			
			fontFamily: {
				'dm-sans': ["DM Sans", "sans-serif"]
			  },

			colors: {
				"orange": "#FCAE48",
				"bleu": "#90D4FF",
				"pink": "#E7276B",
				"green":"#CDD528",
			},
			keyframes: {
				typing: {
				  "0%": {
					width: "0%",
					visibility: "hidden"
				  },
				  "100%": {
					width: "100%"
				  }
				},
				blink: {
				  "50%": {
					borderColor: "transparent"
				  },
				  "100%": {
					borderColor: "white"
				  }
				}
			  },
			  animation: {
				typing: "typing 2s steps(20) infinite alternate, blink .7s infinite",
				'spin-slow': 'spin 10s linear infinite'
			  }
			
		},
	},
	plugins: [],
}
