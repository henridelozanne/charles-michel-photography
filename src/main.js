import Vue from 'vue';
import App from './App.vue';
import i18n from './i18n';
import router from './router'
import vuetify from './plugins/vuetify';
import { fb } from './firebase';
import VueConfirmDialog from 'vue-confirm-dialog';

Vue.config.productionTip = false;

Vue.use(VueConfirmDialog);
Vue.component('vue-confirm-dialog', VueConfirmDialog.default);

let app = '';

fb.auth().onAuthStateChanged(() => {
  if (!app) {
    new Vue({
        render: h => h(App),
        i18n,
        vuetify,
        router
      }).$mount('#app');
  }
})
