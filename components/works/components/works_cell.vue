<template>
  <div class="tile is-child is-3 column">
    <a :href="link">
      <div class="card">
        <div class="card-image">
          <figure class="image is-2by1">
            <img :src="ogp_image_src" alt="ogp_title" />
          </figure>
        </div>
        <div class="card-content">
          <div class="content">
            <p class="title is-4">{{title}}</p>
            {{description}}
          </div>
        </div>
      </div>
    </a>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    title: String,
    link: String,
    description: String,
    ogp_title: String,
    ogp_image_src: String
  }
});
</script>