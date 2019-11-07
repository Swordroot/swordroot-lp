<template>
  <div class="container">aaa{{$data.text}}</div>
</template>
<script lang="ts">
import Vue from "vue";
import axios from "axios";
export default Vue.extend({
  async asyncData() {
    console.log("yeah");
    const resp = await axios.get("https://aidemy.net/courses/4100");
    console.log(resp);
    return {
      text: resp
    };
  }
});
</script>