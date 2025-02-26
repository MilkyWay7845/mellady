import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./pages/home/HomePage.vue"
import GallaryPage from "./pages/gallary/GallaryPage.vue";

export const router = createRouter({
    history: createWebHashHistory(),
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth', // Optional for smooth scrolling
            };
        }
        return { top: 0 }
    },
    routes: [
        {
            path: '/home', component: Home, alias: '/'
        },
        {
            path: '/me', component: GallaryPage
        },
        {
            path: '/minsk', component: GallaryPage
        },
        {
            path: '/kronstadt', component: GallaryPage
        },
        {
            path: '/lahta', component: GallaryPage
        }
    ]
})
