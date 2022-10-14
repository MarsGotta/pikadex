<template>
  <section class="mars-search">
    <mars-field
      class="search-field"
      :on-input="handleInput"
      :placeholder="placeholder"
      :value="search"
    />
    <mars-button class="search-button" @click="handleClick">
      Search
    </mars-button>
  </section>
</template>
<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      input: '',
    }
  },
  computed: {
    search() {
      return this.$store.state.search
    },
  },
  methods: {
    handleInput(value) {
      this.input = value
    },
    handleClick() {
      this.$emit('search', this.input)
    },
  },
}
</script>

<style scoped>
.mars-search {
  width: 100%;
  max-width: 550px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
}

.search-field {
  width: calc(100% - 100px);
  height: 25px;
}

.search-button {
  width: 85px;
  border: 0;
  border-radius: 5px;
  height: 30px;
  background-color: var(--color-ocre-500);
  color: white;
  font-size: 18px;
}
</style>
