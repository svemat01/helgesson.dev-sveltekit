<script lang="ts">
    import { ThemeWrapper } from 'svelte-themer';
    import { themes } from '../themes';
</script>

<svelte:head>
    <style>
        * {
            box-sizing: border-box;
        }

        /* :root {
			--bg-primary: radial-gradient(circle at center, #333333 0%, #2e2e2e 100%);
			--bg-secondary: radial-gradient(50% 50% at 50% 50%, #efefef 0%, #b8b8b8 100%);
			--color-primary: #efefef;
			--color-secondary: #b8b8b8;
			--color-inv-primary: #2e2e2e;
			--color-inv-secondary: #333333;

			--invert: invert(0%);
		}
		:root[data-theme='light'] {
			--bg-primary: radial-gradient(circle at center, #efefef 0%, #b8b8b8 100%);
			--bg-secondary: radial-gradient(50% 50% at 50% 50%, #333333 0%, #2e2e2e 100%);
			--color-primary: #2e2e2e;
			--color-secondary: #333333;
			--color-inv-primary: #efefef;
			--color-inv-secondary: #b8b8b8;

			--invert: invert(100%);
		} */

        body {
            font-family: 'Roboto', sans-serif;
        }

        a {
            text-decoration: none;
            color: inherit;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p {
            margin: 0;
        }
    </style>

    <style>
        body {
            background: var(--theme-colors-background);
            color: var(--theme-colors-primary);
        }
    </style>
</svelte:head>

<ThemeWrapper {themes} key="theme">
    <slot />
</ThemeWrapper>
