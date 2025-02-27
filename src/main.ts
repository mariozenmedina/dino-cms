import '@fontsource/raleway';
import '@fontsource/raleway/100.css';
import '@fontsource/raleway/300.css';
import '@fontsource/raleway/700.css';
import '@fontsource/raleway/900.css';
import { createApp } from 'vue';
import { createWebHistory, createRouter, type RouteRecordRaw } from 'vue-router';

import App from '@/App.vue';
import Construction from '@/components/screens/Construction.vue';
import Collections from '@/components/screens/Collections.vue';

const routes = [
    {
        path: '/',
        name: "construction",
        component: Construction
    },
    {
        path: '/collections',
        name: "collections",
        component: Collections
    },
    {
        path: "/:pathMatch(.*)*",
        redirect: () => {
            return { path: '/', query: null }
        },
    }
];
  
const router = createRouter({
    history: createWebHistory(),
    routes: routes as RouteRecordRaw[],
})

createApp(App).use(router).mount('#app')
