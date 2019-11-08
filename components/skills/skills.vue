<template>
  <section class="section">
    <div class="tile is-ancestor">
      <div class="tile is-12 is-vertical is-parent box">
        <p class="title is-1">Skills</p>
        <div class="tile is-parent" v-for="row in $data.skills" v-bind:key="row.id">
          <cell
            v-for="col in row.cells"
            v-bind:key="col.id"
            :name="col.name"
            :percentage="col.percentage"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import Vue from "vue";
import cell from "./components/skills_cell.vue";
import uuid from "uuid";
export default Vue.extend({
  components: {
    cell
  },
  methods: {
    generateUuid() {
      return uuid.v4();
    }
  },
  data() {
    return {
      skills: [
        {
          id: uuid.v4(),
          cells: [
            {
              name: "Typescript",
              percentage: 80,
              id: uuid.v4()
            },
            {
              name: "Javascript",
              percentage: 80,
              id: uuid.v4()
            },
            {
              name: "PHP",
              percentage: 70,
              id: uuid.v4()
            },
            {
              name: "Ruby",
              percentage: 70,
              id: uuid.v4()
            }
          ]
        },
        {
          id: uuid.v4(),
          cells: [
            {
              name: "Express",
              percentage: 80,
              id: uuid.v4()
            },
            {
              name: "React.js",
              percentage: 70,
              id: uuid.v4()
            },
            {
              name: "Nuxt.js",
              percentage: 70,
              id: uuid.v4()
            },
            {
              name: "bulma.css",
              percentage: 70,
              id: uuid.v4()
            }
          ]
        },
        {
          id: uuid.v4(),
          cells: [
            {
              name: "Kubernetes",
              percentage: 70,
              id: uuid.v4()
            },
            {
              name: "Firebase",
              percentage: 70,
              id: uuid.v4()
            },
            {
              name: "Docker",
              percentage: 70,
              id: uuid.v4()
            }
          ]
        },
        {
          id: uuid.v4(),
          cells: [
            {
              name: "GCP",
              percentage: 70,
              id: uuid.v4()
            },
            {
              name: "AZURE",
              percentage: 70,
              id: uuid.v4()
            },
            {
              name: "AWS",
              percentage: 60,
              id: uuid.v4()
            }
          ]
        }
      ]
    };
  }
});
</script>
