import { createRouter, createWebHistory } from 'vue-router';

import Home from './pages/HomePage.vue';
import About from './pages/AboutPage.vue';
import LandingTest from './pages/Convengo/LandingAppPage.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: "",
            component: Home,
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
        {
            path: '/test',
            name: "test",
            component: LandingTest,
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

