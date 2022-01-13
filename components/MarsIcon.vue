<template>
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        :viewBox="icon.viewBox" 
        :width="width || icon.width" 
        :height="height || icon.height" 
        @click="handleClick"
    >
        <path :d="icon.path" />
    </svg>
</template>

<script>
import { icons } from '../utils/icons.js'
export default {
    props: {
        name: {
            type: String,
            required: true,
            default: ''
        },
        width: {
            type: String,
            default: ''
        },
        height: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            icon: {}
        }
    },
    created() {
        this.icon = this.name && icons[this.name] ? icons[this.name] : {};
    },
    methods: {
        handleClick(e) {
            this.$emit('click', e);
        }
    },
}
</script>
