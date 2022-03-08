import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';
import preprocess from 'svelte-preprocess';
// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static'

const dev = process.env.NODE_ENV === 'development';

// let kit = {}
// if (!dev) {
// 	kit = {
// 		adapter: stat({
// 			// default options are shown
// 			pages: 'build',
// 			assets: 'build',
// 			fallback: null,
// 			precompress: false
// 		}),

// 		// If you are not using a .nojekyll file, change your appDir to something not starting with an underscore.
// 		// For example, instead of '_app', use 'app_', 'internal', etc.
// 		appDir: 'internal',
// 	}
// }
// else {
// 	kit = {
// 		adapter: adapter(),
// 	}
// }
// console.log(kit)
/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],

	kit:{
		adapter:adapter()
	},

	adapter:adapter(),
	preprocess: [
		preprocess({
			postcss: true
		}),
		mdsvex(mdsvexConfig)
	]
};

export default config;
