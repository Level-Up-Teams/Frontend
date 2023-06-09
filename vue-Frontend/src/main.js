import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'

//importamos el rooteo
import router from './router'

// importamos el css de primevue para el diseño de los componentes
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                           //icons
import 'primeflex/primeflex.css';

import InputText from 'primevue/inputtext';
import Listbox from 'primevue/listbox';
import DataView from 'primevue/dataview';
import Rating from 'primevue/rating';
import Tag from 'primevue/tag';
import Carousel from 'primevue/carousel';
import Divider from 'primevue/divider';
import Image from 'primevue/image'
import Menubar from 'primevue/menubar';
import Button from 'primevue/button';
import Avatar from 'primevue/avatar';
import Dropdown from 'primevue/dropdown';
import Toolbar from 'primevue/toolbar';
import Panel from 'primevue/panel';
import Card from 'primevue/card';
import Dialog from 'primevue/dialog';
import Calendar from "primevue/calendar";
import InputMask from "primevue/inputmask";
import InputSwitch from "primevue/inputswitch";
import InputNumber from "primevue/inputnumber";

createApp(App)
    .use(router)
    .use(PrimeVue, {ripple: true})
    .component('InputText', InputText)
    .component('ListBox', Listbox)
    .component('DataView', DataView)
    .component('Rating', Rating)
    .component('Tag', Tag)
    .component('Carousel', Carousel)
    .component('Divider', Divider)
    .component('Image', Image)
    .component('Menubar', Menubar)
    .component('Button', Button)
    .component('Avatar', Avatar)
    .component('Dropdown', Dropdown)
    .component('Toolbar', Toolbar)
    .component('Panel', Panel)
    .component('Card', Card)
    .component('Dialog', Dialog)
    .component('Calendar', Calendar)
    .component('InputMask', InputMask)
    .component('InputSwitch', InputSwitch)
    .component('InputNumber', InputNumber)
    .mount('#app')