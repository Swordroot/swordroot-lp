<template>
  <div>
    <heroArea/>
    <aboutMe/>
    <skills/>
    <contact/>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import heroArea from '~/components/hero_area.vue'
import aboutMe from '~/components/about_me.vue'
import skills from '~/components/skills/skills.vue'
import contact from '~/components/contact.vue'
export default Vue.extend({
  components: {
    heroArea,
    aboutMe,
    skills,
    contact
  }
})
</script>
