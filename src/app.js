import './assets/style/index.css';
import Vue from 'vue';
import VueRouter from 'vue-router';
import Element from 'element-ui';
import 'element-ui/lib/theme-default/index.css';

import routerConfig from './config/routers';
import App from './components/router.vue';

Vue.use(VueRouter);
Vue.use(Element);

const router = new VueRouter({
  routes: routerConfig
});

new Vue({
    el: '#root',
    router,
    components: { App }
});
