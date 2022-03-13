import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'

const routerHistory = createWebHashHistory()

import homePage from "@/pages/home.vue"
import shopPage from "@/pages/shop.vue"
import reviewsPage from "@/pages/reviews.vue"
import aboutPage from "@/pages/about.vue"
import notFoundPage from "@/pages/notFound.vue"



const routers = createRouter({
  history: routerHistory,
  routes:[
    {
      path: '/',
      name: 'Home',
      component: homePage,
    },
    {
      path: '/shop',
      name: 'Shop',
      component: shopPage,
    },
    {
      path: '/reviews',
      name: 'Reviews',
      component: reviewsPage,
    },
    {
      path: '/about',
      name: 'About',
      component: aboutPage,
    },
    {
      path: '/:CatchAll(.*)',
      name: '404',
      component: notFoundPage,
    },
  ]
})

export default routers;