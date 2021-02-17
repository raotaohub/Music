<template lang="pug">
.view-error
  h1 Error 404
  blockquote {{ getMsg() }}
  router-link(to='/', aria-label='go to home') Take me home.
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';

const { State } = namespace('config');
const msgs = [
  `There's nothing here.`,
  `How did we get here?`,
  `That's a Four-Oh-Four.`,
  `Looks like we've got some broken links.`,
];
const getRandomIndex = (max: number) => Math.floor(Math.random() * max);

@Component
export default class Error extends Vue {
  @State('notFoundMessage') message!: string[];

  getMsg() {
    return this.message
      ? this.message[getRandomIndex(this.message.length)]
      : msgs[getRandomIndex(msgs.length)];
  }
}
</script>
