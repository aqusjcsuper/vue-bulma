import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Component from '@/components/Component'
import TabView from '@/components/views/TabView'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/components',
      component: Component
    },
    {
      path: '/components/tab',
      component: TabView
    }
  ]
})
