import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'

import 'axios'

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
import Checkbox from 'primevue/checkbox';

createApp(App)
    .use(PrimeVue, {ripple: true})
    .component('InputText', InputText)
    .component('Divider', Divider)
    .component('Image', Image)
    .component('Menubar', Menubar)
    .component('Button', Button)
    .component('Avatar', Avatar)
    .component('Dropdown', Dropdown)
    .component('Checkbox', Checkbox)
    .mount('#app')