import { createRouter, createWebHistory } from 'vue-router'
import HomeComponent from '../components/home/MainContent.component.vue'
import YourCoaches from "@/components/CoachesList/YourCoaches.component.vue";
import CoachesList from "@/components/CoachesList/CoachesList.component.vue";
import GameComponent from '../components/videogames/games.component.vue'
import SelectGameComponent from '../components/videogames/select-game.component.vue'
import ResourcesGameComponent from '../components/videogames/resources.component.vue'
import SeeDescription from "@/components/CoachesList/SeeDescription.component.vue";
import SelectTime from "@/components/paymentCoach/SelectTime.component.vue";
import PaymentWindow from "@/components/paymentCoach/PaymentWindow.component.vue";

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
        component: YourCoaches
    },
    {
        path: '/coachesList',
        name: 'coachesList',
        component: CoachesList
    },
    {
        path: '/coach/:id',
        name: 'coach',
        component: SeeDescription
    },
    {
        path: `/selectTime/:id`,
        name: 'selectTime',
        component: SelectTime
    },
    {
        path: `/payCoach/:id`,
        name: 'payCoach',
        component: PaymentWindow
    },
    {
        path: '/games',
        name: 'games',
        component: GameComponent
    },
    {
        path: `/game/:id`,
        name: 'selectGame',
        component: SelectGameComponent
    },
    {
        path: `/games/resource/:id`,
        name: 'resourcesGame',
        component: ResourcesGameComponent
    },

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
