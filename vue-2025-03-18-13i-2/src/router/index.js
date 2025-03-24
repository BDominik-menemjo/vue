import { createRouter, createWebHistory } from "vue-router";
import kezdolap from "../components/kezdolap.vue";
import kedvencek from "../components/kedvencek.vue";

const routes = [
    {
        path: '/',
        component: kezdolap
    },
    {
        path: '/kedvencek',
        component: kedvencek
    }
];

const router = createRouter({
    history: createWebHistory(), routes
})

export default router;