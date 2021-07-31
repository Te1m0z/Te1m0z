import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);

import Index from './views/Index.vue';

const routes = [{
    path: '/',
    component: Index
}];

export default new VueRouter({
    mode: 'history',
    routes: routes,
});