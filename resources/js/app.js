window.Vue = require('vue').default;

Vue.component('v-header', require('./components/Header.vue').default);

import router from './router.js';

const app = new Vue({
    el: '#app',
    router,
});