<template>
    <div class="pagination">
        <button v-if="pagination && pagination.currentPage > 1" @click="() => handleClick( pagination.currentPage - 1 )">Previous</button>
        <select name="Pagination list" @change="handleClick" :value="pagination.currentPage">
            <option v-for="(page, index) in pagination.pagesList" :key="index" :value="page"> {{ page }} </option>
        </select>
        <button v-if="pagination && pagination.currentPage < pagination.pages" @click="() => handleClick( pagination.currentPage + 1 )">Next</button>
    </div>
</template>
<script>
export default {
    props: {
        onPagination: {
            type: Function,
            default: () => {}
        }
    },
    computed: {
        pagination() {
            return this.$store.state.pagination;
        },
    },
    methods: {
        handleClick(page) {
            const currentPage = Number(page) ? page : Number(page?.target?.value);
            this.onPagination(currentPage);
        }
    }
}
</script>
