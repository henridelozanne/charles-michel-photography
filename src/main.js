import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';

// pages
import Contact from './pages/Contact.vue';
import Bio from './pages/Bio.vue';
import SendEmailSuccess from './pages/SendEmailSuccess';
import SendEmailError from './pages/SendEmailError';
import BlackAndWhite from './pages/Galeries/BlackAndWhite.vue';
import Colour from './pages/Galeries/Colour.vue';
import Childhood from './pages/Galeries/Childhood.vue';
import Portrait from './pages/Galeries/Portrait.vue';
import StreetLife from './pages/Galeries/StreetLife.vue';

Vue.config.productionTip = false

const routes = [
  { path: '/', component: BlackAndWhite},
  { path: '/contact', component: Contact },
  { path: '/bio', component: Bio },
  { path: '/black-and-white', component: BlackAndWhite },
  { path: '/colour', component: Colour },
  { path: '/childhood', component: Childhood },
  { path: '/portrait', component: Portrait },
  { path: '/street-life', component: StreetLife },
  { path: '/send-email-success', component: SendEmailSuccess },
  { path: '/send-email-error', component: SendEmailError },
];

const router = new VueRouter({
  routes,
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app');
