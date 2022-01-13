<template>
    <section class="mars-list">
        <ul>
            <li v-for="(pokemon, index) in items" :key="index" @click="() => handleClick(pokemon)" >
                <mars-card class="list-item"> 
                    <img :src="pokemon.image" :alt="pokemon.name" width="150" />
                    <span>
                        <h2>{{ pokemon.number }}</h2>
                        <h3>{{ pokemon.name }}</h3> 
                    </span>
                </mars-card>
            </li>
        </ul>
        <mars-pagination :on-pagination="handlePagination" />
    </section>
</template>

<script>
export default {
    props: {
        items: {
            type: Array,
            required: true,
            default: () => []
        },
        onPagination: {
            type: Function,
            default: () => {}
        },
        onCardClick: {
            type: Function,
            default: () => {}
        }
    },
    methods: {
        handlePagination(url) {
            this.onPagination(url);
        },
        handleClick(pokemon) {
            this.onCardClick(pokemon);
        }
    }
}
</script>

<style scoped>
    .mars-list {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        margin: 0;
        padding: 0;
    }
    ul {
        margin: 0;
        padding: 0;
        list-style-type: none;
        width: 100%;
    }

    .list-item {
        display: flex;
        width: 100%;
    }

    .list-item h2 {
        color: var(--color-ocre-500);
    }

    .list-item h2, .list-item h3 {
        margin: 5px;
    }

    .list-item span {
        padding: 10px;
    }
</style>