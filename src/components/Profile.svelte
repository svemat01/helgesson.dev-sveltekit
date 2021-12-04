<script lang="ts">
    const url = 'https://s.gravatar.com/avatar/9baf76260b57cb46df1212a353c1a8bb?s=400';
</script>

<!-- svelte-ignore a11y-img-redundant-alt -->
<img src={url} alt="Profile picture of Jakob">
<h1>Jakob Helgesson</h1>
<h2>Svemat01</h2>

<style>
    img {
        border-radius: 50%;
        max-width: 15rem;
        border: .3rem solid var(--color-primary);
    }

    h1 {
        margin-top: 1rem;
        margin-bottom: .5rem;
    }

    h2 {
        color: var(--color-secondary);
    }
</style>