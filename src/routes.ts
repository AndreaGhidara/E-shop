
import { createRouter, createWebHistory } from 'vue-router';

//PAGES
import Home from './pages/HomePage.vue';
import RegisterPage from './pages/auth/Register/RegisterPage.vue';
import LoginPage from './pages/auth/Login/LoginPage.vue';
import Dashboard from './pages/auth/Dashboard/Dashboard.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: "",
            component: LoginPage,
        },
        {
            path: '/login',
            name: "login",
            component: LoginPage,
        },
        {
            path: '/register',
            name: "register",
            component: RegisterPage,
        },
        {
            path: '/dashboard',
            name: "dashboard",
            component: Dashboard,
        },
        {
            path: '/home',
            name: "home",
            component: Home,
        },
        {
            path: '/about',
            name: "about",
            component:()=>import('./pages/AboutPage.vue')  // Lazy load

        },
    ],
    // scrollBehavior(to, from, savedPosition) {
    //     if (to.hash) {
    //         return { selector: to.hash, behavior: 'smooth' };
    //     } else {
    //         return { x: 0, y: 0 };
    //     }
    // }
});

export { router };

