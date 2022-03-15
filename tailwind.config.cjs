const typography = require('@tailwindcss/typography');

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				'logo-blue': '#1E25CD',
				'logo-dark': '#131464'
			},
			fontFamily: {
				roboto: ['roboto', 'sans-serif']
			}
		}
	},

	plugins: [typography]
};

module.exports = config;
