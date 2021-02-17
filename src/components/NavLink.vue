<template lang="pug">
AppLink(v-if='isExternal', v-bind='linkProps', is-external) {{ $t(`nav.${info.text}`) }}
router-link.nav-link(
  v-else,
  :to='info.link ? info.link : ""',
  :aria-label='linkProps["aria-label"]',
  :target='linkProps.target'
) {{ $t(`nav.${info.text}`) }}
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import { useLink } from '@/hooks/link';
import AppLink from './common/AppLink.vue';

@Component({
  components: {
    AppLink,
  },
})
export default class NavLink extends Vue {
  @Prop(Object) info!: IappNavItemConfig;

  get linkProps() {
    return useLink(this.info).props;
  }

  get isExternal() {
    return useLink(this.info).isExternal;
  }
}
</script>
