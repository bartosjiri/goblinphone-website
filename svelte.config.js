import { vitePreprocess } from '@sveltejs/kit/vite';
import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte'],
	preprocess: [
		vitePreprocess(),
		preprocess({
			scss: {
				prependData: '@use "src/styles/__styles.scss" as *;'
			}
		})
	],
	kit: {
		adapter: adapter(),
		alias: {
			$assets: './static/assets',
			$components: './src/components',
			$config: './src/config',
			$constants: './src/constants',
			$content: './src/content',
			$helpers: './src/helpers',
			$layout: './src/layout',
			$services: './src/services',
			$stores: './src/stores',
			$types: './src/types',
			$util: './src/util'
		}
	}
};

export default config;
