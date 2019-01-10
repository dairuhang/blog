import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'
import Routes from './routes'
Vue.config.productionTip = false;
Vue.use(VueAxios,axios);
Vue.use(VueRouter);
//自定义过滤器
Vue.filter('to-uppercase',function (value) {
    return value.toUpperCase();
});
Vue.filter('snippet',function (value) {
    return value.slice(0,100)+'...';
});
//创建路由
const router = new VueRouter({
    routes:Routes,
    mode:'history'
});
new Vue({
  render: h => h(App),
    router:router
}).$mount('#app');
