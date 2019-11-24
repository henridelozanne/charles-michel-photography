import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';

// pages
import Contact from './pages/Contact.vue';
import Bio from './pages/Bio.vue';
import SendEmailSuccess from './pages/SendEmailSuccess';
import SendEmailError from './pages/SendEmailError';
import PortraitsBW from './pages/Galeries/PortraitsBW.vue';
import PortraitsColour from './pages/Galeries/PortraitsColour.vue';
import StreetLifeBW from './pages/Galeries/StreetLifeBW.vue';
import StreetLifeColour from './pages/Galeries/StreetLifeColour.vue';
import PeopleAtWorkBW from './pages/Galeries/PeopleAtWorkBW.vue';
import PeopleAtWorkColour from './pages/Galeries/PeopleAtWorkColour.vue';

Vue.config.productionTip = false

const routes = [
  { path: '/', component: StreetLifeBW},

  // galleries
  { path: '/people-at-work-bw', component: PeopleAtWorkBW },
  { path: '/people-at-work-colour', component: PeopleAtWorkColour },
  { path: '/portraits-bw', component: PortraitsBW },
  { path: '/portraits-colour', component: PortraitsColour },
  { path: '/street-life-bw', component: StreetLifeBW },
  { path: '/street-life-colour', component: StreetLifeColour },

  // other pages
  { path: '/contact', component: Contact },
  { path: '/bio', component: Bio },
  { path: '/send-email-success', component: SendEmailSuccess },
  { path: '/send-email-error', component: SendEmailError },
];

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app');
