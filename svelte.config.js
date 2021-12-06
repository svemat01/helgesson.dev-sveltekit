import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';
import toml from 'toml';


const mdsvexConfigExtensions = ['.svelte.md', '.md', '.svx']

/** @type {import('@sveltejs/kit').Config} */
const config = {
    extensions: ['.svelte', ...mdsvexConfigExtensions],

    // Consult https://github.com/sveltejs/svelte-preprocess
    // for more information about preprocessors
    preprocess: [preprocess(), mdsvex({
        extensions: mdsvexConfigExtensions,
    
        smartypants: {
            dashes: 'oldschool'
        },
    
        remarkPlugins: [],
        rehypePlugins: [],
        layout: {
            blog: 'src/layouts/blog.svelte'
        }
    })],

    kit: {
        adapter: adapter({
            // default options are shown
            pages: 'build',
            assets: 'build',
            fallback: null
        }),

        // hydrate the <div id="svelte"> element in src/app.html
        target: '#svelte'
    }
};

export default config;
