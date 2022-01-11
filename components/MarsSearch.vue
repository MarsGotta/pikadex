<template>
    <section>
        <mars-field :on-input="handleInput" :placeholder="placeholder" :value="search"/>
        <mars-button @click="handleClick"> Search </mars-button>
    </section>
</template>
<script>
export default {
    props: {
        placeholder: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            input: ''
        }
    },
    computed: {
        search() {
            return this.$store.state.search;
        }
    },
    methods: {
        handleInput(value) {
            this.input = value;
        },
        handleClick() {
            this.$emit('search', this.input);
        }
    }
}
</script>
