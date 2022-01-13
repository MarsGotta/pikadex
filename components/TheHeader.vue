<template>
    <header>
        <span>
            <mars-logo />
            <mars-icon name="hamburger" class="icon-hamburger" @click="toggleMenu" />
        </span>
        <mars-menu v-show="showMenu" :items="menuItems" @click-item="toggleMenu" />
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
        },
    },
}
</script>

<style scoped>
header {
    position: fixed;
    width: 100%;
}

header span {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    height: 60px;
    background-color: var(--color-carmesi-700);
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
}

.icon-hamburger {
    fill: var(--color-ocre-500);
    cursor: pointer;
}

.icon-hamburger:hover {
    fill: var(--color-ocre-600);
}
</style>
