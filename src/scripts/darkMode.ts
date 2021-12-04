import { writable } from 'svelte/store';

export const darkMode = writable(true);

export const toggleDarkMode = (): void =>
	darkMode.update((value) => {
		document.querySelector('html').setAttribute('data-theme', value ? 'dark' : 'light');
		return !value;
	});
