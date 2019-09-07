import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

import Splash from './views/Splash.vue'
import Form from './views/Account/Form.vue'
import Signup from './views/Account/Signup.vue'
import Login from './views/Account/Login.vue'
import Consult from './views/Dashboard/Consult.vue'
import Contact from './views/Dashboard/Contact.vue'
import Partner from './views/Dashboard/Partner.vue'
import Profile from './views/Dashboard/Profile.vue'

import Financepage from './views/Dashboard/Finance/Financepage.vue'
import Loanprofile from './views/Dashboard/Finance/Loanprofile.vue'

import Business from './views/Dashboard/BusinessAnalysis/Business.vue'
import Questions from './views/Dashboard/BusinessAnalysis/Questions.vue'
// import Payment from './views/Dashboard/BusinessAnalysis/Payment.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '',
      component: Splash,
      meta: {
        requiresVisitor: true,
     }

    },
    {
      path: '/form',
      name: 'form',
      component: Form,
      meta: {
        requiresVisitor: true,
     }
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup,
      meta: {
        requiresVisitor: true,
     }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        requiresVisitor: true,
     }
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: { requiresAuth: true }
    },
    {
      path: '/consult',
      name: 'consult',
      component: Consult,
      meta: { requiresAuth: true }
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
      meta: { requiresAuth: true }
    },
    {
      path: '/partner',
      name: 'partner',
      component: Partner,
      meta: { requiresAuth: true }
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
      meta: { requiresAuth: true }
    },
    {
      path: '/finance',
      name: 'finance',
      component: Financepage,
      meta: { requiresAuth: true }
    },
    {
      path: '/business',
      name: 'business',
      component: Business,
      meta: { requiresAuth: true }
    },
    {
      path: '/questions',
      name: 'questions',
      component: Questions,
      meta: { requiresAuth: true }
    },
    // {
    //   path: '/payment',
    //   name: 'payment',
    //   component: Payment
    // },
    {
      path: '/loanprofile/:id',
      name: 'loanprofile',
      component: Loanprofile,
      meta: { requiresAuth: true }
    }

    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
