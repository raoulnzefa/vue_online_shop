<template>
    <div class='v-cart-item'>
        <img class="v-cart-item__image" v-bind:src="require('../assets/images/' + cart_item_data.image)" alt="">
        <div class="v-cart-item__info">
            <p>{{cart_item_data.name}}</p>
            <p>{{cart_item_data.price}}</p>
            <p>{{cart_item_data.article}}</p>
        </div>
        <div class="c-cart_item__quantity">
            <p>Quantity:</p>
            {{cart_item_data.quantity}}
        </div>
        <button @click="deleteFromCart">Delete</button>
    </div>
</template>

<script>


export default {
    name: "v-cart-item",
    components: {},
    props: {
        cart_item_data: {
            type: Object,
            default() {
                return {}
            }
        },
    },
    data() {
        return {

        }
    },
    computed: {},
    methods: {
        deleteFromCart() {
            this.$emit('deleteFromCart');
        },
    },
    mounted() {
        this.$set(this.cart_item_data, 'quantity', 1); // $set - внутренний метод vue, которые добавляет ключ к элементу
    }
}
</script>

<style lang="scss">
    .v-cart-item {
        display: flex;
        flex-wrap: no-wrap;
        justify-content: space-between;
        align-items: center;
        box-shadow: 0 0 8px #e0e0e0;
        padding: $padding*2;
        margin-bottom: $margin*2;
        &__image {
            max-width: 100px;
        }
    }
    
</style>