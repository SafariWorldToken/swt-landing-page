import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import VueSmoothScroll from 'vue3-smooth-scroll'
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
import Moralis from './plugins/moralis'
import Router from './router'
import AOS from 'aos'
import 'aos/dist/aos.css'



const app = createApp(App)

app.AOS = new AOS.init({ disable: "phone", once: true });

app.component('Accordion', Accordion)
app.component('AccordionTab', AccordionTab)
.provide('$moralis', Moralis)
.use(Router)
.use(AOS)
.use(store)
.use(VueSmoothScroll)
.mount('#app')
