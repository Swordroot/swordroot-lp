<template>
  <div>
    <heroArea />
    <aboutMe />
    <skills />
    <contact />
    {{$data.text}}
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import heroArea from "~/components/hero_area.vue";
import aboutMe from "~/components/about_me.vue";
import skills from "~/components/skills/skills.vue";
import contact from "~/components/contact.vue";
import htmltest from "~/components/works/index.vue";
export default Vue.extend({
  components: {
    heroArea,
    aboutMe,
    skills,
    contact,
    htmltest
  },
  async asyncData(context) {
    try {
      const resp = await context.app.$ogpGetter(
        "https://aidemy.net/courses/4100"
      );
      return {
        text: resp
      };
    } catch (error) {
      return { text: "err" };
    }
  }
});
</script>
