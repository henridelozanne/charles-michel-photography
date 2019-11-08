import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';

// pages
import Contact from './pages/Contact.vue';
import Bio from './pages/Bio.vue';
import BlackAndWhite from './pages/Galeries/BlackAndWhite.vue';
import Colors from './pages/Galeries/Colors.vue';
import Children from './pages/Galeries/Children.vue';
import Portraits from './pages/Galeries/Portraits.vue';
import Street from './pages/Galeries/Street.vue';

Vue.config.productionTip = false

const routes = [
  { path: '/', component: BlackAndWhite},
  { path: '/contact', component: Contact },
  { path: '/bio', component: Bio },
  { path: '/galeries/black-and-white', component: BlackAndWhite },
  { path: '/galeries/colors', component: Colors },
  { path: '/galeries/children', component: Children },
  { path: '/galeries/portraits', component: Portraits },
  { path: '/galeries/street', component: Street },
];

const router = new VueRouter({
  routes,
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app');