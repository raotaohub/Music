import Vue from 'vue';
import Vuex, { createLogger } from 'vuex';

import { isDev } from '@/utils/is';
import config from './modules/config';

Vue.use(Vuex);

export default new Vuex.Store<IrootState>({
  strict: isDev,
  plugins: isDev ? [createLogger()] : [],
  state: {
    version: '0.01',
  },
  mutations: {},
  actions: {},
  modules: {
    config,
  },
});
