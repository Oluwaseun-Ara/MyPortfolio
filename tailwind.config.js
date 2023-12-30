/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,js,jsx}"],
	theme: {
		screens: {
			"2xl": { max: "1535px" },
			// => @media (max-width: 1535px) { ... }

			xl: { max: "1280px" },
			// => @media (max-width: 1279px) { ... }

			lg: { max: "1024px" },
			// => @media (max-width: 1023px) { ... }

			mlg: { max: "920px" },
			// => @media (max-width: 920px) { ... }

			md: { max: "767px" },
			// => @media (max-width: 767px) { ... }

			mmd: { max: "678px" },
			// => @media (max-width: 678px) { ... }

			sm: { max: "639px" },
			// => @media (max-width: 639px) { ... }

			xs: { max: "420px" },
			// => @media (max-width: 420px) { ... }

			ss: { max: "370px" },
			// => @media (max-width: 350px) { ... }
			xss: { max: "300px" },
			// => @media (max-width: 300px) { ... }
		},
		colors: {
			pry: "#fb8b24",
			sec: "#2e151b",
			tet: "#376e6f",
			sub: "#1c3334",
			white: "#fff",
			back: "#223",
			black: "#000",
		},
		extend: {
			brightness: {
				25: ".33",
				175: "1.75",
			},
		},
	},
	plugins: [],
};
