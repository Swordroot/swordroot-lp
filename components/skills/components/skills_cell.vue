<template>
  <div class="tile is-child is-3 column">
    <p>
      <span class="subtitle is-3">{{name}}</span>
    </p>
    <p style="text-align: right">{{percentage}}%</p>
    <progress class="progress" v-bind:value="percentage" max="100">{{percentage}}%</progress>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    name: String,
    percentage: Number
  }
});
</script>