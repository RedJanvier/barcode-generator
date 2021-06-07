<template>
  <div id="app">
    <main v-if="show">
      <input
        v-model="ourLength"
        style="font-size: 16px; padding: 5px 10px; margin: 0 0 4rem 0;"
      />
      <br />
      <section
        style="display: grid; grid-template-columns: repeat(3, 1fr); max-width: 600px;"
      >
        <div v-for="x in barcodes" :key="x" style="border: 1px dashed grey;">
          <!-- <h3>Koko Market</h3> -->
          <barcode
            text="Koko Market"
            :width="1.5"
            :height="80"
            flat
            :value="x"
            format="CODE128B"
          >
            Show this if the rendering fails.
          </barcode>
        </div>
      </section>
    </main>
    <div v-else>
      <navbar />
      <pricing />
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { BootstrapVue } from "bootstrap-vue";

// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import barcode from "vue-barcode";
import pricing from "./components/pricing.vue";
import navbar from "./components/navbar.vue";

export default {
  name: "App",
  data() {
    return {
      ourLength: 1,
      barcodes: [],
      show: false,
    };
  },

  methods: {
    generateCode() {
      return (
        Math.random()
          .toString(36)
          .substring(2, 15) +
        Math.random()
          .toString(36)
          .substring(2, 5)
      );
    },
  },
  created() {
    if (!location.search) return;
    if (
      !location.search.includes("?n=") ||
      !location.search.includes("&token=")
    )
      return;
    const ourLength = +location.search.split("?n=")[1].split("&token=")[0];
    const token = location.search.split("?n=")[1].split("&token=")[1];
    if (!token || !ourLength) return;
    this.ourLength = ourLength;
    this.show = true;
    const stored = localStorage.getItem(token);

    if (!stored) {
      for (let i = 1; i <= this.ourLength; i++) {
        this.barcodes.push(this.generateCode());
      }
      localStorage.setItem(token, JSON.stringify(this.barcodes));
    } else this.barcodes = JSON.parse(stored);
  },
  components: {
    barcode,
    pricing,
    navbar,
  },
};
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
</script>

<style>
* {
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
