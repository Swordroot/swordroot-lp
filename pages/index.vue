<template>
  <div>
    <heroArea />
    <aboutMe />
    <template v-if="$data.works">
      <works :works="$data.works" />
    </template>
    <skills />
    <contact />
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import heroArea from "~/components/hero_area.vue";
import aboutMe from "~/components/about_me.vue";
import skills from "~/components/skills/skills.vue";
import contact from "~/components/contact.vue";
import works from "~/components/works/index.vue";
import uuid from "uuid";
export default Vue.extend({
  components: {
    heroArea,
    aboutMe,
    skills,
    contact,
    works
  },
  async asyncData(context) {
    const worksData = [
      {
        id: uuid.v4(),
        cells: [
          {
            id: uuid.v4(),
            title: "講座『SQL基礎』",
            link: "https://aidemy.net/courses/4100",
            description: "SQLの基礎的な内容を扱っている講座です。",
            ogp: {}
          }
        ]
      }
    ];
    try {
      const works = await Promise.all(
        worksData.map(async row => {
          row.cells = await Promise.all(
            row.cells.map(async el => {
              el.ogp = await context.app.$ogpGetter(el.link);
              return el;
            })
          );
          return row;
        })
      );
      return {
        works
      };
    } catch (error) {
      return { text: "err" };
    }
  }
});
</script>
