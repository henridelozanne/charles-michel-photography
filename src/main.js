import Vue from 'vue';
import App from './App.vue';
import i18n from './i18n';
import router from './router'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  i18n,
  vuetify,
  router
}).$mount('#app');
