<template>
  <section class="section">
    <div class="tile is-ancestor">
      <div class="tile is-12 is-vertical is-parent box">
        <p class="title is-1">Contact</p>
        <div class="tile is-parent">
          <div class="tile is-child is-12 column">
            <form>
              <div class="field">
                <label class="label">Name</label>
                <div class="control">
                  <input class="input" type="text" placeholder="e.g Alex Smith" />
                </div>
              </div>

              <div class="field">
                <label class="label">Email</label>
                <div class="control">
                  <input class="input" type="email" placeholder="e.g. alexsmith@gmail.com" />
                </div>
              </div>

              <div class="field">
                <label class="label">Message</label>
                <div class="control">
                  <textarea class="textarea" placeholder="Textarea"></textarea>
                </div>
              </div>

              <div class="field is-grouped">
                <div class="control">
                  <button class="button is-link">Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  
})
</script>
