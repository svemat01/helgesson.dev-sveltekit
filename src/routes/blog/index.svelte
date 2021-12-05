<script lang="ts" context='module'>
	const allPosts = import.meta.glob("./*.md");

	const posts = Promise.all(Object.entries(allPosts).map(async ([path, post]) => {
		const { metadata } = await post();

		// extract filename from path and remove file extension
		const filename = 'blog/' + path.split("/").pop().replace(/\.[^/.]+$/, "");

		const returnObj = {
			path: filename,
			...metadata
		};
		return returnObj;
	}));

	console.log(posts);
</script>

{#await posts}
	<h1>Loading Blog Posts</h1>
{:then posts} 
	{#each posts as post}
		<a style="font-size: 2rem;" href={post.path}>{post.title}</a>
	{/each}
{/await}