import { createRouter, createWebHistory } from 'vue-router'
import HomeComponent from '../components/home/MainContent.component.vue'
import EjemploComponent from '../components/ejemplo.vue'

const routes = [
    {
        path: '/home',
        name: 'home',
        component: HomeComponent
    },
    {
        package: '/ejemplo',
        name: 'ejemplo',
        component: EjemploComponent
    }

];

let baseUrl;
if (typeof process !== 'undefined') {
    baseUrl = process.env.BASE_URL;
} else {
    baseUrl = '/'; // O un valor predeterminado adecuado para tu caso
}

const router = createRouter({
    history: createWebHistory(baseUrl),
    routes,
});

export default router;
