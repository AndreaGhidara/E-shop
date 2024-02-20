import { createRouter, createWebHistory } from 'vue-router';

import Home from './pages/HomePage.vue';
import About from './pages/AboutPage.vue';
import RegisterPage from './pages/auth/Register/RegisterPage.vue';
import LoginPage from './pages/auth/Login/LoginPage.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: "",
            component: Home,
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
            path: '/home',
            name: "home",
            component: Home,
        },
        {
            path: '/about',
            name: "about",
            component: About,
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

