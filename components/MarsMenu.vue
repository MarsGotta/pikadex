<template>
    <nav>
        <ul>
            <li v-for="({url, name}, index) in menuItems" :key="index">
                <router-link :to="url">{{ name }}</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'MarsMenu',
    props: {
        items: {
            type: Array,
            required: true,
            default: () => []
        }
    },
    data() {
        return {
            menuItems: this.items
        }
    },
    methods: {
        onClick(item) {
            this.$emit('click', item);
        }
    }
}
</script>
