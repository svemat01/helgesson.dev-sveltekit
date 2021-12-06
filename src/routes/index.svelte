<script lang="ts">
    import ContactList from '$lib/components/ContactList.svelte';
    import Profile from '$lib/components/Profile.svelte';

    import { ThemeToggle } from 'svelte-themer';
</script>

<svelte:head>
    <style>
        #svelte {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
        }
    </style>
</svelte:head>

<Profile />

<ContactList />
<ThemeToggle />
