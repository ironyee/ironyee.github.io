<template>
  <div class="header">
    {{ title }}
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Header extends Vue {
  @Prop() private title!: string;
}
</script>

<style scoped>
.header {
  border-top: solid 1px;
  border-bottom: solid 1px;
}
</style>
