import { createRouter, createWebHistory } from "vue-router";
import LoginView from '../components/LoginView.vue'
import RegisterView from '../components/RegisterView.vue'
import HomePageView from '../components/HomePageView.vue'


const routes = [
    {
        path: '/',
        name: HomePageView,
        component: HomePageView
    },
    {
        path: '/login',
        name: LoginView,
        component: LoginView
    },
    {
        path: '/register',
        name: RegisterView,
        component: RegisterView
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router