import  Vue from 'vue'
import  Vuex from 'vuex'
import  user from './user'
import  down from './down';
import  school from './school'
import  bet from './bet'
Vue.use(Vuex);
export  default  new Vuex.Store({
     modules:{
         user,
         down,
         school,
         bet
     }
})
