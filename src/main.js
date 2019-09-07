import Vue from 'vue'
import './plugins/fontawesome'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.loggedIn) {
      next({
        name: 'login',
      })


    } else {
      next()

    }
  } else if (to.matched.some(record => record.meta.requiresVisitor)) {
    if (store.getters.loggedIn) {
      next({
        name: 'home',
      })

    } else {
      next()

    }
  } else {
    next()

  }
})




new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
