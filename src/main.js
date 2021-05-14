import Vue from 'vue'
import App from './App.vue'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faPlus,
  faMinus,
  faCheck,
  faTrash,
} from '@fortawesome/free-solid-svg-icons'
library.add(faPlus, faMinus, faCheck, faTrash)

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
}).$mount('#app')
