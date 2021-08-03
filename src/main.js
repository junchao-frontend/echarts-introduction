// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import * as echarts from 'echarts' // 5.0版本的echarts引入方法
import 'echarts-gl'
Vue.prototype.$echarts = echarts

import DataV from '@jiaminghi/data-view'

Vue.use(DataV)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
