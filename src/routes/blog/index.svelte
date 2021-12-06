<script lang="ts" context="module">
    export async function load(): Promise<Record<string, unknown>> {
        const allPosts = import.meta.glob('./*.md');

        const posts = await Promise.all(
            Object.entries(allPosts).map(async ([path, post]) => {
                const { metadata } = await post();

                // extract filename from path and remove file extension
                const filename =
                    'blog/' +
                    path
                        .split('/')
                        .pop()
                        .replace(/\.[^/.]+$/, '');

                const returnObj = {
                    path: filename,
                    ...metadata
                };
                return returnObj;
            })
        );

        console.log(posts);
        return {
            props: {
                posts: posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
            }
        };
    }
</script>

<script>
    export let posts;
</script>

{@debug posts}

{#each posts as post}
    <article>
        <h1>{post.title}</h1>
        <p>{post.date}</p>
        <p>{post.description}</p>
    </article>
{/each}
