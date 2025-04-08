import { createRouter, createWebHistory } from "vue-router";
import Favorites from "../components/Favorites.vue"
import Kezdolap from "../components/Kezdolap.vue";

const routes = [
    {
        path: '/',
        component: Kezdolap
    },
    {
        path: '/Favorites',
        component: Favorites
    }
];

const router = createRouter({
    history: createWebHistory(), routes
})

export default router;