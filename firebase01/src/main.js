// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import firebase from 'firebase'

Vue.config.productionTip = false

const config = {
  apiKey: 'AIzaSyC58sIe-e3Y_1-ez2-CmM8rGQVu-0_rJ-Y',
  authDomain: 'note-sample-945af.firebaseapp.com',
  databaseURL: 'https://note-sample-945af.firebaseio.com',
  projectId: 'note-sample-945af',
  storageBucket: 'note-sample-945af.appspot.com',
  messagingSenderId: '129909758238'
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
