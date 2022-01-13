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
<style scoped>
    .pagination {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 10px 0 0 0;
        padding: 0;
    }

    .pagination button {
        margin: 0 10px;
        padding: 5px 10px;
        border: 0;
        border-radius: 5px;
        background-color: var(--color-ocre-500);
        font-size: 18px;
        color: white;
        cursor: pointer;
    }

    .pagination select {
        width: 100px;
        height: 30px;
        border: 0;
        border-radius: 5px;
        background-color: var(--color-ocre-500);
        font-size: 18px;
        color: white;
        cursor: pointer;
    }
</style>