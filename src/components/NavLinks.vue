<template lang="pug">
nav.nav-links
  ul.nav-links__container
    li.nav-links__item(v-for='item in list', :key='item.text')
      NavLink(:info='item')
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import NavLink from './NavLink.vue';

@Component({
  components: {
    NavLink,
  },
})
export default class NavLinks extends Vue {
  @Prop({ type: Array, required: true }) list?: IappNavItemConfig[];
}
</script>

<style lang="scss" scoped>
@include b(nav, links) {
  @include e(container) {
    display: flex;

    list-style-type: none;
  }
}

@media screen and (max-width: 719px) {
  @include b(nav, links) {
    display: none;
  }
}
</style>
