<template>
  <section class="section">
    <div class="tile is-ancestor">
      <div class="tile is-3 is-child">
        <figure class="image is-3by4">
          <img src="~/assets/portfolio.jpg" />
        </figure>
      </div>
      <div class="tile is-9 is-vertical is-parent box">
        <p class="title is-1">About me</p>
        <div class="tile is-parent">
          <div class="tile is-child is-4 column">
            <p>
              <span class="subtitle is-3">Name</span>
            </p>
            <p>刀根 諒（Makoto Tone）</p>
          </div>
          <div class="tile is-child is-4 column">
            <p>
              <span class="subtitle is-3">Age</span>
            </p>
            <p>{{ age }}</p>
          </div>
          <div class="tile is-child is-4 column">
            <p>
              <span class="subtitle is-3">Working for...</span>
            </p>
            <p><a href="https://aidemy.net/">Aidemy.inc</a></p>
          </div>
        </div>
        <div class="tile is-parent">
          <div class="tile is-child is-4 column">
            <p>
              <span class="subtitle is-3">Twitter</span>
            </p>
            <p><a href="https://twitter.com/Swordroot_M">@Swordroot_M</a></p>
          </div>
          <div class="tile is-child is-4 column">
            <p>
              <span class="subtitle is-3">Qiita</span>
            </p>
            <p><a href="https://qiita.com/Swordroot_M">@Swordroot_M</a></p>
          </div>
          <div class="tile is-child is-4 column">
            <p>
              <span class="subtitle is-3">Github</span>
            </p>
            <p><a href="https://github.com/Swordroot">@Swordroot</a></p>
          </div>
        </div>
        <div class="tile is-parent">
          <div class="tile is-child is-8 column">
            <p>
              <span class="subtitle is-3">Education</span>
            </p>
            <p>Apr 2016 - Mar 2018 Waseda University, Japan Master of Engineering</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  computed: {
    age: () => {
      const _age = new Date().getFullYear() - 1993;
      const _month = new Date().getMonth() + 1;
      const _date = new Date().getDate();
      if (_month > 9) {
        return _age;
      } else if (_month < 9) {
        return _age - 1;
      } else {
        return _date < 7 ? _age - 1 : _age;
      }
    }
  }
});
</script>
