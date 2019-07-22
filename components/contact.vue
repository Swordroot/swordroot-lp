<template>
  <section class="section">
    <div class="tile is-ancestor">
      <div class="tile is-12 is-vertical is-parent box">
        <p class="title is-1">Contact</p>
        <div class="tile is-parent">
          <div class="tile is-child is-12 column">
            <form @submit.prevent="sendInquiry">
              <div class="field">
                <label class="label">Name</label>
                <div class="control">
                  <input
                    class="input"
                    type="text"
                    placeholder="e.g Makoto Tone"
                    v-model="senderName"
                    :class="nameIsDanger"
                  />
                </div>
                <p class="help is-danger" :class="nameEmptyMessageIsHidden">Enter your name</p>
              </div>

              <div class="field">
                <label class="label">Email</label>
                <div class="control">
                  <input
                    class="input"
                    type="email"
                    placeholder="e.g. makoto.tone@swordroot.com"
                    v-model="email"
                    :class="emailIsDanger"
                  />
                </div>
                <p
                  class="help is-danger"
                  :class="emailEmptyMessageIsHidden"
                >Enter your email address</p>
              </div>

              <div class="field">
                <label class="label">Message</label>
                <div class="control">
                  <textarea
                    class="textarea"
                    :class="messageIsDanger"
                    placeholder="Textarea"
                    v-model="message"
                  ></textarea>
                </div>
                <p class="help is-danger" :class="messageEmptyMessageIsHidden">Enter your message</p>
              </div>

              <div class="field is-grouped">
                <div class="control">
                  <button class="button is-link" :disabled="isAbleToSendContact">Submit</button>
                  <p
                    class="help is-danger"
                    :class="somethingWentWrong"
                  >Failed! Something went wrong.</p>
                  <p class="help is-danger" :class="somethingWentWrong">Please send twitter DM.</p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="modal" :class="isModalShowing">
      <div class="modal-background" @click="closeModal()"></div>
      <div class="modal-content">
        <div class="box" style="text-align: center">
          <p class="title is-1">Successfully sent.</p>
          <button class="button" @click="closeModal()">close</button>
        </div>
      </div>
      <button class="modal-close is-large" aria-label="close" @click="closeModal()"></button>
    </div>
  </section>
</template>
<script lang="ts">
import axios from "axios";
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      senderName: "",
      email: "",
      message: "",
      somethingWentWrongFlag: false,
      showingModal: false
    };
  },
  computed: {
    nameIsDanger: function() {
      return this.$data.senderName === "" ? "is-danger" : "";
    },
    nameEmptyMessageIsHidden: function() {
      return this.$data.senderName === "" ? "" : "is-hidden";
    },
    emailIsDanger: function() {
      return this.$data.email === "" ? "is-danger" : "";
    },
    emailEmptyMessageIsHidden: function() {
      return this.$data.email === "" ? "" : "is-hidden";
    },
    messageIsDanger: function() {
      return this.$data.message === "" ? "is-danger" : "";
    },
    messageEmptyMessageIsHidden: function() {
      return this.$data.message === "" ? "" : "is-hidden";
    },
    somethingWentWrong: function() {
      return this.$data.somethingWentWrongFlag ? "" : "is-hidden";
    },
    isModalShowing: function() {
      return this.$data.showingModal ? "is-active" : "";
    },
    isAbleToSendContact: function() {
      const flag = !this.$data.senderName || !this.$data.email || !this.$data.message
      return flag;
    }
  },
  methods: {
    async sendInquiry(event) {
      await axios
        .post(
          "/api/contact",
          {
            attachments: [
              {
                fallback: "LPから問い合わせがありました",
                pretext: "LPから問い合わせがありました",
                color: "#00D000",
                fields: [
                  {
                    title: "お名前",
                    value: this.$data.senderName,
                    short: true
                  },
                  {
                    title: "EMail",
                    value: this.$data.email,
                    short: true
                  },
                  {
                    title: "本文",
                    value: this.$data.message,
                    short: false
                  }
                ]
              }
            ]
          }
        )
        .then(() => {
          this.openModal();
        })
        .catch(() => {
          this.$data.somethingWentWrong = true;
        });
    },
    closeModal() {
      this.$data.showingModal = false;
    },
    openModal() {
      this.$data.showingModal = true;
    }
  }
});
</script>
