import Vue from 'vue';
import App from './App.vue';
import VueHtml2pdf from 'vue-html2pdf';
import router from './router'

Vue.config.productionTip = false;
Vue.use(VueHtml2pdf);

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app');
