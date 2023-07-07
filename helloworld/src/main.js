import Vue from 'vue'
import App from './App.vue'
import 'ant-design-vue/dist/antd.css'
import Antd from 'ant-design-vue'
// import myLib from './dist/myLib.common'
import myLib from 'myLib'

Vue.use(Antd)

const { MyDialog } = myLib
Vue.config.productionTip = false

console.log(MyDialog)
Vue.component(MyDialog.name, MyDialog)

new Vue({
  render: (h) => h(App),
}).$mount('#app')
