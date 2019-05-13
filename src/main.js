import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCrop, faMousePointer, faEraser, faCircle, faAngleLeft, faAngleRight, faCut, faMinus, faArrowLeft, faUndo, faPlus, faBirthdayCake,faHeartbeat,faLightbulb} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCrop, faMousePointer, faEraser, faAngleRight, faCut, faMinus, faArrowLeft, faCircle, faAngleLeft, faAngleRight, faUndo, faPlus, faBirthdayCake, faHeartbeat, faLightbulb)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
