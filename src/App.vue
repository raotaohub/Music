<template lang="pug">
#app
  NavBar
  router-view
  AppFooter
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';

import { useEventListener } from '@/hooks/event';
import { SAVE_CONFIG } from '@/store/type';

import NavBar from '@/container/NavBar.vue';
import AppFooter from '@/layouts/AppFooter.vue';

const { Mutation } = namespace('config');

@Component({
  components: {
    NavBar,
    AppFooter,
  },
})
export default class App extends Vue {
  @Mutation(SAVE_CONFIG) saveConfig!: () => void;

  created() {
    useEventListener('beforeunload', () => {
      this.saveConfig();
    });
  }
}
</script>
