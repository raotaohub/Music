import Vue from 'vue';

import router from './router';
import store from './store';
import i18n from './plugins/i18n';
import './plugins/interceptors';
import './plugins/registerServiceWorker';
import './plugins/hooks';

import './styles/index.scss';

import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
