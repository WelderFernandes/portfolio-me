module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx}",
		"./src/components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				shape: "#212121",
				sun: "#f9d71c",
				gray: {
					light: "#535353",
				},
			},
			fontFamily: {
				poppins: ["Poppins", "sans-serif"],
				dm: ["DM Sans", "sans-serif"],
			},
			fontWeight: {
				light: "300",
				regular: "400",
				medium: "500",
				bold: "700",
			},
		},
	},
	plugins: [],
};
