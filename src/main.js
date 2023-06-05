// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'


// para peticiones
import VueResource from 'vue-resource'
Vue.use(VueResource);

// para navegacion
import VueRouter from 'vue-router'
Vue.use(VueRouter);

//////////////////////////////////////////////////////////////////////
// para tener un router

import CmpData from './components/CmpData'
import CmpUser from './components/CmpUser'
import CmpSimple from './components/CmpSimple'

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { // primero muestra el componente User
      path: '/',
      component: CmpUser
    },
    { // componente Test
      path: '/data',
      component: CmpData
    },
    {
      path: '/simple',
      component: CmpSimple
    }
  ]
});
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

Vue.config.productionTip = false

/* eslint-disable no-new */
/*new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})*/

// para que funcione con router
new Vue({
  router,
  components: { App },
  template: '<App/>'
}).$mount('#app')