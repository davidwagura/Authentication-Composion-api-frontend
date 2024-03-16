import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/auth/Login.vue'
import Register from '../views/auth/Register.vue'


const routes = [
    {path: '/', component: HomeView},
    {path: '/login', component: Login},
    {path: '/register', component: Register},
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/AboutView.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;