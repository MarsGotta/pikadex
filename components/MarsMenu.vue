<template>
    <nav>
        <ul>
            <li v-for="({url, name}, index) in menuItems" :key="index" @click="handleClick">
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
        handleClick(item) {
            this.$emit('click-item', item);
        }
    }
}
</script>

<style scoped>
nav {
    background-color: var(--color-carmesi-700);
    font-size: 20px;
    padding-bottom: 15px;
}

ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
}

li {
    padding: 5px 20px;
}

li:hover {
    background-color: var(--color-carmesi-800);
}

a {
    color: white;
    text-decoration: none;
    width: 100%;
    display: block;

}
</style>