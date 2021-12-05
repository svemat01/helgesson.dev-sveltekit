<script>
	export let title;
	export let author;
	export let date;
</script>

<svelte:head>
	<link href="/themes/prism-a11y-dark.css" rel="stylesheet" />
</svelte:head>

<h1>{title}</h1>
<p class="date">on: {date}</p>
<p class="date">by: {author}</p>
<slot>
	<!-- the mdsvex content will be slotted in here -->
</slot>
