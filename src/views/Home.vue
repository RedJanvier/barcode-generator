<template>
  <div class="about">
    <navbar />
    <banner />
    <pricing />
  </div>
</template>

<script>
import Vue from 'vue';
import { BootstrapVue } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import pricing from '../components/pricing.vue';
import navbar from '../components/navbar.vue';
import banner from '../components/banner.vue';

export default {
  name: 'Home',
  components: {
    pricing,
    navbar,
    banner,
  },
};
Vue.use(BootstrapVue);
</script>
