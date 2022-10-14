<template>
  <section class="layout-section">
    <the-header class="the-header" :menu-items="menuItems"></the-header>
    <main class="main-content">
      <Nuxt />
    </main>
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
          url: '/',
        },
        {
          name: 'Pokedex',
          url: '/pokedex',
        },
      ],
    }
  },
}
</script>

<style>
.layout-section {
  display: grid;
  grid: 'header' 60px 'content' auto 'footer' 50px;
  min-height: 100vh;
}
.main-content {
  grid-area: content;
  display: flex;
  justify-content: center;
}
.the-header {
  grid-area: header;
}
.the-footer {
  grid-area: footer;
}
</style>
