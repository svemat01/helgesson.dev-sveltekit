<script lang="ts">
    import ContactButton from '../components/ContactButton.svelte';

    let socials = [
        {
            name: 'Svemat01',
            url: 'https://github.com/svemat01',
            iconSrc: '/github.svg',
            invert: true
        },
        {
            name: 'Svemat01',
            url: 'https://gitlab.com/svemat01',
            iconSrc: '/gitlab.png',
            invert: true
        },
        {
            name: 'JakobHelgesson',
            invert: true,
            iconSrc: '/linkedin.png',
            url: 'https://www.linkedin.com/in/jakobhelgesson/'
        },
        {
            name: 'Svemat#5531',
            iconSrc: '/discord.png',
            invert: true,
            url: 'https://discord.gg/RUvPQxXUUE'
        }
    ];
</script>

<div class="social-wrapper">
    {#each socials as social}
        <ContactButton {...social} />
    {/each}
</div>

<style>
    /* center */
    .social-wrapper {
        margin: 1rem auto;
        width: 100%;
        max-width: 30rem;

        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
</style>
