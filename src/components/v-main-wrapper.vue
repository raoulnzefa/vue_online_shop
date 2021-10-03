<template>
    <div class="v-main-wrapper">
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
        <!-- <p>{{ title }}</p>
        <vCatalog />
        <vCart 
            v-if="CART.length"
            v-bind:cart_data="CART"
        /> -->
    </div>
</template>

<script>
    // import vCatalog from './v-catalog.vue'
    // import vCart from './v-cart.vue'
    import {mapGetters} from 'vuex'

export default {
    name: 'v-main-wrapper',
    // components: { // дети компонента v-main-wrapper
    //     vCatalog,
    //     vCart,
    // }, 
    props: { // то что прилетает из родителя (откуда-то извне)

    }, 
    data() { // персональные данные компонента
        return {
            title: 'Main wrapper'
        }
    },
    computed: { // вычислительные св-ва компонента
        ...mapGetters([
            'CART'
        ])
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
        max-width: 900px;
        margin: 0 auto;
    }
</style>