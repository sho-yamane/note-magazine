// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import firebase from 'firebase'

Vue.config.productionTip = false

const config = {
  apiKey: 'XXXXXXXXX',
  authDomain: 'XXXXXXXXXXXXX',
  databaseURL: 'XXXXXXXXXXXX',
  projectId: 'XXXXXXXXXXXX',
  storageBucket: 'XXXXXXXXXXXXX',
  messagingSenderId: 'XXXXXXXXXXXXX'
}

firebase.initializeApp(config)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
