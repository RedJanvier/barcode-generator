<template>
  <div id="app">
    <main v-if="show">
      <h1 v-if="!done">Downloading...</h1>
      <div v-if="!done" class="lds-facebook">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <h1 v-else style="color: green;">
        Download complete!
        <span style="color: black;">If it failed try refreshing the page.</span>
      </h1>
      <br />
      <vue-html2pdf
        style="display: none;"
        :show-layout="true"
        :float-layout="false"
        :enable-download="true"
        :preview-modal="true"
        :filename="'Barcode-' + name + ' ' + ((Math.random() * 10000) % 10)"
        :pdf-quality="2"
        :manual-pagination="true"
        @hasDownloaded="setDone(true)"
        pdf-format="a4"
        pdf-content-width="100%"
        ref="html2Pdf"
      >
        <section
          slot="pdf-content"
          style="display: flex; flex-direction: column; align-items: center;"
        >
          <div
            style="display: grid; grid-template-columns: repeat(3, 1fr); max-width: 900px; margin-top: 2rem;"
          >
            <div v-for="(x, i) in barcodes" :key="x">
              <div style="border: 1px dashed grey;">
                <!-- <h3 style="margin-bottom: 2px">{{ name }}</h3> -->
                <barcode
                  text=" "
                  :width="0.9"
                  :height="50"
                  flat
                  :value="x"
                  format="CODE128B"
                >
                  Show this if the rendering fails.
                </barcode>
              </div>
              <br v-if="(i + 1) % 18 === 0" />
              <br v-if="(i + 1) % 18 === 0" />
              <br v-if="(i + 1) % 18 === 0" />
              <br v-if="(i + 1) % 18 === 0" />
              <br v-if="(i + 1) % 18 === 0" />
              <br v-if="(i + 1) % 18 === 0" />
              <br v-if="(i + 1) % 18 === 0" />
              <br v-if="(i + 1) % 18 === 0" />
              <br v-if="(i + 1) % 18 === 0" />
              <br v-if="(i + 1) % 18 === 0" />
              <br v-if="(i + 1) % 18 === 0" />
              <br v-if="(i + 1) % 18 === 0" />
              <br v-if="(i + 1) % 18 === 0" />
              <br v-if="(i + 1) % 18 === 0" />
              <br v-if="(i + 1) % 18 === 0" />
              <br v-if="(i + 1) % 18 === 0" />
              <br v-if="(i + 1) % 18 === 0" />
              <br v-if="(i + 1) % 18 === 0" />
              <br v-if="(i + 1) % 18 === 0" />
              <br v-if="(i + 1) % 18 === 0" />
              <br v-if="(i + 1) % 18 === 0" />
            </div>
          </div>
        </section>
      </vue-html2pdf>
    </main>
    <div v-else>
      <navbar />
      <banner />
      <pricing />
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { BootstrapVue } from 'bootstrap-vue';

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import barcode from 'vue-barcode';
import pricing from './components/pricing.vue';
import navbar from './components/navbar.vue';
import banner from './components/banner.vue';
// import VueHtml2pdf from 'vue-html2pdf';

export default {
  name: 'App',
  data() {
    return {
      done: false,
      ourLength: 1,
      barcodes: [],
      show: false,
      name: 'sample-company',
    };
  },

  methods: {
    setDone(value) {
      this.done = value;
      setTimeout(() => {
        location.href = '/';
      }, 5000);
    },
    generateReport() {
      this.$refs.html2Pdf.generatePdf();
    },
    printNow() {
      this.$refs.html2Pdf.generatePdf();
    },
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
      !location.search.includes('?n=') ||
      !location.search.includes('&token=') ||
      !location.search.includes('&name=')
    )
      return;
    const token = location.search
      .split('?n=')[1]
      .split('&token=')[1]
      .split('&name=')[0];
    const name = location.search
      .split('?n=')[1]
      .split('&token=')[1]
      .split('&name=')[1];
    const ourLength = +location.search.split('?n=')[1].split('&token=')[0];
    if (!token || !ourLength || !name) return;
    this.ourLength = ourLength;
    this.show = true;
    this.name = name;
    const stored = localStorage.getItem(token);

    if (!stored) {
      for (let i = 1; i <= this.ourLength; i++) {
        this.barcodes.push(this.generateCode());
      }
      localStorage.setItem(token, JSON.stringify(this.barcodes));
    } else this.barcodes = JSON.parse(stored);
  },
  mounted() {
    this.printNow();
  },
  components: {
    barcode,
    pricing,
    navbar,
    banner,
    // VueHtml2pdf,
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
.lds-facebook {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-facebook div {
  display: inline-block;
  position: absolute;
  left: 8px;
  width: 16px;
  background: #a01a1a;
  animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
}
.lds-facebook div:nth-child(1) {
  left: 8px;
  animation-delay: -0.24s;
}
.lds-facebook div:nth-child(2) {
  left: 32px;
  animation-delay: -0.12s;
}
.lds-facebook div:nth-child(3) {
  left: 56px;
  animation-delay: 0;
}
@keyframes lds-facebook {
  0% {
    top: 8px;
    height: 64px;
  }
  50%,
  100% {
    top: 24px;
    height: 32px;
  }
}
</style>
