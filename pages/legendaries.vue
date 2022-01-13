<template>
    <section class="legendaries-section">
        Legendaries
    </section>
</template>

<script>
export default {
    beforeCreate() {
        // this.$store.commit('setReload', true);
        this.$store.commit('setPagination', {
            currentPage: 1,
        })
    },
}
</script>

<style>
    .legendaries-section {
        grid-area: content;
    }
</style>
