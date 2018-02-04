<template>
  <div class="experience" :class="classes">
    <span class="title">{{ title }} at {{ company }}</span>
    <span class="date small">{{ date }}</span>
    <Description :items="project" :key="i" v-for="project, i in projects"/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Description from '@/components/Description.vue';

@Component({
  components: {
    Description,
  },
})
export default class Experience extends Vue {
  @Prop() private classes!: string[];
  @Prop() private title!: string;
  @Prop() private company!: string;
  @Prop() private website!: string;
  @Prop() private address!: string;
  @Prop() private date!: string;
  @Prop() private projects!: object[];
}
</script>

<style lang="scss" scoped>
.experience {
  opacity: 0;
  &.fadeInLeft {
    opacity: 1;
  }
}

.title {
  margin-left: 10px;
}

.date {
  float: right;
}
</style>
