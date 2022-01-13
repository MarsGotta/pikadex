<template>
    <section class="layout-section">
        <the-header class="the-header" :menu-items="menuItems"></the-header>
        <Nuxt />
        <the-footer class="the-footer"></the-footer>
    </section>
</template>

<script>
export default {
    data() {
        return {
            menuItems: [
                {
                    name: 'Home',
                    url: '/'
                },
                {
                    name: 'Pokedex',
                    url: '/pokedex'
                }
            ]
        }
    },
}
</script>

<style>
.layout-section {
    display: grid;
    grid: "header" 60px "content" auto "footer" 50px;
    height: 100vh;
}
.the-header {
    grid-area: header;
}
.the-footer {
    grid-area: footer;
}
</style>