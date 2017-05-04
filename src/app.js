import index from './assets/style/index.css';
import Vue from 'vue';
import VueRouter from 'vue-router';
import mdzz from 'App.vue';

Vue.config.debug = true;
Vue.use(VueRouter);

import home from './components/home.vue';
import mdzzpage from './components/mdzz.vue';

const routers = [
    {path: '/foo', component: home},
    {path: '/bar', component: mdzzpage}
];

const router = new VueRouter(routers);

const mdzzApp = new Vue({
    router,
    render: h=> h(mdzz)
}).$mount('#root');
// new Vue(app);
