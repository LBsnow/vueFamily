// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import VueRouter from 'vue-router'
import store from './vuex/store'



Vue.use(VueRouter);
Vue.use(Vuex);



// 定义路由组件
const Shopboard = require('components/shopboard.vue');
const Garden = require('components/garden.vue');
const Fresh = require('components/fresh.vue');
const Mellow = require('components/mellow.vue');
const Food = require('components/food.vue');
const Jin = require('components/jin.vue');
const Sale = require('components/sale.vue');
const Mainsale = require('components/mainofsale.vue');
const Maingarden = require('components/mainofgarden.vue');
const Mainfresh = require('components/mainoffresh.vue');
const Mainmel = require('components/mainofmel.vue');
const Mainfood = require('components/mainoffood.vue');
const Mainjin = require('components/mainofjin.vue');
const List = require('components/list.vue');
const Title = require('components/title.vue');






// 实例路由
var router = new VueRouter({
    routes: [{
        path: '/shopboard',
        component: Shopboard
    }, {
        path: '/sale/:id',
        component:Sale,
        children:[
        {path:'bor',component:Mainsale},
        {path:'gar',component:Maingarden},
        {path:'fre',component:Mainfresh},
        {path:'mel',component:Mainmel},
        {path:'fo',component:Mainfood},
        {path:'t',component:Mainjin}
        ]
    },{
        path:'/garden',component:Garden
    },{
        path:'/fresh',component:Fresh
    },{
        path:'/mellow',component:Mellow
    },{
        path:'/food',component:Food
    },{
        path:'/tea',component:Jin
    },{
        path:'/jiesuan',component:List
    },{
        path:'',component:Title
    }
    ]
})




/* eslint-disable no-new */
new Vue({
    store,
    el: '#app',
    template: '<App/>',
    components: { App },
    router,
    /*store*/
})
