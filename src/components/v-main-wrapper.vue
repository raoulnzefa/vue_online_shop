<template>
    <div class="v-main-wrapper">
        <p>{{ title }}</p>
        <vCatalog />
        <vCart />
    </div>
</template>

<script>
    import vCatalog from './v-catalog.vue'
    import vCart from './v-cart.vue'

export default {
    name: 'v-main-wrapper',
    components: {
        vCatalog,
        vCart,
    }, // дети компонента v-main-wrapper
    props: {}, // то что прилетает из родителя (извне)
    data() { // персональные данные компонента
        return {
            title: 'Main wrapper'
        }
    },
    computed: { // вычислительные св-ва компонента

    },
    methods: { // методы

    }, 
    watch: { // даёт следить за изменением чего-либо и что-то делать в зависимости от этого

    },
    mounted() { // хук, который вызовется в случае если всё приложение загружено
        console.log('Hello, I am alive!')
    }
}
</script>

<style>
    .v-main-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        max-width: 900px;
        margin: 0 auto;
    }
</style>