import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import { resolve } from 'path';

const scssImport = '@use "src/styles/__styles.scss" as *;';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		preprocess({
			scss: {
				prependData: scssImport
			}
		})
	],

	kit: {
		adapter: adapter(),

		vite: {
			css: {
				preprocessorOptions: {
					scss: {
						additionalData: scssImport
					}
				}
			},
			resolve: {
				alias: {
					$assets: resolve('./static/assets'),
					$components: resolve('./src/components'),
					$constants: resolve('./src/constants'),
					$content: resolve('./src/content'),
					$helpers: resolve('./src/helpers'),
					$layout: resolve('./src/layout'),
					$services: resolve('./src/services'),
					$stores: resolve('./src/stores'),
					$types: resolve('./src/types'),
					$util: resolve('./src/util')
				}
			}
		}
	}
};

export default config;
