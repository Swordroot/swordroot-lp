<template>
  <section class="section">
    <div class="tile is-ancestor">
      <div class="tile is-12 is-vertical is-parent box">
        <p class="title is-1">Works</p>
        <div class="tile is-parent" v-for="row in works" v-bind:key="row.id">
          <cell
            v-for="col in row.cells"
            v-bind:key="col.id"
            :title="col.title"
            :link="col.link"
            :description="col.description"
            :ogp_title="col.ogp.title"
            :ogp_image_src="col.ogp.image"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import Vue from "vue";
import cell from "./components/works_cell.vue";
export default Vue.extend({
  props: {
    works: Array
  },
  components: {
    cell
  }
});
</script>