<template>
  <header>
    <mars-logo class="logo" />
    <button class="button-hamburger">
      <mars-icon name="hamburger" class="icon-hamburger" @click="toggleMenu" />
    </button>
    <mars-menu class="menu" :items="menuItems" @click-item="toggleMenu" />
  </header>
</template>

<script>
export default {
  props: {
    menuItems: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      showMenu: false,
    }
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu
    },
  },
}
</script>

<style scoped>
header {
  position: sticky;
  top: 0;
  width: 100%;
  background-color: var(--color-carmesi-700);
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
  height: 60px;
  display: grid;
  grid-template: 'logo burger' 60px 'nav nav' auto;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
}

.logo {
  display: inline-flex;
  height: 100%;
  grid-area: logo;
}

.button-hamburger {
  cursor: pointer;
  background: transparent;
  border: none;
  align-items: center;
  height: min-content;
  grid-area: burger;
}

.icon-hamburger {
  fill: var(--color-ocre-500);
}

.icon-hamburger:hover {
  fill: var(--color-ocre-600);
}

.menu {
  max-height: 0;
  left: 0;
  top: 60px;
  transition: max-height 0.5s ease-out;
  grid-area: nav;
  display: flex;
  align-content: center;
}

.button-hamburger:focus {
  cursor: pointer;
  pointer-events: none;
}

.button-hamburger:focus ~ .menu {
  max-height: 100px;
}

@media (min-width: 768px) {
  header {
    grid-template: 'logo nav';
  }

  .button-hamburger {
    display: none;
  }

  .menu {
    top: 0;
    max-height: none;
    height: auto;
    position: relative;
    background: transparent;
  }
}
</style>
