import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';

// pages
import Galeries from './pages/Galeries.vue';
import Contact from './pages/Contact.vue';
import Bio from './pages/Bio.vue';

Vue.config.productionTip = false

const routes = [
  { path: '/', component: Galeries},
  { path: '/galeries', component: Galeries },
  { path: '/contact', component: Contact },
  { path: '/bio', component: Bio },
];

const router = new VueRouter({
  routes,
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app');