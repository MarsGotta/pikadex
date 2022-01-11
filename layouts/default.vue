<template>
    <section>
        <the-header :menu-items="menuItems"></the-header>
        <Nuxt />
        <the-footer></the-footer>
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
                },
                {
                    name: 'Legendaries',
                    url: '/legendaries'
                }
            ]
        }
    },
}
</script>
