/**
 * Created by Roidder on 2017/5/7.
 */
import App from '../components/router.vue';

export default [
    {
        path: '/',
        component: App,
        children: [
            {
                path: '/home',
                meta: { auth: false },
                component: resolve => require(['../components/mdzz.vue'], resolve)
            },
            {
                path: '/mdzz',
                component: resolve => require(['../components/home.vue'], resolve)
            },
        ]
    }

]