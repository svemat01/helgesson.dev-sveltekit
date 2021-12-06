<script lang="ts">
    export let name = 'empty';
    export let iconSrc = 'https://img.helgesson.dev/me.png';
    export let iconAlt = 'empty';
    export let url = 'https://helgesson.dev';
    export let invert = false;
    export let style = '';

    const classes = invert ? 'invert' : '';
</script>

<a href={url} target="_blank">
    <div>
        <img src={iconSrc} alt={iconAlt} class={classes} {style} />
        <p>{name}</p>
    </div>
</a>

<style>
    img {
        width: 30px;
    }

    img.invert {
        filter: var(--theme-invert);
    }

    div {
        display: flex;
        align-items: center;

        padding-left: 1rem;

        background: var(--theme-colors-primary);
        color: var(--theme-colors-secondary);
        border-radius: 1rem;
        transition: transform 0.2s ease-in-out;
    }

    div:hover {
        transform: scale(1.1);
        transform: rotate(2deg);
    }

    p {
        margin: 1rem 0.5rem 1rem 0.5rem;
        font-weight: bold;
        font-size: 1.5rem;
    }
</style>
