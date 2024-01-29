/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				larq: "#153a5b",
				larq2: "#f5f5f5",
				larq3: "rgb(90, 94, 96)",
			},
            fontFamily:{
                themefont: "value"
            }
		},
	},
	plugins: [],
};
