import { createRouter, createWebHistory } from 'vue-router'
import HomeComponent from '../components/home/MainContent.component.vue'
import CoachesService from '../components/CoachesList/CoachesList.component.vue'
import GameComponent from '../components/videogames/games.component.vue'

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'home',
        component: HomeComponent
    },
    {
        path: '/coaches',
        name: 'coaches',
        component: CoachesService
    },
    {
        path: '/games',
        name: 'games',
        component: GameComponent
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
