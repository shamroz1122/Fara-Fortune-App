import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
axios.defaults.baseURL = 'http://localhost/myloanapp/public/api'
//axios.defaults.baseURL = 'https://bil.ranksol.com/myloanapp/public/api'

export default new Vuex.Store({
  state: {
    token:localStorage.getItem('access_token') || null,
    userId:localStorage.getItem('user_id') || null,
  },
  getters: {
    loggedIn(state) {
      return state.token !== null
    },
    loggedInUserId(state) {
      return state.userId
    }
  },
  mutations: {
    retrieveToken(state, token) {
      state.token = token
    },
    retrieveUserId(state, user_id){
      state.userId = user_id
    },
    destroyToken(state) {
      state.token = null
      state.userId = null
    }
  },
  actions: {
signup (context, data) {
  return new Promise((resolve, reject) => {
    var config = {
      headers: { 'content-type':'application/json'}
    }
    axios.post('/register', {
      name: data.name,
      email: data.email,
      password: data.password,
      businessname:data.businessname,
      contact:data.contact,
      monthlysale:data.monthalysale,
      creditvalue:data.creditvalue,
      bussinesstime:data.bussinesstime,
      loan:data.loan
    }, config)
      .then(response => {
        const token = response.data.token
        const user_id = response.data.user.id

        localStorage.setItem('access_token', token)
        context.commit('retrieveToken', token)

        localStorage.setItem('user_id', user_id)
        context.commit('retrieveUserId', user_id)
        resolve(response)
      })
      .catch(error => {
        reject(error.response)
    })
  })
},

authenticate(context, credentials){
  return new Promise((resolve, reject) => {

  var data = new FormData()
  data.append('email',credentials.email)
  data.append('password',credentials.password)
    axios.post('/login', data)
      .then(response => {

        const token = response.data.token
        const user_id = response.data.user.id

        localStorage.setItem('access_token', token)
        context.commit('retrieveToken', token)

        localStorage.setItem('user_id', user_id)
        context.commit('retrieveUserId', user_id)
        resolve(response)
      })
      .catch(error => {
        reject(error.response)
    })
  })
},
destroyToken(context) {
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
  if (context.getters.loggedIn) {
    return new Promise((resolve, reject) => {
      axios.get('/logout')
        .then(response => {
          localStorage.removeItem('access_token')
          localStorage.removeItem('user_type')
          localStorage.removeItem('user_id')
          context.commit('destroyToken')
          resolve(response)
          // console.log(response);
          // context.commit('addTodo', response.data)
        })
        .catch(error => {
          localStorage.removeItem('access_token')
          localStorage.removeItem('user_type')
          localStorage.removeItem('user_id')
          context.commit('destroyToken')
          reject(error)
        })
    })
  }
},
sendmsg(context, credentials) {
    var token_bearer =  context.state.token
    if (context.getters.loggedIn) {
      return new Promise((resolve, reject) => {
        var data = new FormData()
        data.append('user_id',credentials.user_id)
        data.append('name',credentials.name)
        data.append('email',credentials.email)
        data.append('phonenumber',credentials.phonenumber)
        data.append('message',credentials.message)
        axios.post('/msg?token='+token_bearer, data)
          .then(response => {
            if(response.data.status!=undefined && response.data.status=='Token is Expired')
            {
              localStorage.removeItem('access_token')
              localStorage.removeItem('user_id')
              context.commit('destroyToken')
            }
            resolve(response)
          })
          .catch(error => {
            reject(error.response)
          })
        })
      }
    },

loanprofile(context, credentials) {
  var token_bearer =  context.state.token
  if (context.getters.loggedIn) {
    return new Promise((resolve, reject) => {
      var data = new FormData()
      data.append('user_id',credentials.user_id)
      data.append('category',credentials.category)
      data.append('name',credentials.name)
      data.append('email',credentials.email)
      data.append('phonenumber',credentials.contact)
      data.append('loanamount',credentials.loanamount)
      data.append('creditscore',credentials.creditscore)
      data.append('revenue',credentials.revenue)
      data.append('fundrequest',credentials.fundrequest)
      data.append('useoffunds',credentials.useoffunds)
      data.append('typeofassets',credentials.typeofassets)

      axios.post('/prof?token='+token_bearer, data)
        .then(response => {
          if(response.data.status!=undefined && response.data.status=='Token is Expired')
          {
            localStorage.removeItem('access_token')
            localStorage.removeItem('user_id')
            context.commit('destroyToken')
          }
          resolve(response)
        })
        .catch(error => {
          reject(error.response)
        })
      })
    }
  },
  busAnalysis(context, credentials) {
    var token_bearer =  context.state.token
    if (context.getters.loggedIn) {
      return new Promise((resolve, reject) => {
        var data = new FormData()
        data.append('user_id',credentials.user_id)
        data.append('name',credentials.name)
        data.append('businessname',credentials.businessname)
        data.append('phonenumber',credentials.contact)
        data.append('pickbusiness',credentials.pickbusiness)
        data.append('busstime',credentials.busstime)
        data.append('grosssale',credentials.grosssale)
        data.append('seasonal',credentials.seasonal)

        axios.post('/busAn?token='+token_bearer, data)
          .then(response => {
            if(response.data.status!=undefined && response.data.status=='Token is Expired')
            {
              localStorage.removeItem('access_token')
              localStorage.removeItem('user_id')
              context.commit('destroyToken')
            }
            resolve(response)
          })
          .catch(error => {
            reject(error.response)
          })
        })
      }
    },

    quesSubm(context, credentials) {
    var token_bearer =  context.state.token
    if (context.getters.loggedIn) {
      return new Promise((resolve, reject) => {
        var data = new FormData()
        data.append('user_id',credentials.user_id)
        data.append('question1',credentials.question1)
        data.append('question2',credentials.question2)
        data.append('question3',credentials.question3)
        data.append('question4',credentials.question4)
        data.append('question5',credentials.question5)
        data.append('question6',credentials.question6)
        data.append('question6a',credentials.question6a)
        data.append('question7',credentials.question7)
        data.append('question8',credentials.question8)
        data.append('question9',credentials.question9)

        axios.post('/ques?token='+token_bearer, data)
          .then(response => {
            if(response.data.status!=undefined && response.data.status=='Token is Expired')
            {
              localStorage.removeItem('access_token')
              localStorage.removeItem('user_id')
              context.commit('destroyToken')
            }
            resolve(response)
          })
          .catch(error => {
            reject(error.response)
          })
        })
      }
    },
  }
})
