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
    <h1 v-else style="color: crimson;">Invalid/expired link</h1>
  </div>
</template>

<script>
import barcode from 'vue-barcode';

export default {
  name: 'App',
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
      !location.search.includes('?n=') ||
      !location.search.includes('&token=')
    )
      return;
    const ourLength = +location.search.split('?n=')[1].split('&token=')[0];
    const token = location.search.split('?n=')[1].split('&token=')[1];
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
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
