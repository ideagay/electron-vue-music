import Vue from 'vue';
import axios from 'axios';
import App from './App';
import router from './router';
import store from './store';

axios.interceptors.response.use((response) => {
  // 对响应数据做点什么
  if (response.status >= 500) {
    return console.error(response.statusText);
  }
  return response.data;
}, error => (Promise.reject(error)));

if (!process.env.IS_WEB) Vue.use(require('vue-electron'));
Vue.http = Vue.prototype.$http = axios;
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>',
}).$mount('#app');
