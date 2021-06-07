import Vue from 'vue';
import App from './App.vue';
import VueHtml2pdf from 'vue-html2pdf';

Vue.config.productionTip = false;
Vue.use(VueHtml2pdf);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
