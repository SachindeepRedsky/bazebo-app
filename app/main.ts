import Vue from 'nativescript-vue'
import Login from './components/pages/Login'
// import Register from './components/pages/Register'
// import ResetPassword from './components/pages/ResetPassword'
// import ContactUs from './components/pages/ContactUs';
// import AboutUs from './components/pages/AboutUs';

import store from './store'
import VueDevtools from 'nativescript-vue-devtools'

if (TNS_ENV !== 'production') {
  Vue.use(VueDevtools)
}

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')

Vue.registerElement(
  'RadSideDrawer',
  () => require('nativescript-ui-sidedrawer').RadSideDrawer
)

new Vue({
  store,
  render: h => h('frame', [h(Login)])
}).$start()
