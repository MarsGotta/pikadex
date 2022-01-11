<template>
    <header>
        <mars-logo />
        <mars-menu :items="menuItems"/>
    </header>
</template>

<script>
export default {
    props: {
        menuItems: {
            type: Array,
            default: () => []
        }
    },
}
</script>
