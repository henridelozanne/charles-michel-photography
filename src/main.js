import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';

// pages
import Contact from './pages/Contact.vue';
import Bio from './pages/Bio.vue';
import BlackAndWhite from './pages/Galeries/BlackAndWhite.vue';
import Colors from './pages/Galeries/Colors.vue';
import Childhood from './pages/Galeries/Childhood.vue';
import Portraits from './pages/Galeries/Portraits.vue';
import Street from './pages/Galeries/Street.vue';

Vue.config.productionTip = false

const routes = [
  { path: '/', component: BlackAndWhite},
  { path: '/contact', component: Contact },
  { path: '/bio', component: Bio },
  { path: '/black-and-white', component: BlackAndWhite },
  { path: '/colors', component: Colors },
  { path: '/childhood', component: Childhood },
  { path: '/portraits', component: Portraits },
  { path: '/street', component: Street },
];

const router = new VueRouter({
  routes,
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app');