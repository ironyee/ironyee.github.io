<template>
  <div class="fadeInLeft">
    <ul>
      <template v-for="item in items">
        <li v-if="item.startsWith('\t')">{{ item }}</li>
        <div v-else style="margin-left: -20px;" v-html="item"/>
      </template>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Provide, Vue } from 'vue-property-decorator';

@Component
export default class Description extends Vue {
  @Prop() private items!: string[];
}
</script>
