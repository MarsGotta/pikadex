<template>
    <header>
        <span>
            <mars-logo />
            <mars-icon name="hamburger" @click="toggleMenu" />
        </span>
        <mars-menu v-show="showMenu" :items="menuItems"/>
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
    data() {
        return {
            showMenu: false
        }
    },
    methods: {
        toggleMenu() {
            this.showMenu = !this.showMenu;
        }
    },
}
</script>

<style scoped>
header span {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    height: 60px;
    background-color: var(--color-carmesi-700);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

svg {
    fill: var(--color-ocre-500);
    cursor: pointer;
}
</style>
