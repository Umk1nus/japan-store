import {createRouter, createWebHashHistory} from 'vue-router'

const routerHistory = createWebHashHistory()

const routers = createRouter({
  history: routerHistory,
})