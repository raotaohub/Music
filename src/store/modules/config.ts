import { Module } from 'vuex';

import config from '@/config/app';
import { useStorage } from '@/hooks/storage';
import { SAVE_CONFIG } from '../type';

const [userConfig, setUserConfig] = useStorage<IappConfig>('userConfig', config);

const store: Module<IconfigState, IrootState> = {
  namespaced: true,
  state: userConfig,
  mutations: {
    [SAVE_CONFIG](state) {
      setUserConfig(state);
    },
  },
};

export default store;
