import Vue from 'vue'
import App from './App.vue'
import '@/assets/css/tailwind.css'
import { Chart } from 'chart.js'
import Chartkick from 'vue-chartkick'
import { VueSpinners } from '@saeris/vue-spinners'

import router from '@/router/index'
import { dollarFilter, percentFilter } from '@/filters'
Vue.config.productionTip = false

//Agregar componentes de terceros
Vue.use(VueSpinners)
Vue.use(Chartkick.use(Chart))

//Registro de un nuevo filtro
Vue.filter('dollar', dollarFilter)
Vue.filter('percent', percentFilter)

//Aplicación
new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
