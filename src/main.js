import Vue from 'vue'
import Vant from 'vant';
import 'vant/lib/index.css';
import App from './App.vue'
import router from './router'
import store from './store'
import './config/rem'
import { getHttp, postHttp} from './http/index'
Vue.config.productionTip = false;

Vue.prototype.$get = getHttp;
Vue.prototype.$post = postHttp;
Vue.use(Vant);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
