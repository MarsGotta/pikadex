<template>
  <nav>
    <ul>
      <li
        v-for="({ url, name }, index) in menuItems"
        :key="index"
        @click="handleClick"
      >
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
      default: () => [],
    },
  },
  data() {
    return {
      menuItems: this.items,
    }
  },
  methods: {
    handleClick(item) {
      this.$emit('click-item', item)
    },
  },
}
</script>

<style scoped>
nav {
  background-color: var(--color-carmesi-700);
  font-size: 20px;
  width: 100%;
  height: 100%;
  position: fixed;
  overflow: hidden;
}

ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
  width: 100%;
}

li {
  padding: 5px 20px;
  width: 100%;
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

@media (min-width: 768px) {
  ul {
    display: flex;
  }
}
</style>
