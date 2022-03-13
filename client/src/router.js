import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'

const routerHistory = createWebHashHistory()

import homePage from "@/pages/home.vue"



const routers = createRouter({
  history: routerHistory,
  routes:[
    {
      path: '/',
      name: 'Home',
      component: homePage,
    },
  ]
})

export default routers;