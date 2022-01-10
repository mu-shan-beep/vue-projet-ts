import { onMounted } from 'vue'
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/*webpackChunkName:"about"*/  "@/views/live.vue")
  },
  {
    path: '/hoots',
    name: 'Hoots',
    component: () => import(/* webpackChunkName: "about" */ '@/views/hootsStudy.vue')
  },
  {
    path: '/torefs',
    name: 'torefs',
    component: () => import(/* webpackChunkName: "about" */ '@/views/torefs.vue')
  },
  {
    path: '/refelement',
    name: 'refelement',
    component: () => import(/* webpackChunkName: "about" */ '@/views/refElement.vue')
  },
  {
    path: "/shallow",
    name: "shallow",
    component: () => import(/*webpackChunkName:"about"*/  "@/views/ShallowRef-shallowReactive.vue")
  }, {
    path: "/readonly",
    name: "readonly",
    component: () => import(/*webpackChunkName:"about"*/  "@/views/readonlyShallowReadonly.vue")
  },
  {
    path: "/toraw",
    name: 'toraw',
    component: () => import(/*webpackChunkName:"about"*/ "@/views/toRawAndmarkRaw.vue")
  },
  {
    path: "/custom",
    name: 'custom',
    component: () => import(/*webpackChunkName:"about"*/ "@/views/customRef.vue")
  },
  {
    path: "/provide-inject",
    name: 'provide-inject',
    component: () => import(/*webpackChunkName:"about"*/ "@/views/provide-inject.vue")
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
