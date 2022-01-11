<template>
    <button @click="handleClick">
        <slot></slot>
    </button>
</template>
<script>
export default {
    name: 'MarsButton',
    props: {
        type: {
            type: String,
            default: 'button'
        },
        size: {
            type: String,
            default: 'md'
        },
        color: {
            type: String,
            default: 'primary'
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        handleClick(e) {
            this.$emit('click', e);
        }
    }
}
</script>
