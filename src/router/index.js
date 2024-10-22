import HomePage from "@/views/HomePage.vue";
import PaginationPage from "@/views/PaginationPage.vue";
import { createRouter, createWebHistory } from "vue-router";

//const baseUrl = "http://localhost:5173"
export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path:'/', component:HomePage},
        {path:'/pagination', component:PaginationPage},
        {path:`/:pathMatch(.*)*`, component:HomePage}
    ]
})