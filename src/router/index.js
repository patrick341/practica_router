import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import prueba2 from '@/components/prueba2'
import prueba3 from '@/components/prueba3'
import pruebas from '@/components/pruebas'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/',
      name: 'prueba2',
      component: prueba2,
    },
    {
      path: '/',
      name: 'prueba3',
      component: prueba3,
    },
    {
      path: '/',
      name: 'pruebas',
      component: pruebas,
    }
  ]
})
