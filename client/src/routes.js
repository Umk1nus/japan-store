import {createRouter, createWebHashHistory} from 'vue-router'

const routerHistory = createWebHashHistory()

import homePage from './pages/home'
import aboutPage from './pages/about'
import reviewsPage from './pages/reviews'
import shopPage from './pages/shop'
import notFound from 'pages/notFound'

const routers = createRouter({
  history: routerHistory,
  routes:[
    {
      path: '/',
      name: 'home',
      component: homePage,
    },
    {
      path: '/about',
      name: 'about',
      component: aboutPage,
    },
    {
      path: '/reviews',
      name: 'reviews',
      component: reviewsPage,
    },
    {
      path: '/shop',
      name: 'shop',
      component: shopPage,
    },
    {
      path: '/:CatchAll(.*)',
      name: '404',
      component: notFound
    }
  ]
})

export default routers;