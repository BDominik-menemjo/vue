import { createRouter, createWebHistory } from "vue-router";
import Kezdolap from "../components/Kezdolap.vue";
import Kedvencek from "../components/Kedvencek.vue";
const routes=[
    {
        path:'/',
        component: Kezdolap
    },
    {
        path:'/kedvencek',
        component: Kedvencek
    }
];

const router=createRouter({
    history: createWebHistory(), routes
})

export default router;