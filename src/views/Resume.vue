<template>
  <div class="container">
    <aside>
      <div class="profile-wrap fadeInDown">
        <h4>{{ profile.name }}</h4>
        <h6>{{ profile.title }}</h6>
        <Header title="Personal Info"/>
        <div>{{ profile.degree }}</div>
        <div>
          <div><i class="fa fa-linkedin"></i></div>
          <a :href="`https://${profile.linkedin}`">
            {{ profile.linkedin }}
          </a>
        </div>
        <div>
          <div><i class="fa fa-github"></i></div>
          <a :href="`https://${profile.github}`">
            {{ profile.github }}
          </a>
        </div>
        <div>
          <div>Email</div>
          <a :href="`emailto:${profile.email}`">{{ profile.email }}</a>
        </div>
        <div>
          <div>Phone</div>
          <a :href="`tel:${profile.phone}`">{{ profile.phone }}</a>
        </div>
        <div>
          <div>Address</div>
          <a :href="profile.maps">{{ profile.address }}</a>
        </div>
      </div>
      <div class="skill-wrap">
        <Header title="Skills"/>
        <div :key="skill" v-for="progress, skill in skills">
          {{ skill }}
          <div class="progress">
            <div class="progress-bar bg-info" :style="`width: ${progress}%`" :aria-valuenow="progress" aria-valuemax="100"/>
          </div>
        </div>
      </div>
    </aside>
    <main>
      <div class="main-wrap">
        <Header title="Summary"/>
        <Description :items="summary"/>
        <Header title="Experiences"/>
        <Experience v-bind="experience" :key="experience.id" v-for="experience in experiences"/>
        <Header title="Awards"/>
        <div v-for="award in awards">
          <small class="ml-3">{{ award }}</small>
        </div>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { Component, Provide, Vue } from 'vue-property-decorator';
import Header from '@/components/Header.vue';
import Description from '@/components/Description.vue';
import Experience from '@/components/Experience.vue';

@Component({
  components: {
    Header,
    Description,
    Experience,
  },
})
export default class Resume extends Vue {
  @Provide() private profile = require(`@/assets/profile.json`);
  @Provide() private skills = require(`@/assets/skills.json`);
  @Provide() private summary = require(`@/assets/summary.json`);
  @Provide() private experiences = require(`@/assets/experiences.json`);
  @Provide() private awards = require(`@/assets/awards.json`);

  private mounted() {
    for (let i = 0; i < this.experiences.length; i++) {
      setTimeout(() => {
        this.$set(this.experiences[i], 'classes', ['fadeInLeft']);
      }, (i + 1) * 500);
    }
  }
}
</script>
