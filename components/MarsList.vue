<template>
    <section>
        <ul>
            <li v-for="(pokemon, index) in items" :key="index" @click="() => handleClick(pokemon)" >
                <mars-card> 
                    <img :src="pokemon.image" :alt="pokemon.name" width="100" />
                    <h3>{{ pokemon.name }}</h3> 
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
