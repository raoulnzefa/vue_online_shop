import axios from 'axios';
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

let store = new Vuex.Store({
    state: { // тут хранятся все данные, переменные, объекты и т.д.
        products: [],
        cart: [],
    },
    mutations: { // с помощью мутаций меняем данные состояний в state. СИНХРОННЫ. ОДИН В ОДИН МОМЕНТ.
        SET_PRODUCTS_TO_STATE: (state, products) => {
            state.products = products;
        },

        SET_CART: (state, product) => {
            if (state.cart.length) {
                let isProductExists = false;
                state.cart.map(function(item) {
                    if (item.article === product.article) {
                        console.log(isProductExists = true);
                        item.quantity++;
                    }
                })
                if (!isProductExists) {
                    state.cart.push(product);
                }
            } else {
                state.cart.push(product);
            }
        },

        REMOVE_FROM_CART: (state, index) => {
            state.cart.splice(index, 1);
        }
    },
    actions: { // ЭКШНЫ(методы). АСИНХРОННЫ, МНОГО В ОДИН МОМЕНТ.
        GET_PRODUCTS_FROM_API({commit}) {   // это promise 
            return axios('http://localhost:3000/products', {
                method: "GET"
            })
            .then((products) => {
                commit('SET_PRODUCTS_TO_STATE', products.data);
                return products;
            })
            .catch((error) => {
                console.log(error)
                return error;
            })
        },

        ADD_TO_CART({commit}, product) {
            commit('SET_CART', product);
        },

        DELETE_FROM_CART({commit}, index) {
            commit('REMOVE_FROM_CART', index);
        }
    },
    getters: { // даёт возможность получить данные из state
        PRODUCTS(state) {
            return state.products;
        },
        CART(state) {
            return state.cart;
        }
    }
})

export default store;