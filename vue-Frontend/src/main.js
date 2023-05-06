import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'

// importamos el css de primevue para el diseño de los componentes
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                           //icons
import 'primeflex/primeflex.css';


import InputText from 'primevue/inputtext';
import Divider from 'primevue/divider';
import Image from 'primevue/image'
import Menubar from 'primevue/menubar';
import Button from 'primevue/button';
import Avatar from 'primevue/avatar';
import Dropdown from 'primevue/dropdown';
import Panel from "primevue/panel";
import Card from "primevue/card";

createApp(App)
    .use(PrimeVue, {ripple: true})
    .component('InputText', InputText)
    .component('Divider', Divider)
    .component('Image', Image)
    .component('Menubar', Menubar)
    .component('Button', Button)
    .component('Avatar', Avatar)
    .component('Dropdown', Dropdown)
    .component('Panel', Panel)
    .component('Card', Card)
    .mount('#app')