<template>
    <footer>
        Make with <span class="heart">❤</span> by <a href="https://marsgotta.com" target="_blank">Mars Gotta</a>
    </footer>
</template>

<script>
export default {

}
</script>

<style>
    footer {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.1rem;
    }

    footer a {
        color: white;
        font-weight: 600;
        text-decoration: none;
        margin: 0 5px;
    }

    .heart {
        color: var(--color-ocre-500);
        margin: 0 5px;
    }

</style>