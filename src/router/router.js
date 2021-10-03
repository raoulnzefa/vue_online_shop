import Vue from 'vue'
import Router from 'vue-router'

import vCatalog from '../components/v-catalog'
import vCart from '../components/v-cart'

Vue.use(Router);

let router = new Router( {
    mode: 'history', // !!! Добавлено оционально !! Убрать при необходимости.
    routes: [
        {
            path: '/',
            name: 'catalog',
            component: vCatalog
        },
        {
            path: '/cart',
            name: 'cart',
            component: vCart,
            props: true //если хотим при переходе через роут передавать props, то это нужно указать
        }
    ]
})

export default router;
