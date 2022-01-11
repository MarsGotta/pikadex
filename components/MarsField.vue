<template>
    <input :value="value" type="text" @input="handleInput" @keyup.enter="handleEnter" @keyup.esc="handleEsc" />
</template>

<script>
export default {
    props: {
        value: {
            type: String,
            default: ''
        },
        placeholder: {
            type: String,
            default: ''
        },
        onEnter: {
            type: Function,
            default: () => {}
        },
        onInput: {
            type: Function,
            default: () => {}
        },
    },
    data() {
        return {
            input: ''
        }
    },
    methods: {
        handleInput({ target }) {
            this.input = target.value;
            this.onInput(target.value);
        },
        handleEnter(e) {
            if (e.keyCode === 13) {
                this.onEnter(this.input);
            }
        },
        handleEsc(e) {
            if (e.keyCode === 27) {
                this.input = '';
            }
        }
    }
}
</script>
