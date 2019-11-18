import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import elementui from "element-ui"
import "./element-variables.scss"

Vue.use(elementui)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
