import { createApp } from 'vue'
import App from './App.vue'
import { createWebHistory, createRouter } from 'vue-router'

/* VUE ROUTER */
/* const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/",
            name: "construction",
            components: {
                Screen: Construction,
            },
        },
        {
            path: "/:pathMatch(.*)*",
            redirect: () => {
                return { path: '/', query: null }
            },
        }
    ],
}); */
const routes = [
    {
        path: '/',
        name: "construction",
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
    routes,
})

createApp(App).use(router).mount('#app')
